import useGenres from "../hooks/useGenres";
import {
  HStack,
  Button,
  Image,
  List,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import getCroppedUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = ({ selectedGenreId, onSelectGenre }) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"3px"}>
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                className="hover-text"
                whiteSpace="normal"
                fontWeight={
                  genre.id === selectedGenreId ? "semibold" : "normal"
                }
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
    </>
  );
};

export default GenreList;
