import { useState, useRef } from "react";
import styles from "./CardSearch.module.css";
import SelectType from "./SelectType";

const classesArr = [
  "All Classes",
  "Death Knight",
  "Demon Hunter",
  "Druid",
  "Hunter",
  "Mage",
  "Paladin",
  "Priest",
  "Rouge",
  "Shaman",
  "Warlock",
  "Warrior",
  "Neutral",
];
const raceArr = [
  "All Races",
  "Amalgam",
  "Beast",
  "Demon",
  "Dragon",
  "Elemental",
  "Mech",
  "Murloc",
  "Naga",
  "Pirate",
  "Quilboar",
  "Totem",
  "Undead",
];
const rarityArr = ["All Rarities", "Free", "Common", "Rare", "Epic", "Legendary"];

let displayArr = [];
let tempArr = [];

function CardSearch({ allCards, expansionsArr, setCardsToDisplay, setIsReady, cardsToDisplay, dataArr }) {
  const initialName = useRef("");
  const initialManaCost = useRef("All Costs");
  const initialSet = useRef("All Sets");
  const initialClass = useRef("All Classes");
  const initialRace = useRef("All Races");
  const initialRarity = useRef("All Raririties");
  const initialFormat = useRef("All Formats");

  const [cardName, setCardName] = useState("");
  const [cardManaCost, setCardManaCost] = useState("All Costs");
  const [cardSet, setCardSet] = useState("All Sets");
  const [cardClass, setCardClass] = useState("All Classes");
  const [cardRace, setCardRace] = useState("All Races");
  const [cardRarity, setCardRarity] = useState("All Rarities");
  const [cardFormat, setCardFormat] = useState("All Formats");
  const [buttonText, setButtonText] = useState("Show All Cards");

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

  function hi() {
    allCards.forEach((card) => {
      if (cardName !== "" && cardName.length > 1) {
        setButtonText("Filter Cards");
        if (card.name.toLowerCase().includes(cardName.toLowerCase())) {
          dataArr.forEach((card) => {
            if (card.name.toLowerCase().includes(cardName.toLowerCase()) && card.cardSet !== "Vanilla" && card.img) {
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
  }

  function onClickSearch() {
    setIsReady(true);
    hi();
  }

  function resetFilters() {
    setIsReady(false);

    setCardName("");
    initialName.current.value = "";

    setCardManaCost("All Costs");
    initialManaCost.current.value = "All Costs";

    setCardSet("All Sets");
    initialSet.current.value = "All Sets";

    setCardClass("All Classes");
    initialClass.current.value = "All Classes";

    setCardRace("All Races");
    initialRace.current.value = "All Races";

    setCardRarity("All Rarities");
    initialRarity.current.value = "All Rarities";

    setCardFormat("All Formats");
    initialFormat.current.value = "All Formats";
  }

  return (
    <div className={styles.app}>
      <h1>Search Cards:</h1>
      <p>Card Name:</p>
      <input ref={initialName} type="text" onChange={(e) => setCardName(e.target.value)} />

      <p>Mana Cost:</p>
      <select ref={initialManaCost} onChange={(e) => setCardManaCost(e.target.value)}>
        <option value="All Costs">All Costs</option>
        <option value="0">0 Cost</option>
        <option value="1">1 Cost</option>
        <option value="2">2 Cost</option>
        <option value="3">3 Cost</option>
        <option value="4">4 Cost</option>
        <option value="5">5 Cost</option>
        <option value="6">6 Cost</option>
        <option value="7">7 Cost</option>
        <option value="7+">7+ Cost</option>
      </select>

      <SelectType customRef={initialSet} state={setCardSet} array={expansionsArr}>
        <p>Card Set:</p>
      </SelectType>

      <SelectType customRef={initialClass} state={setCardClass} array={classesArr}>
        <p>Card Class:</p>
      </SelectType>

      <SelectType customRef={initialRace} state={setCardRace} array={raceArr}>
        <p>Card Race:</p>
      </SelectType>

      <SelectType customRef={initialRarity} state={setCardRarity} array={rarityArr}>
        <p>Card Rarity:</p>
      </SelectType>

      <p>Format:</p>
      <select
        ref={initialFormat}
        onChange={(e) => {
          setCardFormat(e.target.value);
        }}
      >
        <option value="All Formats">All Formats</option>
        <option value="Standard">Standard</option>
        <option value="Wild">Wild</option>
      </select>
      <br />
      <button
        onClick={() => {
          onClickSearch();
        }}
      >
        {buttonText}
      </button>
      <button onClick={resetFilters}>Reset Filters</button>
      {cardsToDisplay.length < 1 && <p>Not found</p>}
    </div>
  );
}

export default CardSearch;
