import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { getAnimeData } from "../services/api";
import { addComas, useScrollTop } from "../services/utilities";
import Image from "../component/image";

export default function DetailsPage() {
  const [anime, setAnime] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { mal_id } = useParams();
  const contentRef = useRef(null);
  const scrollTop = useScrollTop(contentRef);
  const placeholder = !anime.images || isLoading;

  const getData = async () => {
    setLoading(true);
    const anime = await getAnimeData({
      endpoints: `anime/${mal_id}/full`,
    });

    setAnime(anime.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
    scrollTop();
  }, []);

  return (
    <main className="bg-gray-100 p-2 md:p-5" ref={contentRef}>
      <Header {...{ anime, placeholder }} />
      <div className="flex h-[45rem] w-full flex-col items-center gap-2 sm:h-[60rem] md:h-[65rem] lg:h-[22rem] lg:flex-row xl:h-[27rem]">
        <div className="flex h-1/2 w-3/5 items-center justify-center bg-gray-200 sm:h-[55%] lg:h-full lg:w-3/12">
          <Image
            src={anime?.images?.webp.large_image_url}
            {...{ placeholder }}
          />
        </div>
        <div className="flex h-1/2 w-full flex-col gap-y-2 sm:h-[45%] lg:h-full lg:w-9/12">
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
      <div className="flex w-1/4 bg-gray-200 p-3 sm:w-1/5 lg:w-3/20">
        <div className="flex h-full w-full flex-col items-center gap-1">
          <span className="placeholder h-2/6 w-2/3 rounded bg-blue-600"></span>
          <span className="placeholder h-3/6 w-2/3 rounded bg-gray-300"></span>
          <span className="placeholder h-1/6 w-4/5 rounded bg-gray-300"></span>
        </div>
      </div>
      <div className="placeholder h-full w-3/4 bg-gray-300 sm:w-4/5 lg:w-17/20"></div>
    </header>
  ) : (
    <header className="flex h-1/4 w-full border border-gray-400 bg-gray-300">
      <div className="flex w-1/4 bg-gray-200 p-3 sm:w-1/5 lg:w-3/20">
        <div className="flex h-full w-full flex-col items-center gap-1 text-center">
          <span className="h-1/3 w-3/4 rounded bg-blue-600 text-xs font-bold text-white sm:w-2/3 sm:text-base md:text-base lg:text-sm xl:text-base">
            Rating
          </span>
          <span className="flex h-1/3 w-4/5 items-center justify-center font-bold sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
            {anime.score}
          </span>
          <span className="h-1/3 text-xs leading-3 sm:w-4/5 sm:text-xs md:text-sm lg:text-xs xl:text-sm">
            {addComas(anime.scored_by)} users
          </span>
        </div>
      </div>
      <ul className="grid w-3/4 grid-cols-2 sm:flex sm:w-4/5 sm:items-center sm:justify-evenly lg:w-17/20">
        {content.map((item) => {
          return (
            <li
              key={item.name}
              className="flex h-full flex-col items-center justify-center text-sm sm:flex-row sm:text-sm md:text-base lg:text-lg xl:text-xl"
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
    <section className="h-3/4 w-full bg-gray-200 p-2 sm:p-4">
      <div className="placeholder h-full w-full rounded bg-gray-300"></div>
    </section>
  ) : (
    <section className="h-3/4 w-full text-sm sm:text-base md:text-base lg:px-2 lg:text-sm xl:text-base">
      <p>Title: {anime.title}</p>
      <p>Total Episode: {anime.episodes} </p>
      <p>Duration: {anime.duration}</p>
      <p>Status: {anime.status}</p>
      <p>Studios: {anime.studios.map((studio) => studio.name).join(", ")}</p>
      <p>Genres: {anime.genres.map((genre) => genre.name).join(", ")}</p>
      <p>Aired: {anime.aired.string}</p>
      <p>Broadcast: {anime.broadcast.string}</p>
      <p>Type: {anime.type}</p>
      <p>Source: {anime.source}</p>
      <p>Rating: {anime.rating}</p>
      <p>Season: {`${anime.season} ${anime.year}`}</p>
      <p className="truncate">
        Producers: {anime.producers.map((producer) => producer.name).join(", ")}
      </p>
    </section>
  );
}

function SynopsisSection({ anime, placeholder }) {
  return placeholder ? (
    <section className="mt-2 flex h-56 w-full flex-col gap-1 bg-gray-200 p-2 sm:p-4">
      <span className="placeholder mb-1 h-5 w-1/6 rounded bg-gray-300"></span>
      <div className="placeholder flex h-5/6 w-full flex-col gap-1 rounded bg-gray-300"></div>
    </section>
  ) : (
    <section className="mt-2 w-full bg-gray-200 p-2 text-sm sm:p-4 md:text-base">
      <span className="font-bold">Synopsis:</span>
      <p>{anime.synopsis.replace("[Written by MAL Rewrite]", "")}</p>
    </section>
  );
}
