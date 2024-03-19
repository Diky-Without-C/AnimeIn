import { useState, useEffect, useRef } from "react";
import { getAnimeData, removeDuplicates } from "../services/api";
import { capitalize, useScrollTop } from "../services/utilities";
import ListAnime from "../component/list-anime";
import Pagination from "../component/pagination";
import Dropdown from "../component/dropdown";
import Title from "../component/title";

export default function SeasonPage() {
  const [anime, setAnime] = useState([]);
  const [page, setpage] = useState(1);
  const [lastpage, setlastpage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const currentSeason = anime?.[0]?.season || "Anime";
  const currentYear = new Date().getFullYear();
  const contentRef = useRef(null);
  const scrollTop = useScrollTop(contentRef);

  const dropdownMenu = [
    {
      title: "Comming Soon",
    },
  ];

  const getData = async () => {
    setLoading(true);
    const anime = await getAnimeData({
      endpoints: "seasons/now",
      query: `page=${page}&filter=tv&sfw=true&limit=20`,
    });

    setAnime(removeDuplicates(anime?.data));
    setlastpage(anime?.pagination.last_visible_page);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    scrollTop();
  }, [page]);

  return (
    <div ref={contentRef}>
      <Title text={`${capitalize(currentSeason)} ${currentYear}`}>
        <Dropdown list={dropdownMenu} />
      </Title>
      <ListAnime {...{ anime, isLoading }} />
      <div className="flex justify-center">
        <Pagination {...{ lastpage, setpage, page }} />
      </div>
    </div>
  );
}
