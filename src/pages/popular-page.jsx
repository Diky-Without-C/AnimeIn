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

  const [type, setType] = useState("tv");

  const dropdownMenu = [
    {
      title: "type",
      subList: [
        {
          title: "tv",
          checked: true,
          action: () => setType("tv"),
        },
        {
          title: "movie",
          checked: false,
          action: () => setType("movie"),
        },
        {
          title: "ova",
          checked: false,
          action: () => setType("ova"),
        },
        {
          title: "ona",
          checked: false,
          action: () => setType("ona"),
        },
        {
          title: "special",
          checked: false,
          action: () => setType("special"),
        },
      ],
    },
    {
      title: "allow sfw",
      checked: false,
    },
  ];

  const getData = async () => {
    setLoading(true);
    const anime = await getAnimeData({
      endpoints: "top/anime",
      query: `page=${page}&limit=20&type=${type}`,
    });

    setAnime(removeDuplicates(anime?.data));
    setlastpage(anime?.pagination.last_visible_page);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [page, type]);

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
