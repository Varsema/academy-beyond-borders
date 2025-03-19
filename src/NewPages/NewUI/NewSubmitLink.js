import { Link } from 'react-router-dom';
import styles from './NewSubmitLink.module.scss'
import { useTranslation } from 'react-i18next';

const NewSubmitLink = ({className}) => {
  const {t} = useTranslation()
  return (
    <Link to={"/submit-claim"} className={`${className && className} ${styles.link}`}>{t('SubmitLink.text')}</Link>
  );
};

export default NewSubmitLink;
