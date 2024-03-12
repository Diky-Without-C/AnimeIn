import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { getAnimeData, removeDuplicates } from "../services/api";
import ListAnime from "../component/list-anime";
import Pagination from "../component/pagination";

export default function SearchPage() {
  const [anime, setAnime] = useState([]);
  const [page, setpage] = useState(1);
  const [lastpage, setlastpage] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { query } = useParams();
  const contentRef = useRef(null);

  const getData = async () => {
    setLoading(true);
    const anime = await getAnimeData({
      endpoints: "anime",
      query: `q=${query}&page=${page}&limit=20&sfw=true&min_score=4`,
    });

    setAnime(removeDuplicates(anime.data));
    setlastpage(anime.pagination.last_visible_page);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [query, page]);

  useEffect(() => {
    setpage(1);
  }, [query]);

  return (
    <>
      {anime?.pagination?.items.count == 0 ? (
        <>
          <h4 className="mb-4 mt-2 text-2xl font-bold tracking-tight">
            {`No match for ${query} ...`}
          </h4>
        </>
      ) : (
        <>
          <h4 className="mb-4 mt-2 text-2xl font-bold tracking-tight">
            {`Search for ${query} ...`}
          </h4>
          <ListAnime {...{ anime, isLoading }} />
          <div className="flex justify-center">
            <Pagination {...{ lastpage, setpage, page, contentRef }} />
          </div>
        </>
      )}
    </>
  );
}
