import { useMediaQuery } from 'react-responsive';
import { FC } from 'react';
import cn from 'classnames';

import { SidebarUnfolded } from './components/SidebarUnfolded/SidebarUnfolded';
import SidebarFolded from './components/SidebarFolded/SidebarFolded';
import styles from './Sidebar.module.scss';

type SidebarProps = {
  isOpen: boolean;
  handleClose: () => void;
};

export const Sidebar: FC<SidebarProps> = ({ isOpen, handleClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 770 });
  return (
    <>
      {isMobile ? (
        <>
          <div className={cn(styles.sidebarContainer, isOpen && isMobile && styles.sidebarContainerOpen)}>
            <SidebarUnfolded />
          </div>
          <div
            role="button"
            className={cn(isOpen && isMobile && styles.blockOverlay)}
            onClick={handleClose}
          />
        </>
      ) : (
        <>
          {isOpen ? <SidebarFolded /> : <SidebarUnfolded />}
          <div
            role="button"
            className={cn(isOpen && isMobile && styles.blockOverlay)}
            onClick={handleClose}
          />
        </>
      )}
    </>
  );
};
