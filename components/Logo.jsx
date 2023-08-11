import Link from "next/link";
import Image from "next/image";
import imgLogo from "../public/assets/logo.png";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex gap-4 items-center z-20 hover:opacity-90 transition"
    >
      <Image className="" src={imgLogo} height={40} width={40} />
      <h1 className="font-logo uppercase text-lg md:text-2xl">Vision Vault</h1>
    </Link>
  );
}
