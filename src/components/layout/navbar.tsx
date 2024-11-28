import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-4  absolute  w-full left-0   flex justify-center  z-20">
      <div className="flex w-1/2 justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={"/logos/brand_white.svg"}
            width={60}
            height={60}
            alt="logo"
          />
          <p className="font-bold">orwa.</p>
        </div>
        <div className="flex items-center gap-4">
          <p>Contact Us</p>
          <p>Pricing</p>
          <p>FAQ</p>
          <p>About</p>
          <p>Services</p>
        </div>
      </div>
    </nav>
  );
}
