import Image from 'next/image';
import mainStyles from '../styles/Home.module.scss';

type Props = {};

export const EmptyBoard = (props: Props) => {
  return (
    <>
      <h1 className={mainStyles.emptyBoardTitle} style={{ marginBottom: '24px' }}>
        This board is empty. Create a new column to get started.
      </h1>
      <button
        role="button"
        type="button"
        aria-label="Add New Task"
        className={mainStyles.emptyBoardButton}
      >
        <Image src="/icon-add-task-mobile.svg" width={12} height={12} />
        <span style={{ marginLeft: '4px' }}>Add New Column</span>
      </button>
    </>
  );
};
