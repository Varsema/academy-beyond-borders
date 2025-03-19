import { Link } from "react-router-dom";
import logo from "../NewLogo/NewLogoPic/LogoFly.png";
import styles from './NewLogo.module.scss';

const NewLogo = () => {
    return (
        <h1 className={styles.logo}>
            <Link to="/">
                <img src={logo} alt="Logo" className={styles.logo__img} />
            </Link>
        </h1>
    );
}

export default NewLogo;