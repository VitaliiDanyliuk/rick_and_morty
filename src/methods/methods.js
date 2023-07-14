export async function req(url) {
  const rez = await fetch(url);
  return await rez.json();
}

export function showInfo(data = []) {
  return data.results.map(({ name, image, species }) => {
    return (
      <div>
        <img src={image} alt={name} />
        <div>{name}</div>
        <div>{species}</div>
      </div>
    );
  });
}

