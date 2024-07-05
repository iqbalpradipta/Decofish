import {
    Box,
    Button,
    Card,
    Flex,
    IconButton,
    Input,
    InputGroup,
    Select,
    Spacer,
    Stack,
    Text
} from "@chakra-ui/react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { IoReturnUpBack } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex bg={"white"}>
      <Box
        backgroundImage="url('https://asset-a.grid.id//crop/80x0:900x576/700x465/photo/2019/07/22/3491312063.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h={"100vh"}
        w={"50%"}
        p={20}
        justifyContent={"center"}
        alignItems={"center"}
      ></Box>
      <Card
        h={"90vh"}
        top={"5vh"}
        left={"-15vh"}
        w={"50%"}
        p={8}
        rounded={"2xl"}
        border={'1px solid rgba(69,69,69,0.64)'}
        boxShadow={'33px 31px 23px -16px rgba(69,69,69,0.64)'}
      >
        <NavLink to={"/"}>
          <Button
            mb={12}
            w={"15%"}
            bg={"gray.200"}
            color={"black"}
            _hover={{ bg: "gray.500", color: "white" }}
            rounded={"full"}
            display={"flex"}
          >
            <IoReturnUpBack size={20} />
            <Text>Back</Text>
          </Button>
        </NavLink>
        <Box
          mb={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={"2xl"}>Sign up now</Text>
        </Box>
        <Text>Fullname</Text>
        <Input my={2} placeholder="Fullname" type="text" name="fullname" size="md" />

        <Text>Email address</Text>
        <Input my={2} placeholder="Email" type="email" name="email" size="md" />

        <Text>Phone number</Text>
        <InputGroup my={2}>
          <Select size="md" w={"20%"}>
            <option value="+1">USA (+1)</option>
            <option value="+44">UK (+44)</option>
            <option value="+61">Australia (+61)</option>
            <option value="+86">China (+86)</option>
            <option value="+91">India (+91)</option>
            <option value="+62">Indonesia (+62)</option>
            {/* Tambahkan negara lain di sini */}
          </Select>
          <Input type="tel" name="phone" placeholder="Nomor telepon" />
        </InputGroup>
        <Flex justifyContent={"space-between"}>
          <Text>Password</Text>
          <Stack direction="row" align="center">
            <IconButton
              h="1.75rem"
              size="sm"
              bg={"transparent"}
              onClick={handleClick}
              _hover={{ bg: "transparent", color: "gray" }}
              icon={show ? <FaEyeSlash /> : <FaEye />}
              aria-label={show ? "Hide password" : "Show password"}
            />
            <span>{show ? "Hide" : "Show"}</span>
          </Stack>
        </Flex>
        <Input
          my={2}
          size="md"
          pr="4.5rem"
          name="password"
          type={show ? "text" : "password"}
          placeholder="Enter password"
        />
        <Spacer/>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Button
            w={"15%"}
            bg={"gray.200"}
            color={"white"}
            _hover={{ bg: "gray.500", color: "white" }}
            rounded={"full"}
            mr={4}
          >
            Sign up
          </Button>
          <Text>Already have an ccount?</Text>
          <NavLink to={"/login"}>
            <Text fontWeight={"bold"} cursor={"pointer"}>
              Log in
            </Text>
          </NavLink>
        </Box>
      </Card>
    </Flex>
  );
};

export default RegisterPage;
