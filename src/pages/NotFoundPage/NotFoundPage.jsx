import { IconContext } from 'react-icons';
import { PiSmileySadThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={css.errorBox}>
      <IconContext.Provider value={{ size: '200px', color: '#101828' }}>
        <PiSmileySadThin />
      </IconContext.Provider>
      <p className={css.errorMessage}>
        <span className={css.errorSpan}>oops!</span>
        Don`t worry, try again later
      </p>
      <button onClick={() => navigate('/')} className={css.btn}>
        Back home
      </button>
    </div>
  );
};

export default NotFoundPage;
