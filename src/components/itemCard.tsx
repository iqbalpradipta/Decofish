import { Flex, Image, Link, Text } from "@chakra-ui/react";
import Ratings from "../features/Rating";

const ItemCard = (data: any) => {
  console.log("data :", data);

  return (
    <Flex
      w="100%"
      flexDirection="column"
      gap="2"
      cursor="pointer"
      transition="all ease-in-out 0.2s"
      _hover={{ transform: "scale(1.04)" }}
    >
      <Image
        src={data.data.image}
        w="100%"
        h="350px"
        objectFit="cover"
        rounded="10px"
      />
      <Link
        fontWeight="bold"
        fontSize="2xl"
        _hover={{ color: "#999999", textDecoration: "none" }}
      >
        {data.data.name}
      </Link>
      <Ratings rating={data.data.rate} />
      <Text fontWeight="bold" fontSize="xl">
        ${data.data.price}
      </Text>
    </Flex>
  );
};

export default ItemCard;
