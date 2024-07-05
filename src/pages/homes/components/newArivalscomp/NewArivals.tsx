import { Box, Button, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoStar } from "react-icons/io5";

interface NewArrivals {
  id: number;
  name: string;
  image: string;
  rate: number;
  price: number;
}

const NewArivals: React.FC<NewArrivals> = (props) => {
  const { name, image, rate, price } = props;

  const stars = Array.from({ length: rate }, (_, index) => (
    <IoStar key={index} color={"orange"} />
  ));
  return (
    <>
      <Box boxSize="sm" w={"20%"} p={4} cursor={"pointer"}>
        <Image src={image} rounded={"2xl"} h={"80%"} mb={2} alt="cars" />
        <Text color={"black"} fontWeight={"bold"}>
          {name}
        </Text>
        <Text display={"flex"} alignItems={"center"}>
          {stars} : {rate}/5
        </Text>
        <Text color={"black"} fontWeight={"bold"}>
          Rp. {price}
        </Text>
      </Box>
      
    </>
  );
};

export default NewArivals;
