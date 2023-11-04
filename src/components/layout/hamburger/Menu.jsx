import cn from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Hamburger.module.scss';
import { menu } from './menu.data.js';

const Menu = ({ isShow }) => {
  const logoutHandler = () => {};
  return (
    <div>
      <nav
        className={cn(styles.menu, {
          [styles.show]: isShow,
        })}
      >
        <ul>
          {menu.map((item, index) => (
            <li key={`_menu_${index}`}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
