import { useMediaQuery } from 'react-responsive';
import { Routes } from 'react-router-dom';
import { useState } from 'react';

import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import styles from './App.module.scss';

export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 770 });
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <main>
      {isMobile && <Header handleOpenSidebar={() => setOpenSidebar((prev) => !prev)} />}

      <div className={styles.content}>
        <Sidebar
          isOpen={openSidebar}
          handleClose={() => {
            setOpenSidebar(false);
          }}
        />
        <Routes />
      </div>
    </main>
  );
};
