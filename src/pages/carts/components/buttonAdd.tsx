import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';

const ButtonAdd = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
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
      <HStack maxW="150px">
        <Button {...dec}>-</Button>
        <Input {...input} />
        <Button {...inc}>+</Button>
      </HStack>
    </>
  );
}

export default ButtonAdd;
