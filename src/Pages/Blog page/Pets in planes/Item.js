import styles from "./PetsInPlanes.module.scss";
import { Link } from "react-router-dom";
import image from "../../../assetss/Blog Page/3/PetsInPlanes.jpg";
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
        <h3 className={styles.services__header}>Pets in planes </h3>
        <p className={styles.mainDiv__text}>
          All dogs and cats traveling within the European Union must be
          identified by an electronic chip. It should also possess a European
          passport. Provided and completed by an authorized veterinarian, the
          passport identifies your pet and certifies that it is properly
          vaccinated.
        </p>
        <button type="button" className={styles.button}>
          <Link to="/about-us/blog-page-more-pets" className={styles.link}>
            Read More
          </Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Item;
