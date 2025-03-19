import { useTranslation } from "react-i18next";
import styles from "./CompensationEU.module.scss";

const BulletPoint = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.headerOfBullet}>
      <div >
      {t('MissedConnectionCompensationUSA.text')}
      
      </div>
    </div>
  );
};

export default BulletPoint;
