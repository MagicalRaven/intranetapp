import React from 'react';
import Board from 'react-trello';

const KanbanPage = () => {
  const data = {
    lanes: [
      {
        id: 'lane1',
        title: 'Por Hacer',
        cards: [
          { id: 'Card1', title: 'Tarea 1', description: 'Descripción de la tarea 1' },
          { id: 'Card2', title: 'Tarea 2', description: 'Descripción de la tarea 2' },
        ],
      },
      {
        id: 'lane2',
        title: 'En Progreso',
        cards: [
          { id: 'Card3', title: 'Tarea 3', description: 'Descripción de la tarea 3' },
        ],
      },
      {
        id: 'lane3',
        title: 'Completado',
        cards: [
          { id: 'Card4', title: 'Tarea 4', description: 'Descripción de la tarea 4' },
        ],
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Board data={data} draggable />
    </div>
  );
};

export default KanbanPage;
