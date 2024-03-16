export default function Carousel({ anime }) {
  return (
    <div className="flex h-88 w-full gap-3 overflow-x-auto bg-gray-400">
      {anime.map((data, index) => {
        return <img key={index} src={data.images.webp.large_image_url} />;
      })}
    </div>
  );
}
