import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const buttonStyles = cva(["py-2.5 px-5 m-2 capitalize rounded-full"], {
  variants: {
    intent: {
      primary: ["bg-core-bright-green"],
      secondary: [
        "bg-product-base-base-light border border-product-content-content-primary",
      ],
      tertiary: ["underline underline-offset-4"],
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
    fullWidth: false,
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  handleButtonClick: () => void;
}

const Button: FC<ButtonProps> = ({
  className,
  intent,
  fullWidth,
  children,
  handleButtonClick,
  ...props
}) => (
  <button
    className={buttonStyles({ intent, className, fullWidth })}
    {...props}
    onClick={handleButtonClick}
  >
    {children}
  </button>
);

export default Button;
export { type ButtonProps };
