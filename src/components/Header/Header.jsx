import { Logo } from '../../assets/icons.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <Navigation />
    </div>
  );
};
