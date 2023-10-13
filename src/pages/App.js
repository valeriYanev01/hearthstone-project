import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { PaginatedItems } from "../components/Pagination";
import CardSearch from "../components/CardSearch";

const expansionsArr = [
  "All Sets",
  "Classic",
  "Hall of Fame",
  "Naxxramas",
  "Goblins vs Gnomes",
  "Blackrock Mountain",
  "The Grand Tournament",
  "The League of Explorers",
  "Whispers of the Old Gods",
  "One Night in Karazhan",
  "Mean Streets of Gadgetzan",
  "Journey to Un'Goro",
  "Knights of the Frozen Throne",
  "Kobolds & Catacombs",
  "The Witchwood",
  "The Boomsday Project",
  "Rastakhan's Rumble",
  "Rise of Shadows",
  "Saviors of Uldum",
  "Descent of Dragons",
  "Galakrond's Awakening",
  "Ashes of Outland",
  "Scholomance Academy",
  "Demon Hunter Initiate",
  "Madness At The Darkmoon Faire",
  "Forged in the Barrens",
  "Legacy",
  "Core",
  "Vanilla",
  "United in Stormwind",
  "Fractured in Alterac Valley",
  "Voyage to the Sunken City",
  "Murder at Castle Nathria",
  "March of the Lich King",
  "Path of Arthas",
  "Festival of Legends",
  "TITANS",
  "Caverns of Time",
];

const dataArr = [];

function App() {
  const [allCards, setAllCards] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [cardsToDisplay, setCardsToDisplay] = useState([]);

  useEffect(() => {
    // Fetchind Data
    async function fetchData() {
      try {
        const res = await fetch("data.json");
        const data = await res.json();

        for (let i = 1; i < expansionsArr.length; i++) {
          for (let j = 0; j <= 382; j++) {
            if (data[expansionsArr[i]][j] === undefined) continue;
            dataArr.push(data[expansionsArr[i]][j]);
          }
        }
        setAllCards(dataArr);
      } catch (err) {
        throw new Error(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <CardSearch
        dataArr={dataArr}
        allCards={allCards}
        expansionsArr={expansionsArr}
        setCardsToDisplay={setCardsToDisplay}
        setIsReady={setIsReady}
        cardsToDisplay={cardsToDisplay}
      />

      <PaginatedItems itemsPerPage={20} cardsToDisplay={cardsToDisplay} isReady={isReady} />
    </div>
  );
}

export default App;
