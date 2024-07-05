import React from 'react'
import {
    Box,
    Button,
    Card,
    Flex,
    Input,
    Text,
    Textarea,
  } from "@chakra-ui/react";

const EditProfile = () => {
  return (
    <Box >
          <Text mx={'20px'} py='6' fontSize='xl'>My Profile</Text>
          <Card  h={"100%"} bg={"#F0F0F0"} p={12} pt='10' rounded={"2xl"}>
            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"4px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Fullname
              </Text>
              <Input
                border={"1px solid Black"}
                placeholder="Fullname"
                type="text"
                size="md"
              />
            </Flex>

            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"4px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Email
              </Text>
              <Input
                border={"1px solid Black"}
                placeholder="Email"
                type="email"
                size="md"
              />
            </Flex>
            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"6px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Phone Number
              </Text>
              <Input
                border={"1px solid Black"}
                type="tel"
                name="phone"
                placeholder="Nomor telepon"
              />
            </Flex>
            <Flex
              flexDirection={"row"}
              justifyItems={"center"}
              justifyContent={"space-between"}
              w={"100%"}
              mb={"4px"}
            >
              <Text w={"20%"} alignItems="center" mt={2}>
                Address
              </Text>
              <Textarea
                border={"1px solid Black"}
                h={"150px"}
                name="address"
                placeholder="Enter your Address"
              />
            </Flex>
          </Card>
        </Box>
  )
}

export default EditProfile