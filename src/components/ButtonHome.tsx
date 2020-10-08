import { Link } from "@chakra-ui/core";

export function ButtonHome({ link, children, ...rest }) {
  return (
    <Link
      href={link}
      bg="gray.600"
      color="white"
      padding={2}
      isExternal
      rounded={5}
      _hover={{
        background: `#444`,
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
