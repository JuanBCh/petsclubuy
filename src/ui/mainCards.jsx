import Image from "next/image";
import Link from "next/link";

export default function MainCards({ imgSrc, imgAlt, title, link }) {
  if (!link) {
    link = "/error";
  }
  return (
    <Link
      className="relative w-11/12 h-44 rounded-lg overflow-hidden flex items-end justify-end my-2"
      href={link}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1024}
        height={1024}
        className="absolute -z-10"
      />
      <p
        className="mx-4 my-2 text-white text-2xl font-semibold"
        style={{ textShadow: "0 0 10px black" }}
      >
        {title}
      </p>
    </Link>
  );
}
