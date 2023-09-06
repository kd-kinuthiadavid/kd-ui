import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const buttonStyles = cva(["m-2 capitalize rounded-full"], {
  variants: {
    intent: {
      primary: ["bg-core-bright-green"],
      secondary: [
        "bg-product-base-base-light border border-product-content-content-primary",
      ],
      tertiary: ["underline underline-offset-4"],
    },
    size: {
      small: ["py-1 px-2 text-sm"],
      medium: ["py-2.5 px-5 text-base"],
      large: ["py-5 px-10 text-lg"],
      xl: ["py-10 px-20 text-2xl"],
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    fullWidth: false,
    size: "small",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  handleButtonClick: () => void;
  text: string;
}

const Button: FC<ButtonProps> = ({
  className,
  intent,
  fullWidth,
  size,
  text,
  handleButtonClick,
  ...props
}) => (
  <button
    className={buttonStyles({ intent, className, fullWidth, size })}
    {...props}
    onClick={handleButtonClick}
  >
    {text}
  </button>
);

export default Button;
export { type ButtonProps };
