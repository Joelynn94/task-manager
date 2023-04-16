import React, { useState } from 'react';
import Image from 'next/image';
import headerStyles from '../styles/Header.module.scss';
import buttonStyles from '../styles/Button.module.scss';
import DialogContainer from './Dialog';
import Button from './Button';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={headerStyles.container}>
      <h2 className={headerStyles.boardName}>Platform Launch</h2>
      <div className={headerStyles.boardLaunchModal}>
        <Image src="/logo.svg" width={24} height={25} />
        <Button buttonStyle={'default'} onClick={() => setOpen(true)}>
          <span className={headerStyles.boardLaunchModalText}>Platform Launch</span>
          <Image src="/icon-chevron-down.svg" width={10} height={7} />
        </Button>
        <DialogContainer isOpen={open} onClose={() => setOpen(false)}>
          <h3 className="text-subtitle2 text-gray">All Boards (3)</h3>
          <div>
            <Button buttonStyle="buttonSpecial">
              <Image src="/icon-board.svg" width={16} height={16} />
              Platform Launch
            </Button>
            <Button>
              <Image src="/icon-board.svg" width={16} height={16} />
              Marketing Plan
            </Button>
            <Button>
              <Image src="/icon-board.svg" width={16} height={16} />
              Roadmap
            </Button>
          </div>
        </DialogContainer>
      </div>
      <div className={headerStyles.boardActions}>
        <Button aria-label={'Add New Task'} buttonStyle={'primary'}>
          <Image src="/icon-add-task-mobile.svg" width={12} height={12} />
          <span className={headerStyles.boardActionsText}>Add New Task</span>
        </Button>
        <Button aria-label={'Edit or delete a board'} buttonStyle={'board-actions'}>
          <Image src="/icon-vertical-ellipsis.svg" width={5} height={20} />
        </Button>
      </div>
    </nav>
  );
};

export default Header;
