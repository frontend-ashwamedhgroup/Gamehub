import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack marginBottom={1}>
      <Skeleton boxSize="40px" borderRadius={8} />
      <SkeletonText />
    </HStack>
  );
};

export default GenreSkeleton;
