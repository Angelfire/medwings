const API_KEY = "2139a69525eb439bbed082fae2fd86b3";

const germanCoordinates = async (lat, long) => {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?key=${API_KEY}&q=${lat}+${long}&pretty=1`
  );
  const body = await res.json();
  const { results } = body;

  return results.length > 0
    ? results[0].components.country === "Germany"
    : null;
};

export default germanCoordinates;
