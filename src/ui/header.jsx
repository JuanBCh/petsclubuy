import Image from "next/image";
import images from "@/lib/images.json";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="bg-petsViolet flex justify-between items-center p-4 shadow-xl">
      <Image
        src={images.logo}
        alt="Pets"
        width={200}
        height={50}
        className="mx-4"
      />
      <FontAwesomeIcon
        icon={faEllipsisVertical}
        width={10}
        color="white"
        className="bg-blue mx-4"
      />
    </header>
  );
}
