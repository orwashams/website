import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-4 sticky top-0 z-50 bg-gray-700 flex justify-between">
      <div className="flex items-center gap-4">
        <Image
          src={"/logos/brand_white.svg"}
          width={60}
          height={60}
          alt="logo"
        />
        <p className="font-bold">orwa.dev</p>
      </div>
      <div className="flex items-center gap-4">
        <p>Contact Us</p>
        <p>Pricing</p>
        <p>FAQ</p>
        <p>About</p>
        <p>Services</p>
      </div>
    </nav>
  );
}
