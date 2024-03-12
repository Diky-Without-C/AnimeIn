import { useEffect, useState } from "react";
import {
  getAnimeData,
  getNestedData,
  randomize,
  removeDuplicates,
} from "../services/api";
import { getCurrentTime } from "../services/utilities";
import ListAnime from "../component/list-anime";
import Title from "../component/title";

export default function HomePage() {
  const [anime, setAnime] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentTime, setTime] = useState("");

  const getData = async () => {
    setLoading(true);
    const anime = await getAnimeData({
      endpoints: "recommendations/anime",
    });

    const data = await getNestedData({
      data: anime.data,
      property: "entry",
    });

    randomize(data);

    setAnime(removeDuplicates(data).slice(0, 20));
    setLoading(false);
  };

  useEffect(() => {
    getData();
    setTime(getCurrentTime());
  }, []);

  return (
    <>
      <header className="mb-2 h-24 w-full">
        <h1 className="mb-5 text-center text-4xl font-bold">
          Good {currentTime}, Wellcome Back
        </h1>
      </header>
      <Title text="For you"></Title>
      <ListAnime complete={false} {...{ anime, isLoading }} />
    </>
  );
}
