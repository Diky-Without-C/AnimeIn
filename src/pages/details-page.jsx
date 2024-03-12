import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAnimeData } from "../services/api";
import { addComas, useScrollTop } from "../services/utilities";
import Image from "../component/image";

export default function DetailsPage({ contentRef }) {
  const [anime, setAnime] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { mal_id } = useParams();
  const scrollTop = useScrollTop(contentRef);
  const placeholder = !anime.images || isLoading;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const anime = await getAnimeData({
        endpoints: `anime/${mal_id}/full`,
      });

      setAnime(anime.data);
      setLoading(false);
    };
    getData();
    scrollTop();
  }, []);

  return (
    <main className="bg-gray-100 p-5">
      <Header {...{ anime, placeholder }} />
      <div className="flex h-[27rem] w-full flex-col items-center gap-2 lg:flex-row">
        <div className="flex h-full w-3/12 items-center justify-center bg-gray-200">
          <Image
            src={anime?.images?.webp.large_image_url}
            {...{ placeholder }}
          />
        </div>
        <div className="flex h-full w-9/12 flex-col gap-y-2">
          <RatingSection {...{ anime, placeholder }} />
          <InfoSection {...{ anime, placeholder }} />
        </div>
      </div>
      <SynopsisSection {...{ anime, placeholder }} />
    </main>
  );
}

function Header({ anime, placeholder }) {
  return placeholder ? (
    <header className="placeholder mb-2 h-24 w-full bg-blue-600"></header>
  ) : (
    <header className="mb-2 flex h-24 w-full flex-col justify-center bg-blue-600 p-5 text-white shadow-lg">
      <h1 className="truncate text-2xl font-bold">{anime.title}</h1>
      <h1 className="truncate text-xl">{anime.title_english}</h1>
    </header>
  );
}

function RatingSection({ anime, placeholder }) {
  const content = [
    {
      name: "Ranked",
      value: anime?.rank,
      hastag: true,
    },
    {
      name: "Popularity",
      value: anime?.popularity,
      hastag: true,
    },
    {
      name: "Favorites",
      value: anime?.favorites,
      hastag: true,
    },
    {
      name: "Members",
      value: anime?.members,
      hastag: false,
    },
  ];

  return placeholder ? (
    <header className="flex h-1/4 w-full bg-gray-300">
      <div className="flex w-3/20 bg-gray-200 p-3">
        <div className="flex h-full w-full flex-col items-center gap-1">
          <span className="placeholder h-2/6 w-2/3 rounded bg-blue-600"></span>
          <span className="placeholder h-3/6 w-2/3 rounded bg-gray-300"></span>
          <span className="placeholder h-1/6 w-4/5 rounded bg-gray-300"></span>
        </div>
      </div>
      <div className="placeholder h-full w-17/20 bg-gray-300"></div>
    </header>
  ) : (
    <header className="flex h-1/4 w-full border border-gray-400 bg-gray-300">
      <div className="flex w-3/20 bg-gray-200 p-3">
        <div className="flex h-full w-full flex-col items-center gap-1 text-center">
          <span className="h-1/3 w-2/3 rounded bg-blue-600 font-bold text-white">
            Rating
          </span>
          <span className="h-1/3 w-4/5 text-2xl font-bold">{anime.score}</span>
          <span className="h-1/3 w-4/5 whitespace-nowrap text-sm">
            {addComas(anime.scored_by)} users
          </span>
        </div>
      </div>
      <ul className="flex w-17/20 items-center justify-evenly">
        {content.map((item) => {
          return (
            <li
              key={item.name}
              className="flex h-full items-center justify-center whitespace-nowrap lg:text-base xl:text-xl"
            >
              <span>{item.name} </span>
              <span className="ml-1 font-bold">{`${item.hastag ? "#" : ""}${addComas(item.value)}`}</span>
            </li>
          );
        })}
      </ul>
    </header>
  );
}

function InfoSection({ anime, placeholder }) {
  return placeholder ? (
    <section className="h-3/4 w-full bg-gray-200 p-4">
      <div className="placeholder h-full w-full rounded bg-gray-300"></div>
    </section>
  ) : (
    <section className="h-3/4 w-full px-2">
      <p>Title: {anime.title}</p>
      <p>Episodes: {anime.episodes}</p>
      <p>Duration: {anime.duration}</p>
      <p>Status: {anime.status}</p>
      <p>Aired: {anime.aired.string}</p>
      <p>Broadcast: {anime.broadcast.string}</p>
      <p>Type: {anime.type}</p>
      <p>Source: {anime.source}</p>
      <p>Rating: {anime.rating}</p>
      <p>Season: {`${anime.season} ${anime.year}`}</p>
      <p>Genres: {anime.genres.map((genre) => genre.name).join(", ")}</p>
      <p>
        Producers: {anime.producers.map((producer) => producer.name).join(", ")}
      </p>
      <p>Studios: {anime.studios.map((studio) => studio.name).join(", ")}</p>
    </section>
  );
}

function SynopsisSection({ anime, placeholder }) {
  return placeholder ? (
    <section className="mt-2 flex h-56 w-full flex-col gap-1 bg-gray-200 p-4">
      <span className="placeholder mb-1 h-5 w-1/6 rounded bg-gray-300"></span>
      <div className="placeholder flex h-5/6 w-full flex-col gap-1 rounded bg-gray-300"></div>
    </section>
  ) : (
    <section className="mt-2 w-full bg-gray-200 p-4">
      <span className="font-bold">Synopsis:</span>
      <p>{anime.synopsis.replace("[Written by MAL Rewrite]", "")}</p>
    </section>
  );
}
