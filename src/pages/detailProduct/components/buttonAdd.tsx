import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

const ButtonAdd = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 99,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <>
      <HStack maxW="200px" bg="#F0F0F0" rounded="30px" boxShadow="lg">
        <Button
          {...dec}
          bg="none"
          fontWeight="bold"
          fontSize="xl"
          borderTopLeftRadius="30px"
          borderBottomLeftRadius="30px"
          _hover={{}}
        >
          -
        </Button>
        <Input
          {...input}
          border="none"
          w="100%"
          textAlign="center"
          focusBorderColor="#F0F0F0"
        />
        <Button
          {...inc}
          bg="none"
          fontWeight="bold"
          fontSize="xl"
          borderTopRightRadius="30px"
          borderBottomRightRadius="30px"
          _hover={{}}
        >
          +
        </Button>
      </HStack>
    </>
  );
};

export default ButtonAdd;
