import styles from "./MechanicalIssues.module.scss";
import { Link } from "react-router-dom";
import image from "../../../components/Images/TeamPic.png";
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
          Airports that you may never want to leave{" "}
        </h3>
        <p className={styles.mainDiv__text}>
          International air travel is normally a pretty stressful affair. We
          hustle just to get to the airport. Then we stand through long lines in
          both security and passport check, pass all necessary stages. These
          everything may be exhausting. But there are some airports out there
          that you may never want to leave. These airports were built to impress
          travelers, not just to shuttle them around the world.
        </p>
        <button type="button" className={styles.button}>
          <Link to="/about-us/blog-page-more-airports" className={styles.link}>
            Read More
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Item;
