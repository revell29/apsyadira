import { useState } from "react";
import Link from "next/link";
import {
  Stack,
  Box,
  Flex,
  AlertIcon,
  Alert,
  CloseButton,
  Avatar,
  Text,
  Grid,
  Heading,
  useColorMode,
  IconButton,
} from "@chakra-ui/core";
import { Headline } from "../Typography";

const ParentStack = (props) => (
  <Stack
    height="calc(var(--vh,1vh) * 100)"
    mx="auto"
    justifyContent="center"
    maxWidth="48rem"
    {...props}
  />
);

const MainStack = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return <Stack spacing="2rem" margin="0 1.3rem" {...props} />;
};

const MainHeader = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      marginBottom="0"
      py="1.5rem"
      margin="0 1.3rem"
      // bg={colorMode === "light" ? "#EDF2F7" : "gray.700"}
      // color={colorMode === "light" ? "teal.300" : "white"}
      {...props}
    >
      <Flex align="center">
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Apsyadira
        </Heading>
      </Flex>

      <Box
        display="flex"
        width="auto"
        alignItems="center"
        flexGrow={1}
        color={colorMode === "light" ? "teal.300" : "white"}
      ></Box>
      <Box display="block" mt={{ base: 4, md: 0 }}></Box>
    </Flex>
  );
};

const MainFooter = () => (
  <Flex
    alignItems="center"
    justifyContent="center"
    py="1rem"
    background="transparent"
  >
    <Headline as="span">With {"<3"} from Indonesia</Headline>
  </Flex>
);

interface MainLayoutProps {
  title?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  title,
  children,
  ...rest
}) => (
  <>
    <ParentStack>
      <MainStack {...rest}>{children}</MainStack>
    </ParentStack>
  </>
);
