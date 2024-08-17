import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-blue-400 sticky top-0 z-50">
      <div>
        <Image
          src={"/logos/brand_white.svg"}
          width={100}
          height={100}
          alt="logo"
        />
      </div>
      <div></div>
    </nav>
  );
}
