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
let displayArr = [];
let tempArr = [];

function filtering(cardProperty, inputValue) {
  let cardSet = "cardSet";

  if (cardProperty === "cost") {
    displayArr.forEach((card) => {
      if (Number(card[cardProperty]) === Number(inputValue) && card[cardSet] !== "Vanilla") {
        tempArr.push(card);
      }
    });
    displayArr = [...tempArr];
    tempArr.length = 0;
  } else {
    displayArr.forEach((card) => {
      if (card[cardProperty] === inputValue && card[cardSet] !== "Vanilla") {
        tempArr.push(card);
      }
    });
    displayArr = [...tempArr];
    tempArr.length = 0;
  }
}

function App() {
  const [allCards, setAllCards] = useState([]);
  const [cardName, setCardName] = useState("");
  const [cardSet, setCardSet] = useState("All Sets");
  const [cardClass, setCardClass] = useState("All Classes");
  const [cardRace, setCardRace] = useState("All Races");
  const [cardManaCost, setCardManaCost] = useState("All Costs");
  const [cardRarity, setCardRarity] = useState("All Rarities");
  const [cardFormat, setCardFormat] = useState("All Formats");
  const [isReady, setIsReady] = useState(false);
  const [cardsToDisplay, setCardsToDisplay] = useState([]);
  const [buttonText, setButtonText] = useState("Show All Cards");
  const [isFound, setIsFound] = useState(true);

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

  useEffect(() => {
    allCards.forEach((card) => {
      if (cardName !== "" && cardName.length > 2) {
        setButtonText("Filter Cards");
        if (card.name.toLowerCase().includes(cardName.toLowerCase())) {
          dataArr.forEach((card) => {
            if (card.name.toLowerCase().includes(cardName.toLowerCase()) && card.cardSet !== "Vanilla") {
              if (!tempArr.includes(card)) {
                tempArr.push(card);
              }
            }
          });
        }
      } else {
        card.cardSet !== "Vanilla" && tempArr.push(card);
      }
    });
    setIsFound(true);
    displayArr = [...tempArr];
    tempArr.length = 0;

    if (cardFormat === "Standard") {
      displayArr.forEach((card) => {
        if (card.cardSet === "Voyage to the Sunken City") {
          tempArr.push(card);
        } else if (card.cardSet === "Classic") {
          tempArr.push(card);
        } else if (card.cardSet === "Legacy") {
          tempArr.push(card);
        } else if (card.cardSet === "Murder at Castle Nathria") {
          tempArr.push(card);
        } else if (card.cardSet === "Core") {
          tempArr.push(card);
        } else if (card.cardSet === "March of the Lich King") {
          tempArr.push(card);
        } else if (card.cardSet === "Path of Arthas") {
          tempArr.push(card);
        } else if (card.cardSet === "Festival of Legends") {
          tempArr.push(card);
        } else if (card.cardSet === "TITANS") {
          tempArr.push(card);
        }
      });
      displayArr = [...tempArr];
      tempArr.length = 0;
    }
    if (cardFormat === "Wild") {
      displayArr.forEach((card) => {
        if (card.cardSet === "Naxxramas") {
          tempArr.push(card);
        } else if (card.cardSet === "Goblins vs Gnomes") {
          tempArr.push(card);
        } else if (card.cardSet === "Hall of Fame") {
          tempArr.push(card);
        } else if (card.cardSet === "Blackrock Mountain") {
          tempArr.push(card);
        } else if (card.cardSet === "The Grand Tournament") {
          tempArr.push(card);
        } else if (card.cardSet === "The League of Explorers") {
          tempArr.push(card);
        } else if (card.cardSet === "Whispers of the Old Gods") {
          tempArr.push(card);
        } else if (card.cardSet === "One Night in Karazhan") {
          tempArr.push(card);
        } else if (card.cardSet === "Mean Streets of Gadgetzan") {
          tempArr.push(card);
        } else if (card.cardSet === "Knights of the Frozen Throne") {
          tempArr.push(card);
        } else if (card.cardSet === "Kobolds & Catacombs") {
          tempArr.push(card);
        } else if (card.cardSet === "The Witchwood") {
          tempArr.push(card);
        } else if (card.cardSet === "The Boomsday Project") {
          tempArr.push(card);
        } else if (card.cardSet === "Rastakhan's Rumble") {
          tempArr.push(card);
        } else if (card.cardSet === "Rise of Shadows") {
          tempArr.push(card);
        } else if (card.cardSet === "Saviors of Uldum") {
          tempArr.push(card);
        } else if (card.cardSet === "Descent of Dragons") {
          tempArr.push(card);
        } else if (card.cardSet === "Galakrond's Awakening") {
          tempArr.push(card);
        } else if (card.cardSet === "Ashes of Outland") {
          tempArr.push(card);
        } else if (card.cardSet === "Scholomance Academy") {
          tempArr.push(card);
        } else if (card.cardSet === "Demon Hunter Initiate") {
          tempArr.push(card);
        } else if (card.cardSet === "Madness At The Darkmoon Faire") {
          tempArr.push(card);
        } else if (card.cardSet === "Forged in the Barrens") {
          tempArr.push(card);
        } else if (card.cardSet === "United in Stormwind") {
          tempArr.push(card);
        } else if (card.cardSet === "Fractured in Alterac Valley") {
          tempArr.push(card);
        } else if (card.cardSet === "Caverns of Time") {
          tempArr.push(card);
        }
      });
      displayArr = [...tempArr];
      tempArr.length = 0;
    }
    if (cardManaCost !== "All Costs") filtering("cost", cardManaCost);

    if (cardSet !== "All Sets") filtering("cardSet", cardSet);

    if (cardClass !== "All Classes") filtering("playerClass", cardClass);

    if (cardRace !== "All Races") filtering("race", cardRace);

    if (cardRarity !== "All Rarities") filtering("rarity", cardRarity);

    setCardsToDisplay(displayArr);
    displayArr = [];
    setIsReady(false);
  }, [cardName, cardSet, cardClass, cardRace, cardManaCost, cardRarity, allCards, cardFormat]);

  function onClickSearch() {
    cardsToDisplay.length < 1 && setIsFound(false);
    setIsReady(true);
  }

  return (
    <div className={styles.app}>
      <CardSearch
        setCardName={setCardName}
        setCardManaCost={setCardManaCost}
        setCardSet={setCardSet}
        setCardClass={setCardClass}
        setCardRace={setCardRace}
        setCardRarity={setCardRarity}
        setCardFormat={setCardFormat}
        onClickSearch={onClickSearch}
        expansionsArr={expansionsArr}
        buttonText={buttonText}
      />

      {!isFound && <h2>Card not found. Try reducing filter criteries.</h2>}
      <PaginatedItems itemsPerPage={20} cardsToDisplay={cardsToDisplay} isReady={isReady} />
    </div>
  );
}

export default App;
