import React from "react";
import { Text, Box, Grid, GridItem, Flex, Button } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";

const Address = () => {
  return (
    <Box my="20">
      <Flex justifyContent="space-between">
        <Flex gap="5" alignItems="center">
          <Text fontSize="4xl">
            <FaLocationDot />
          </Text>
          <Text fontSize="4xl" fontWeight="bold">
            Address
          </Text>
        </Flex>
      </Flex>

      <Box>
        <Flex alignItems="center" justifyContent="space-between" px="14" py="5">
          <Flex gap="5">
            <Text fontWeight="bold" fontSize="2xl">
              Fullname
            </Text>
            <Text fontWeight="semibold" fontSize="2xl">
              (+62)800-0111-2223
            </Text>
          </Flex>

          <Button
            px="10"
            rounded="20px"
            bg="none"
            border="2px solid black"
                      fontSize="lg"
                      color='black'
                      _hover={{bg: 'black', color: 'white'}}
          >
            Edit
          </Button>
        </Flex>

        <Box w="100%" h="2px" bg="gray" />

        <Text
          fontSize="xl"
          py="5"
          bg="#F0F0F0"
          px="14"
          roundedBottomLeft="20px"
          roundedBottomRight="20px"
          boxShadow="lg"
        >
          Jl. Elang IV, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan, Banten
          15413
        </Text>
      </Box>
    </Box>
  );
};

export default Address;
