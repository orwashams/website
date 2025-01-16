import { motion } from "framer-motion";

const MorphingIcon = ({ isChecked }: { isChecked: boolean }) => {
  const variants = {
    clipboard: {
      d: "M8 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2 M16 2h2a2 2 0 0 1 2 2v4 M21 12H11 M15 8l-4 4 4 4 M8 0h8 M8 4h8",
    },
    check: {
      d: "M20 6L9 17l-5-5",
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className=" h-fit "
      strokeLinejoin="round"
      style={{ transform: "translateY(2px)" }}
    >
      <motion.path
        initial="clipboard"
        animate={isChecked ? "check" : "clipboard"}
        variants={variants}
        transition={{ duration: 0.3 }}
      />
      {!isChecked && (
        <>
          <rect width="8" height="4" x="8" y="0" rx="1" ry="1" />
        </>
      )}
    </svg>
  );
};

export default MorphingIcon;
