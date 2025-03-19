import styles from "./BeAware.module.scss";
import image from "../../../components/Images/MonitorImage.png"
import SectionCover from "../../../components/SectionTextAndCover/SectionCover.js";
import SectionText from "../../../components/SectionTextAndCover/SectionText.js";
import { useTranslation } from "react-i18next";

const BeAware = () => {
  const {t} = useTranslation()
  return (
    <div className={styles.services}>
      <div className={`container`}>
        <div className="row">
          <div className="col-lg-6 col-12">
            <SectionCover image={image} />
            {/* <img className={styles.image} src={image} alt="MonitorImage"></img> */}
          </div>
          <div className={`${styles.item} col-lg-6 col-12`}>
            <SectionText title={t('MissedConnectionBeAware.title')} >
            <ul className={styles.bulletList}>
              <li>{t('MissedConnectionBeAware._1')}</li>
              <li>{t('MissedConnectionBeAware._2')}</li>
              <li>{t('MissedConnectionBeAware._3')}</li>
              <li>{t('MissedConnectionBeAware._4')}</li>
              <li>{t('MissedConnectionBeAware._5')}</li>
              <li>{t('MissedConnectionBeAware._6')}</li>
            </ul>
            </SectionText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeAware;
