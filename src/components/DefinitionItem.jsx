import { Box, Heading, Text } from "@chakra-ui/react";

const DefinitionItem = ({ term, children }) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
