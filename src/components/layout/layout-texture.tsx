import Image from "next/image";

export const Texture = () => {
  return (
    <Image
      aria-hidden
      src="/asfalt-dark.png"
      fill
      alt="texture"
      className=" w-full z-10 min-h-full object-fill  contrast-100 brightness-100 bg-repeat-y"
    />
  );
};
{
  /* <div
        aria-hidden
        className="absolute w-full z-10 min-h-full  contrast-100 brightness-100 bg-repeat-y bg-center"
        style={{
          background: "url(/asfalt-dark.png)",
        }}
      /> */
}
