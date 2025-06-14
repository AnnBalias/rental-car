import Logo from '../../assets/icons/logo.svg';
import { Navigation } from '../Navigation/Navigation.jsx';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <img src={Logo} alt="Logo" className={css.logo} />
      <Navigation />
    </div>
  );
};
