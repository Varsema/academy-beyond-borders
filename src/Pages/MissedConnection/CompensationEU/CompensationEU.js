import Item from "./Item.js";
import styles from "./CompensationEU.module.scss";
import BulletPoint from "./BulletPoint.js";

const CompensationEU = () => {
  return (
    <div className={styles.services}>
      <div className={`container `}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <BulletPoint />
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompensationEU;
