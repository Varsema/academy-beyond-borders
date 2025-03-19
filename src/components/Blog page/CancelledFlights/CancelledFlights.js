import Item from "./Item.js";
import styles from "./CancelledFlights.module.scss";

const CancelledFlights = () => {
  return (
    <div>
      <div className={`${styles.services} container`}>
        <div className="row">
          <div className="col-lg- col-12">
            <h3 className={styles.services__header}>The most common reasons why the flights get cancelled</h3>
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelledFlights;
