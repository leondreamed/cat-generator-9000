import { useState } from "react";

function getRandomCatUrl() {
  const randomInt = Math.floor(Math.random() * 195 + 1);
  return `/cat${randomInt}.png`;
}

function CatGenerator() {
  let [catUrl, setCatUrl] = useState(getRandomCatUrl());

  const generateCat = () => {
    setCatUrl(getRandomCatUrl());
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Cat Generator 9000</h1>
      <button style={{ marginBottom: 5 }} onClick={generateCat}>
        Generate a new cat!
      </button>
      <img src={catUrl} height="400" />
    </div>
  );
}

export default CatGenerator;
