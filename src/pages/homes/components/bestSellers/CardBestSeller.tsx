import { Button, Flex, GridItem, Heading } from "@chakra-ui/react";
import ItemCard from "../../../../components/itemCard";
import dataBestSeller from "../../mock/dataBestSeller";

export default function CardBestSeller() {
  return (
    <>
      <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
        <Heading>BEST SELLER</Heading>
      </Flex>
      <Flex p={10} w={"full"} justifyContent={"center"} gap={10}>
        {dataBestSeller.map((data, index) => {
          return (
            <GridItem key={index} colSpan={1}>
              <ItemCard data={data} />
            </GridItem>
          );
        })}
      </Flex>
      <Flex w={"full"} justifyContent={"center"} alignItems={"center"}>
        <Button
          mb={12}
          w={"10%"}
          bg={"gray.200"}
          color={"black"}
          _hover={{ bg: "gray.500", color: "black" }}
          rounded={"full"}
        >
          View All
        </Button>
      </Flex>
    </>
  );
}
