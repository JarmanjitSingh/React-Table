import { Heading, Stack } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Stack alignItems={"center"} justifyContent={"center"} p={4} bg={'blue.500'} color={'white'}>
      <Heading>React Table</Heading>
    </Stack>
  );
};

export default Header;
