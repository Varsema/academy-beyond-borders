import styles from "./AboutUsSection.module.scss";

const Item = () => {
  return (
    <div className={styles.mainDiv}>
      <h3 className={styles.mainDiv__header}>About Us</h3>
      <div className={styles.mainDiv__item}>
        <h4>
          “We have means to ease the process of getting the rightful
          compensation for our customers.”
        </h4>
      </div>
    </div>
  );
};

export default Item;
