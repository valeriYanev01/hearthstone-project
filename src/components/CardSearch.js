import styles from "./CardSearch.module.css";

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

function CardSearch({
  setCardName,
  setCardManaCost,
  setCardSet,
  expansionsArr,
  setCardClass,
  setCardRace,
  setCardRarity,
  setCardFormat,
  onClickSearch,
  buttonText,
}) {
  return (
    <div className={styles.app}>
      <h1>Search Cards:</h1>
      <p>Card Name:</p>
      <input type="text" onChange={(e) => setCardName(e.target.value)} />

      <p>Mana Cost:</p>
      <select onChange={(e) => setCardManaCost(e.target.value)}>
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

      <p>Card Set:</p>
      <select onChange={(e) => setCardSet(e.target.value)}>
        {expansionsArr.map((set) => (
          <option key={set}>{set}</option>
        ))}
      </select>

      <p>Card Class:</p>
      <select onChange={(e) => setCardClass(e.target.value)}>
        {classesArr.map((cardClass) => (
          <option key={cardClass}>{cardClass}</option>
        ))}
      </select>

      <p>Card Race:</p>
      <select onChange={(e) => setCardRace(e.target.value)}>
        {raceArr.map((race) => (
          <option key={race}>{race}</option>
        ))}
      </select>

      <p>Card Rarity:</p>
      <select onChange={(e) => setCardRarity(e.target.value)}>
        {rarityArr.map((rarity) => (
          <option key={rarity}>{rarity}</option>
        ))}
      </select>

      <p>Format:</p>
      <select
        onChange={(e) => {
          setCardFormat(e.target.value);
        }}
      >
        <option value="All Formats">All Formats</option>
        <option value="Standard">Standard</option>
        <option value="Wild">Wild</option>
      </select>

      <button onClick={onClickSearch}>{buttonText}</button>
    </div>
  );
}

export default CardSearch;
