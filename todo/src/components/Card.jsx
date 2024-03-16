import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

const Card = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          p={2}
          bg="white"
          boxShadow="sm"
          mb={2}
        >
          {task.content}
        </Box>
      )}
    </Draggable>
  );
};

export default Card;
