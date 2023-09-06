"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

type Props = {
  image: string;
  name: string;
  href: string;
};

const ListItem = ({ image, name, href }: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover" fill src={image} alt="Image" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <div className="bg-green-500 p-4 rounded-full absolute right-5 flex items-center justify-center transition hover:scale-110 group-hover:opacity-100 opacity-0 drop-shadow-md">
        <FaPlay className="text-black" />
      </div>
    </button>
  );
};

export default ListItem;
