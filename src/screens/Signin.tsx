import React from "react";
import { Center, Text } from "native-base";
import Logo from "../assets/logo.svg";

export function SignIn() {
  return (
    <Center flex={1} bgColor="gray.900">
      <Logo />
      <Text color="white" fontSize="24">SignIn now! =D</Text>
    </Center>
  );
}
