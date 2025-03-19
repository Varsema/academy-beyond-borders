import styles from "./CompensationInfo.module.scss";

const Item = () => {
  return (
    <div className="">
      <div className={styles.mainDiv}>
        <h3 className={styles.header}>
        Lost Luggage Compensation
        </h3>
        <div className={styles.item}>
          <h4>When using air transport, one of the most common problems 
            is the lose of luggage, delay and damage. Such cases are completely compensable.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Item;
