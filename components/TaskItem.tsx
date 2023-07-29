import React, { useEffect } from 'react';
import { EmptyBoard } from './EmptyBoard';

type Subtask = {
  title: string;
  isCompleted: boolean;
};

type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

type Board = {
  name: string;
  columns: {
    name: string;
    tasks: Task[];
  }[];
};

type Data = {
  boards: Board[];
  error?: string;
};

type Props = {};

export const TaskItem = (props: Props) => {
  const [data, setData] = React.useState<Data>({ boards: [] });
  const [hoverStates, setHoverStates] = React.useState<Record<string, boolean>>({});

  const handleMouseEnter = (taskId: string) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [taskId]: true
    }));
  };

  const handleMouseLeave = (taskId: string) => {
    setHoverStates((prevStates) => ({
      ...prevStates,
      [taskId]: false
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/boards');
      const json = await res.json();

      if (res.status !== 200) {
        return setData({ boards: [], error: json.message });
      }

      if (json.boards.length === 0) {
        setData({ boards: [] });
      }

      setData(json);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (data.error) {
    return <div>Error: {data.error}</div>;
  }

  if (data.boards.length === 0) {
    return <EmptyBoard />;
  }

  const boardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '24px'
  };

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    flex: 1,
    gap: '20px'
  };

  const columnHeading: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px'
  };

  const columnTitle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '19px',
    letterSpacing: '2.4px',
    marginTop: '0px',
    color: '#828FA3',
    textTransform: 'uppercase',
    marginBottom: '0px'
  };

  const columnTitleDot: React.CSSProperties = {
    width: '15px',
    height: '15px',
    backgroundColor: '#49C4E5',
    borderRadius: '50%',
    marginRight: '12px'
  };

  const columnTitleCount: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '19px',
    letterSpacing: '2.4px',
    marginTop: '0px',
    color: '#828FA3',
    marginBottom: '0px',
    marginLeft: '4px'
  };

  const taskTitle: React.CSSProperties = {
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '19px',
    letterSpacing: '0.15px',
    marginBottom: '8px',
    marginTop: '0px'
  };

  const taskSubTitle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '15px',
    letterSpacing: '0.1px',
    marginBottom: '8px',
    color: '#828FA3'
  };

  const taskStyle: React.CSSProperties = {
    padding: '16px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(54, 78, 126, 0.10)',
    transition: 'box-shadow 0.2s ease-in-out',
    cursor: 'pointer'
  };

  return (
    <div>
      {data.boards.map((board) => (
        <>
          <h2>{board.name}</h2>
          <div key={board.name} style={boardStyle}>
            {board.columns.map((column) => (
              <div key={column.name} style={columnStyle}>
                <div style={columnHeading}>
                  <span style={columnTitleDot}></span>
                  <h3 style={columnTitle}>{column.name}</h3>
                  <span style={columnTitleCount}>({column.tasks.length})</span>
                </div>
                {column.tasks.map((task) => (
                  <div
                    key={task.title}
                    style={taskStyle}
                    onMouseEnter={() => handleMouseEnter(task.title)}
                    onMouseLeave={() => handleMouseLeave(task.title)}
                  >
                    <h4
                      style={{
                        ...taskTitle,
                        color: hoverStates[task.title] ? '#635FC7' : '#000112'
                      }}
                    >
                      {task.title}
                    </h4>
                    {task.subtasks.length > 0 && (
                      <p style={taskSubTitle}>
                        {task.subtasks.filter((subtask) => subtask.isCompleted).length} of{' '}
                        {task.subtasks.length} subtasks
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
