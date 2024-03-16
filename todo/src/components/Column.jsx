import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Box, Button, Text } from '@chakra-ui/react';
import Card from './Card';

const Column = ({ column, tasks, openModal }) => {
  return (
    <Box p={4} bg="gray.200" mr={4} flex={1}>
      <Text fontWeight="bold" mb={2}>
        {column.toUpperCase()}
      </Text>
      <Droppable droppableId={column}>
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      <Button onClick={() => openModal(column)}>Add Card</Button>
    </Box>
  );
};

export default Column;
