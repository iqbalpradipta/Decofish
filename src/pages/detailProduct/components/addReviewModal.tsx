import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { MdOutlineStar } from "react-icons/md";
import { Rating, Star } from "@smastrom/react-rating";

const AddReviewModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ratingCount, setRatingCount] = useState<number>(0);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#FFC663",
    inactiveFillColor: "#d3d3d3",
  };

    const handleClose = () => {
        setRatingCount(0)
        onClose()
    }
    
  return (
    <>
      <Button
        bg="black"
        rounded="20px"
        color="white"
        border="2px solid black"
        _hover={{ bg: "none", color: "black" }}
        onClick={onOpen}
      >
        + Add Review
      </Button>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex gap={2}>
              <Rating
                style={{ maxWidth: 200 }}
                value={ratingCount}
                readOnly
                itemStyles={myStyles}
              />
            </Flex>

            <Flex position="absolute" mt="-10">
              <Button
                p={0}
                opacity="0"
                color="#999999"
                bg="none"
                _hover={{ color: "#b9b9b9" }}
                onClick={() => setRatingCount(1)}
              >
                <MdOutlineStar />
              </Button>
              <Button
                p={0}
                opacity="0"
                color="#999999"
                bg="none"
                _hover={{ color: "#b9b9b9" }}
                onClick={() => setRatingCount(2)}
              >
                <MdOutlineStar />
              </Button>
              <Button
                p={0}
                opacity="0"
                color="#999999"
                bg="none"
                _hover={{ color: "#b9b9b9" }}
                onClick={() => setRatingCount(3)}
              >
                <MdOutlineStar />
              </Button>
              <Button
                p={0}
                opacity="0"
                color="#999999"
                bg="none"
                _hover={{ color: "#b9b9b9" }}
                onClick={() => setRatingCount(4)}
              >
                <MdOutlineStar />
              </Button>
              <Button
                p={0}
                opacity="0"
                color="#999999"
                bg="none"
                _hover={{ color: "#b9b9b9" }}
                onClick={() => setRatingCount(5)}
              >
                <MdOutlineStar />
              </Button>
            </Flex>

            <Textarea
              h="10vh"
              mt="5"
              placeholder="Input your messages"
              focusBorderColor="#fff"
              border="none"
              overflow="auto"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              mr={3}
              bg="none"
              border="2px solid black"
              color="black"
              rounded="20px"
              px="10"
              _hover={{
                bg: "none",
                border: "2px solid white",
                boxShadow: "lg",
              }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button
              bg="black"
              color="white"
              border="2px solid black"
              rounded="20px"
              px="10"
              _hover={{
                bg: "none",
                border: "2px solid white",
                boxShadow: "lg",
                color: "black",
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddReviewModal;
