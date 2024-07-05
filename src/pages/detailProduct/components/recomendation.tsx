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
} from "@chakra-ui/react";
import dataCars from "../../homes/mock/dataNewArivals";
import ItemCard from "../../../components/itemCard";

const Recomendation = () => {
  return (
    <Box>
      <Text
        textTransform="uppercase"
        fontSize="4xl"
        fontWeight="bold"
        mt="20"
        textAlign="center"
      >
        You Might Also Like
      </Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={28} mt='10'>
        {dataCars.map((data, index) => {
          return (
            <GridItem key={index} colSpan={1}>
              <ItemCard data={data} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Recomendation;
