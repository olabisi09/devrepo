import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  text: string;
  icon?: React.SVGProps<SVGSVGElement>;
  variant?: "default" | "text";
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant, ...rest }) => {
  return (
    <div className="flex items-center gap-1 text-sm">
      <>{icon && icon}</>
      <button {...rest}>{text}</button>
    </div>
  );
};

export default Button;
