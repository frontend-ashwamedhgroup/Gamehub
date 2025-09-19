import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import bullseye from "../assets/bulls-eye.webp";
import { Image } from "@chakra-ui/react";

const Emoji = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
