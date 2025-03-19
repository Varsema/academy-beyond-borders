import styles from "./BeAware.module.scss";

const Item = () => {
  return (
    <div className={styles.mainDiv}>
      <h3 className={styles.header}>Be Aware</h3>
      <div>
      <ul className={styles.bulletList}>
        <li>Do not give up your place in exchange for voucher or other things;</li>
        <li>Keep boarding pass and passport;</li>
        <li>Find out the reasons for refusal;</li>
        <li>Request an alternative ticket;</li>
        <li>Request compensation in cash on place;</li>
        <li>Ask whether the airline will cover your food and hotel expenses.</li>
      </ul>
    </div>
    </div>
  );
};

export default Item;
