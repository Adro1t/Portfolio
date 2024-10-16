import Image from "next/image";
import portrait from "@/public/IMAGE.png";

function ImageCard() {
  return (
    <Image
      src={portrait}
      alt="portrait"
      className="rounded-3xl h-full object-cover"
    />
  );
}

export default ImageCard;
