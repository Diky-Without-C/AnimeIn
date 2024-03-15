export async function getAnimeData({ endpoints, query }) {
  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/${endpoints}${query ? `?${query}` : ""}`,
    );
    if (!response.ok) {
      throw new Error("429");
    }
    const anime = await response.json();
    return anime;
  } catch (error) {
    console.log(error);
  }
}

export async function getNestedData({ data, property }) {
  const result = await data.flatMap((data) => data[property]);
  return result.filter((anime) => anime.mal_id > 3000);
}

export function removeDuplicates(data = []) {
  const uniqueKey = new Map();

  for (const key of data) {
    const stringykey = JSON.stringify(key);

    if (!uniqueKey.has(stringykey)) {
      uniqueKey.set(stringykey, true);
    }
  }

  return Array.from(uniqueKey.keys()).map((key) => JSON.parse(key));
}

export function randomize(data) {
  const result = data.sort(() => Math.random() - 0.5);
  return result;
}
