import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            {game.name} was released in {game.released}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
