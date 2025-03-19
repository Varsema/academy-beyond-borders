import styles from "./CancelledFlights.module.scss";
import image from "../../Images/TwoWomenPic.png";
const Cards = () => {
  return (

    <div className={styles.card}>
    <div className="container">
      <div className="col">
        <div className="card mb-3">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body row">
            <h5 className="card-title">
              The most common reasons why the flights get cancelled
            </h5>
            <p className={styles.cardText}>
              Summer, vacations, holidays, these are periods when most people
              plan their dream trips. Everything is ready and only thing
            </p>
            <button type="button" className={styles.button}>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-3">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body row">
            <h5 className="card-title">
              The most common reasons why the flights get cancelled
            </h5>
            <p className={styles.cardText}>
              Summer, vacations, holidays, these are periods when most people
              plan their dream trips. Everything is ready and only thing
            </p>
            <button type="button" className={styles.button}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cards;
