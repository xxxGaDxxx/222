import SVG from 'react-inlinesvg';
import { FC, useState } from 'react';

import burgerIcon from '../../assets/icon/burger/burger.svg';
import crownImg from '../../assets/img/crown.png';
import { Button } from '../ui/Buttons/Button';
import { LinkButton } from '../ui/Buttons/LinkButton';
import styles from './Header.module.scss';

type HeaderProps = {
  handleOpenSidebar: () => void;
};

export const Header: FC<HeaderProps> = ({ handleOpenSidebar }) => {
  const [login, setLogin] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.containerLeft}>
        <Button
          variant="empty"
          onClick={handleOpenSidebar}
        >
          <SVG src={burgerIcon} />
        </Button>

        <LinkButton variant="empty">
          <img
            src={crownImg}
            alt="logo"
            className={styles.logo}
          />
        </LinkButton>
      </div>

      <div className={styles.containerRight}>
        {login ? (
          <Button
            variant="primary"
            size="medium"
            uppercase
            classNames={styles.btn}
            onClick={() => setLogin(false)}
          >
            Deposit 0.00$
          </Button>
        ) : (
          <>
            <Button
              variant="secondary"
              size="medium"
              uppercase
              classNames={styles.btn}
              onClick={() => setLogin(true)}
            >
              Log in
            </Button>
            <Button
              variant="primary"
              size="medium"
              uppercase
              classNames={styles.btn}
              onClick={() => setLogin(true)}
            >
              Sing Up
            </Button>
          </>
        )}
      </div>
    </header>
  );
};
