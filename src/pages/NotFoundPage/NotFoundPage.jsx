import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { PiSmileySadThin } from 'react-icons/pi';
import css from './NotFoundPage.module.css';
const NotFoundPage = () => {
  return (
    <div className={css.errorBox}>
      <IconContext.Provider value={{ size: '200px', color: '#101828' }}>
        <PiSmileySadThin />
      </IconContext.Provider>
      <p className={css.errorMessage}>
        <span className={css.errorSpan}>oops!</span>
        Don`t worry, try again later
      </p>
      <Link to="/" className={css.btn}>
        Back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
