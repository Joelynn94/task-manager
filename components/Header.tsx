import React, { useState } from 'react';
import Image from 'next/image';
import headerStyles from '../styles/Header.module.scss';
import Dialog from './Dialog';
import Button from './Button';

const Header = () => {
  const [showDialog, setShowDialog] = useState(false);

  const open = () => {
    setShowDialog(true);
  };

  const close = () => {
    setShowDialog(false);
  };

  return (
    <nav className={headerStyles.container}>
      <h2 className={headerStyles.boardName}>Platform Launch</h2>
      <div className={headerStyles.boardLaunchModal}>
        <Image src="/logo.svg" width={24} height={25} />
        <Button buttonStyle={'default'} onClick={open}>
          <span className={headerStyles.boardLaunchModalText}>Platform Launch</span>
          <Image src="/icon-chevron-down.svg" width={10} height={7} />
        </Button>
      </div>
      <div className={headerStyles.boardActions}>
        <Button aria-label={'Add New Task'} buttonStyle={'primary'} onClick={open}>
          <Image src="/icon-add-task-mobile.svg" width={12} height={12} />
          <span className={headerStyles.boardActionsText}>Add New Task</span>
        </Button>
        <Dialog showModal={showDialog} onDismiss={close}>
          <h3 className="text-subtitle2 text-gray">All Boards (3)</h3>
          <ul>
            <li>
              <Button buttonStyle="buttonSpecial" isActive={true}>
                <Image src="/icon-board.svg" width={16} height={16} />
                Platform Launch
              </Button>
            </li>
            <li>
              <Button buttonStyle="buttonSpecial">
                <Image src="/icon-board.svg" width={16} height={16} />
                Marketing Plan
              </Button>
            </li>
            <li>
              <Button buttonStyle="buttonSpecial">
                <Image src="/icon-board.svg" width={16} height={16} />
                Roadmap
              </Button>
            </li>
          </ul>
        </Dialog>
        <Button aria-label={'Edit or delete a board'} buttonStyle={'board-actions'}>
          <Image src="/icon-vertical-ellipsis.svg" width={5} height={20} />
        </Button>
      </div>
    </nav>
  );
};

export default Header;
