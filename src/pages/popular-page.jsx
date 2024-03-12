import { useState, useEffect, useRef } from "react";
import { getAnimeData, removeDuplicates } from "../services/api";
import ListAnime from "../component/list-anime";
import Pagination from "../component/pagination";
import Dropdown from "../component/dropdown";
import Title from "../component/title";

export default function PopularPage() {
  const [anime, setAnime] = useState([]);
  const [page, setpage] = useState(1);
  const [lastpage, setlastpage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const contentRef = useRef(null);

  const dropdownMenu = [
    {
      title: "Comming Soon",
    },
  ];

  const getData = async () => {
    setLoading(true);
    const anime = await getAnimeData({
      endpoints: "top/anime",
      query: `page=${page}&limit=20&type=tv`,
    });

    setAnime(removeDuplicates(anime?.data));
    setlastpage(anime?.pagination.last_visible_page);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div ref={contentRef}>
      <Title text="Top Anime">
        <Dropdown list={dropdownMenu} />
      </Title>
      <ListAnime {...{ anime, isLoading }} />
      <div className="flex justify-center">
        <Pagination {...{ lastpage, setpage, page, contentRef }} />
      </div>
    </div>
  );
}
