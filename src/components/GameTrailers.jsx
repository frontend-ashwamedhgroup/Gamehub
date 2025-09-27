import { Image } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

const GameTrailers = ({ gameId }) => {
  const { data, isLoading, error } = useTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <>
      {data?.results.map((movie) => (
        <Image key={movie.id} src={movie.data} />
      ))}
    </>
  );
};

export default GameTrailers;
