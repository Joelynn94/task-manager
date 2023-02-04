import React from 'react';
import Image from 'next/image';
import headerStyles from '../styles/Header.module.scss';
import buttonStyles from '../styles/Button.module.scss';

const Header = () => {
  return (
    <nav className={headerStyles.container}>
      <h2 className={headerStyles.boardName}>Platform Launch</h2>
      <div className={headerStyles.boardLaunchModal}>
        <Image src="/logo.svg" width={24} height={25} />
        <button
          role="button"
          type="button"
          className={headerStyles.boardLaunchModalButton}
        >
          <span className={headerStyles.boardLaunchModalText}>Platform Launch</span>
          <Image src="/icon-chevron-down.svg" width={10} height={7} />
        </button>
      </div>
      <div className={headerStyles.boardActions}>
        <button
          role="button"
          type="button"
          aria-label="Add New Task"
          className={buttonStyles.primary}
        >
          <Image src="/icon-add-task-mobile.svg" width={12} height={12} />
          <span className={headerStyles.boardActionsText}>Add New Task</span>
        </button>
        <button
          role="button"
          type="button"
          aria-label="Edit or delete a board"
          className={headerStyles.boardActionsButton}
        >
          <Image src="/icon-vertical-ellipsis.svg" width={5} height={20} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
