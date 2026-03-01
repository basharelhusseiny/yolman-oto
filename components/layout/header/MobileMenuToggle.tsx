"use client";

interface MobileMenuToggleProps {
  isOpen: boolean;
  onClose: (value: boolean) => void;
}

const MobileMenuToggle = ({ isOpen, onClose }: MobileMenuToggleProps) => {
  return (
    <button
      onClick={() => onClose(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="relative flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-[#cc0075]/50 transition-all duration-300 cursor-pointer group"
    >
      <span
        className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-[3px]" : ""
        }`}
      />
      <span
        className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1 ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 mt-1 ${
          isOpen ? "-rotate-45 -translate-y-[7px]" : ""
        }`}
      />
    </button>
  );
};

export default MobileMenuToggle;
