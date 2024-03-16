import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, Button } from '@chakra-ui/react';

const AddCardModal = ({ isOpen, onClose, currentColumn, newCardName, setNewCardName, handleAddCard }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Card to {currentColumn}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="Enter card name" value={newCardName} onChange={(e) => setNewCardName(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddCard}>
            Add Card
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCardModal;
