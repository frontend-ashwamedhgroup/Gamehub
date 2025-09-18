import useGenres from "../hooks/useGenres";
import { HStack, Button, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = ({ selectedGenre, onSelectGenre }) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17];

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="40px"
              borderRadius={8}
              src={getCroppedUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
