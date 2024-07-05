import React from "react";
import {
  Text,
  Box,
  Grid,
  GridItem,
  Spacer,
  Image,
  Flex,
} from "@chakra-ui/react";
import datas from "../mocks/dataCheckouts.json";

const ProductCard = () => {
  const total = datas.reduce((accumulator, current) => {
    const subtotal = current.quantity * current.harga;
    return accumulator + subtotal;
  }, 0);

  return (
    <>
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap={5}
        textAlign="center"
        p="5"
        pt="10"
      >
        <Spacer />
        <Spacer />
        <Spacer />
        <GridItem colSpan={1}>
          <Text>unit price</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text>quantity</Text>
        </GridItem>
        <GridItem colSpan={1}>
          <Text>subtotal</Text>
        </GridItem>
      </Grid>

      <Flex
        flexDirection="column"
        gap="5"
        // border="1px solid gray"
        rounded="15px"
        p="5"
        pt="0"
        boxShadow="lg"
      >
        {datas.map((item, index) => {
          return (
            <Grid templateColumns="repeat(6, 1fr)" gap={5} key={index}>
              <GridItem colSpan={3}>
                <Grid templateColumns="repeat(6, 1fr)" gap={5}>
                  <GridItem colSpan={2}>
                    <Image src={item.image} w="100%" h="150px" rounded="10px" />
                  </GridItem>
                  <GridItem colSpan={4} my="auto">
                    <Text fontSize="2xl">{item.name}</Text>

                    <Flex gap="2">
                      <Text fontWeight="semibold">Type :</Text>
                      <Text>{item.tipe}</Text>
                    </Flex>
                  </GridItem>
                </Grid>
              </GridItem>

              <GridItem colSpan={1} m="auto">
                <Text>Rp.{item.harga}</Text>
              </GridItem>

              <GridItem colSpan={1} m="auto">
                <Text>{item.quantity}</Text>
              </GridItem>

              <GridItem colSpan={1} m="auto">
                <Text>Rp.{item.harga * item.quantity}</Text>
              </GridItem>
            </Grid>
          );
        })}

        <Box w="100%" h="2px" bg="#d3d3d3" mt="10" />

        <Grid templateColumns="repeat(6, 1fr)" gap={5} textAlign="center" p="5" pt='0'>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <GridItem colSpan={1}>
            <Text fontSize="22px" fontWeight="semibold">
              Total :
            </Text>
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontSize="22px" fontWeight="bold">
              Rp.{total}
            </Text>
          </GridItem>
        </Grid>
      </Flex>
    </>
  );
};

export default ProductCard;
