import {
  Image,
  Text,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ButtonAdd from "./buttonAdd";
import { FaRegTrashAlt } from "react-icons/fa";
import dataCheckout from "../mocks/dataCheckout.json";

function ListCheckout() {
  return (
    <Flex w='90%' flexDirection='column' gap='5'>
      {dataCheckout.map((data, index) => (
        <Box
          border="1px"
          borderRadius="10px"
          w="100%"
          display="flex"
          alignItems='center'
          boxShadow="lg"
          borderColor="#E8E8E8"
          key={index}
        >
          <Image
            objectFit="fill"
            borderRadius="20px"
            p="20px"
            boxSize="100%"
            width="200px"
            height="150px"
            src={data.image}
            alt={data.name}
          />
          <Box w='100%' p='10px'>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontWeight="bold" fontSize="23px">
                {data.name}
              </Text>

              <Button bgColor="transparent">
                <FaRegTrashAlt color="red" fontWeight="bold" />
              </Button>
            </Flex>
            <Box display="flex" gap={3}>
              <Text fontSize="18px">Type:</Text>
              <Text fontSize="18px" color="gray">
                {data.tipe}
              </Text>
            </Box>

            <Flex justifyContent='space-between'>
              <Text fontSize="18px" mt="20px">
                Rp. {data.harga}
              </Text>
              <ButtonAdd />
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

export default ListCheckout;
