import { Link } from "react-router-dom";
import { addComas } from "../services/utilities";
import Image from "./image";
import Badge from "./badge";
import Icon from "./icon";

export default function Card({ anime, placeholder, complete }) {
  return (
    <Link
      to={anime && `/AnimeIn/anime/${anime.mal_id}`}
      className={placeholder ? "" : "transition-all hover:scale-[1.025]"}
    >
      <div
        className={`mx-auto flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm shadow-black 
        ${complete ? "h-48 sm:h-76 md:h-88 lg:h-96 xl:h-112" : "h-36 sm:h-52 md:h-64 lg:h-76 xl:h-88"}`}
      >
        <div
          className={`relative flex w-full items-center justify-center overflow-hidden rounded-t-lg
          ${complete ? "h-4/6" : "h-5/6"}`}
        >
          <Image src={anime?.images.webp.image_url} {...{ placeholder }} />
          <Badge
            text={anime?.type}
            color="blue"
            position="topLeft"
            {...{ placeholder }}
          />
        </div>
        {complete ? (
          <section className="flex flex-grow flex-col justify-between">
            <div className="mx-1 flex h-4/6 flex-col gap-y-1 sm:mx-2">
              <Title {...{ anime, placeholder }} />
              <RattingSection {...{ anime, placeholder }} />
              <GenresSection {...{ anime, placeholder }} />
            </div>
            <ViewSection {...{ anime, placeholder }} />
          </section>
        ) : (
          <section className="flex flex-grow flex-col">
            <div className="mx-1 flex h-full flex-col justify-center gap-y-1 sm:mx-2">
              <Title {...{ anime, placeholder }} />
            </div>
          </section>
        )}
      </div>
    </Link>
  );
}

function Title({ anime, placeholder }) {
  return placeholder ? (
    <div className="h-2/6 rounded bg-gray-300"></div>
  ) : (
    <div className="flex h-2/6 items-center">
      <h5 className="truncate text-[0.6rem] font-bold tracking-tight sm:text-sm md:text-base lg:text-lg">
        {anime.title}
      </h5>
    </div>
  );
}

function RattingSection({ anime, placeholder }) {
  function splitNumber(number) {
    const resultArray = [1, 0, 0, 0, 0];

    if (number < 1) {
      resultArray[0] = number;
    } else {
      const integerPart = Math.floor(number);
      const fraction = number - integerPart;

      for (let i = 0; i < integerPart; i++) {
        resultArray[i] = 1;
      }

      if (fraction !== 0) {
        resultArray[integerPart] = fraction;
      }
    }

    return resultArray;
  }

  const stars = !placeholder && splitNumber(anime.score / 2);

  return placeholder ? (
    <div className="placeholder h-1/6 rounded bg-gray-300"></div>
  ) : (
    <div className="flex h-1/6 items-center">
      <div className="flex h-full">
        {stars.map((star, index) => {
          return (
            <span key={index} className="-mr-1 pt-1">
              <Icon
                name="star"
                color="star"
                size="medium"
                fill={`${star != 0}`}
                mask={`${star % 1 != 0}`}
              />
            </span>
          );
        })}
      </div>
      <p className="whitespace-nowrap text-[0.4rem] font-medium text-gray-700 sm:text-xs lg:text-sm xl:text-base">
        {anime.score
          ? `(${addComas(anime.scored_by)} review)`
          : "Not rated yet"}
      </p>
    </div>
  );
}

function GenresSection({ anime, placeholder }) {
  const genres = anime?.genres.slice(0, 5);

  return placeholder ? (
    <div className="flex h-2/5 flex-col gap-y-1">
      <span className="placeholder h-1/3 w-full rounded bg-gray-300"></span>
      <span className="placeholder h-1/3 w-2/5 rounded bg-gray-300"></span>
    </div>
  ) : (
    <div className="h-2/5 overflow-hidden text-[0.35rem] sm:text-[0.7rem] md:text-xs xl:text-sm">
      <p className="break-words">
        {genres.map((genre) => genre.name).join(", ")}
      </p>
    </div>
  );
}

function ViewSection({ anime, placeholder }) {
  return placeholder ? (
    <div className="placeholder flex h-2/6 justify-around rounded-lg bg-gray-300"></div>
  ) : (
    <div className="flex h-2/6 justify-around rounded-lg bg-gray-800 text-[0.45rem] text-white sm:text-xs md:text-sm xl:text-base">
      <div className="flex flex-col items-center">
        <span>{addComas(anime.members)}</span>
        <span>View</span>
      </div>
      <div className="flex flex-col items-center">
        <span>{anime.episodes || "-"}</span>
        <span>Episodes</span>
      </div>
    </div>
  );
}
