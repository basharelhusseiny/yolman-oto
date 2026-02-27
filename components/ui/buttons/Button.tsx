import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

// Extend or recreate props interface
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  fullWidth?: boolean;
  target?: string;
}

const Button = ({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  children,
  target,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex justify-center items-center font-semibold rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#cc0075] to-[#511764] text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:scale-105 shadow-lg border-0",
    secondary:
      "bg-white/10 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg",
    ghost:
      "bg-transparent border-2 border-transparent text-white hover:bg-white/10",
    gradient:
      "bg-gradient-to-r from-[#cc0075] to-[#511764] text-white hover:shadow-[0_0_30px_rgba(219,39,119,0.6)] hover:scale-105 shadow-lg border-0",
  };

  const sizes = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4 text-lg",
    lg: "px-10 py-5 text-xl",
  };

  const widthClass = fullWidth ? "w-full" : "w-full sm:w-auto";

  // Combine classes, allowing user className to override if needed
  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
