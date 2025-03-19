import styles from "./CancelledFlights.module.scss";
import { Link } from "react-router-dom";
import image from "../../../components/Images/AirplaneImageWithLogo.png";
const Item = () => {
  return (
    <div className={styles.mainDiv}>
      <div className="">
        <img
          className={styles.mainDiv__image}
          src={image}
          alt="Airplane image with logo"
        />
      </div>
      <div className={styles.mainDiv__textArea}>
        <h3 className={styles.services__header}>
          The most common reasons why the flights get cancelled
        </h3>
        <p className={styles.mainDiv__text}>
        Summer, vacations, holidays, these are periods when most people plan their dream trips.
         Everything is ready and only thing you have to do, is to go to the airport and get in 
         your plane.
        What is the worst that may happen when you are going to start your trip? – Words on 
        the huge screen: …..flight cancelled!
        </p>
        <button type="button" className={styles.button}>
          <Link to="/about-us/blog-page-more" className={styles.link}>
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
