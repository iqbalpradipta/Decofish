import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Flex,
  Button,
  Icon,
  Image,
  Link,
} from "@chakra-ui/react";
import datas from "../mocks/data.json";
import ButtonAdd from "./buttonAdd";
import Ratings from "../../../features/Rating";

const DetailCard = () => {
  return (
    <Box display="flex" h="100%" flexDirection="column" gap="3">
      <Text fontWeight="bold" fontSize="4xl">
        {datas[0].name}
      </Text>

      <Ratings rating={datas[0].rating} />

      <Text fontSize="3xl" fontWeight="bold">
        {datas[0].harga}
      </Text>

      <Box h="16vh" overflowY="auto" sx={{
          "&::-webkit-scrollbar": {
            width: "6px",
            backgroundColor: `none`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `black`,
            borderRadius: "3px",
          },
        }}>
        <Text pr='5'>{datas[0].description}</Text>
      </Box>

      <Flex h="30%" flexDirection="column" justifyContent="end" gap="5">
        <Flex gap="5" fontSize='18px'>
          <Flex gap="2">
            <Text fontWeight="bold">Type: </Text>
            <Link textDecoration='underline'>{datas[0].type}</Link>
          </Flex>

          <Flex gap="2">
            <Text fontWeight="bold">Model: </Text>
            <Link textDecoration='underline'>{datas[0].model}</Link>
          </Flex>
        </Flex>

        <Flex>
          <ButtonAdd />

          <Button
            w="100%"
                      ml="10"
            bg="black"
            color="white"
            rounded="20px"
            border="2px solid black"
            boxShadow="lg"
            _hover={{ bg: "none", color: "black" }}
          >
            Add to Chart
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default DetailCard;
