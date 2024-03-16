import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Column from './Column';
import AddCardModal from './AddCardModal';

const initialData = {
  todo: [
    { id: '1', content: 'Project A' },
    { id: '2', content: 'Project B' },
    { id: '3', content: 'Project C' },
  ],
  inProgress: [],
  review: [],
  done: [],
};

const App = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : initialData;
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const [newCardName, setNewCardName] = useState('');
  const [currentColumn, setCurrentColumn] = useState('');

  const handleAddCard = () => {
    const newCard = { id: String(Date.now()), content: newCardName };
    setData((prevData) => ({
      ...prevData,
      [currentColumn]: [...prevData[currentColumn], newCard],
    }));
    closeModal();
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data[source.droppableId];
    const finish = data[destination.droppableId];

    const newData = {
      ...data,
      [source.droppableId]: start.filter((_, index) => index !== source.index),
      [destination.droppableId]: [
        ...finish.slice(0, destination.index),
        start.find((task) => task.id === draggableId),
        ...finish.slice(destination.index),
      ],
    };
    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex>
        {Object.keys(data).map((key) => (
          <Column key={key} column={key} tasks={data[key]} openModal={openModal} />
        ))}
      </Flex>
      <AddCardModal/>
    </DragDropContext>
  );
};

export default App;
