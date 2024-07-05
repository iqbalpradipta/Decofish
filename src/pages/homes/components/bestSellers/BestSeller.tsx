import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoStar } from "react-icons/io5";

interface Best {
  id: number;
  name: string;
  image: string;
  rate: number;
  price: number;
}

const BestSeller: React.FC<Best> = (props) => {
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

export default BestSeller;
