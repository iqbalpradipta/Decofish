import React from "react";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Flex,
  Button,
  Spacer,
} from "@chakra-ui/react";
import datas from "../mocks/dataCheckouts.json";
import { FiArrowRight } from "react-icons/fi";

const TotalPrice = () => {
  const total = datas.reduce((accumulator, current) => {
    const subtotal = current.quantity * current.harga;
    return accumulator + subtotal;
  }, 0);
  const deliveryFee = 20000;
  const serviceFee = 5000;
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={5} p="5">
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <GridItem colSpan={1} display='flex' flexDirection='column' gap='1'>
        <Text fontSize="xl">Subtotal product :</Text>
        <Text fontSize="xl">Delivery fee :</Text>
        <Text fontSize="xl">Service fee :</Text>
        <Text fontSize="xl">Total payment :</Text>
      </GridItem>
      <GridItem colSpan={1} textAlign="right" display='flex' flexDirection='column' gap='1' >
        <Text fontSize="xl">Rp.{total}</Text>
        <Text fontSize="xl">Rp.{deliveryFee}</Text>
        <Text fontSize="xl">Rp.{serviceFee}</Text>
        <Text fontWeight="bold" fontSize="2xl">
          Rp.{total + deliveryFee + serviceFee}
        </Text>
      </GridItem>

      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <GridItem colSpan={2} mt='2'>
        <Button
                  w="100%"
                  py='6'
          bg="black"
          color="white"
          rounded="30px"
          _hover={{ bg: "none", color: "black", boxShadow: "xl" }}
        >
          <Flex gap='3'>
            <Text fontSize='lg' fontWeight='bold'>Payment Method</Text>
            <Text fontSize='xl'>
              <FiArrowRight />
            </Text>
          </Flex>
        </Button>
      </GridItem>
    </Grid>
  );
};

export default TotalPrice;
