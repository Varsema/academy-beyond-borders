import { useTranslation } from "react-i18next";
import styles from "./CompensationHowMuch.module.scss";

const BulletPoint = () => {
  const {t} = useTranslation()
  return (
    <div>
      <div className={styles.headerOfBullet}>
        {t('FlightCancellationCompensationHowMuch._h1')}
      </div>
      <div className={styles.headerOfBullet}>
        {t('FlightCancellationCompensationHowMuch._h2')}
      </div>
      <div className={styles.headerOfBullet}>
        {t('FlightCancellationCompensationHowMuch._h3')}
      </div>
    </div>
  );
};

export default BulletPoint;
