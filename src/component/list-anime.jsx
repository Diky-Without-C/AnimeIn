import Card from "./card";

export default function ListAnime({ anime, isLoading, complete = true }) {
  const placeholder = !anime.length || isLoading;
  const tempArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <section className="mb-6 grid w-full grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-5 xl:gap-5">
      {placeholder
        ? tempArray.map((index) => {
            return <Card key={index} {...{ placeholder, complete }} />;
          })
        : anime.map((anime) => {
            return <Card key={anime.mal_id} {...{ anime, complete }} />;
          })}
    </section>
  );
}
