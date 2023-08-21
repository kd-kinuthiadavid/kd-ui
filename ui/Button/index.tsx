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
      circular: [
        "bg-core-bright-green rounded-full w-[56px] h-[56px] flex justify-center items-center",
      ],
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const Button: FC<ButtonProps> = ({ className, intent, children, ...props }) => (
  <button className={buttonStyles({ intent, className })} {...props}>
    {children}
  </button>
);

export default Button;
export { type ButtonProps };
