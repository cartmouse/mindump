import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [dumps, setDumps] = useState<string[]>([]);

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setDumps([...dumps, event.currentTarget.value]);
      event.currentTarget.value = "";
    }
  };

  return (
    <>
      <div className="home">
        <i>What's on your mind? Lay it on me...</i>
        <input onKeyDown={keyPress}></input>
        <Dumps dumps={dumps} />
      </div>
    </>
  );
};

export default Home;

const Dumps = ({ dumps }: { dumps: string[] }) => {
  console.log(dumps);
  return (
    <ul className="dump-list">
      {dumps.map((dump, index) => {
        return <li key={`dump-${index}`}>{dump}</li>;
      })}
    </ul>
  );
};
