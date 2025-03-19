import styles from "./CompensationInfo.module.scss";

const Item = () => {
  return (
    <div className="">
      <div className={styles.mainDiv}>
        <h3 className={styles.header}>
          Flight delay compensation of up to 600 EUR
        </h3>
        <div className={styles.item}>
          <h4>Airlines are not always punctual and flight delays happen.</h4>
          <p>
            Often these are insignificant, but sometimes they can disrupt your
            plans.The European Union Act 261 in such cases allows EUR 600
            compensation.
          </p>
          <br></br>
          <h4>Which airlines can you get compensation from.</h4>
          <p>
            According to EC 261 law, compensation coverage depends on the origin
            of the airline and the flight direction. For details see the chart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
