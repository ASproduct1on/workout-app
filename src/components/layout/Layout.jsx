import cn from 'clsx';

import { useCheckToken } from '../../hooks/useCheckToken';

import styles from './Layout.module.scss';
import Header from './header/Header';

const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
  useCheckToken();

  return (
    <section
      className={cn(styles.wrapper, {
        [styles.otherPage]: !!heading,
      })}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header backLink={backLink} />

      {heading && <h1 className={styles.heading}>{heading}</h1>}

      {children && <div>{children}</div>}
    </section>
  );
};

export default Layout;
