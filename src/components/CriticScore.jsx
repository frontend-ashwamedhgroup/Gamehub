import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={3}>
      {score}
    </Badge>
  );
};

export default CriticScore;
