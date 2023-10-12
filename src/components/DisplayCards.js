import styles from "./DisplayCards.module.css";

function DisplayCards({ currentItems, isReady }) {
  return (
    <div className={styles.cardApp}>
      {currentItems &&
        isReady &&
        currentItems.map((card) => (
          <ul key={card.cardId}>
            <li>
              <h2>{card.name}</h2>
              <h2>{card.cost}</h2>
              <h2>{card.cardSet}</h2>
              <h2>{card.playerClass}</h2>
              <h2>{card.race}</h2>
              <h2>{card.rarity}</h2>
              <img src={card.img} alt={card.name} />
            </li>
          </ul>
        ))}
    </div>
  );
}

export default DisplayCards;
