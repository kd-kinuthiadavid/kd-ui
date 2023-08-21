import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faArrowsLeftRight,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const buttonStyles = cva(
  [
    "py-2.5 px-5 m-2 capitalize rounded-full bg-core-bright-green w-[56px] h-[56px] flex justify-center items-center",
  ],
  {
    variants: {
      intent: {
        add: {
          true: "",
        },
        convert: {
          true: "",
        },
        send: {
          true: "",
        },
        receive: {
          true: "",
        },
      },
    },
    defaultVariants: {
      intent: "add",
    },
  }
);

interface CircularButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

const CircularButton: FC<CircularButtonProps> = ({
  className,
  intent,
  ...props
}) => (
  <div className="flex flex-col items-center capitalize">
    <button className={buttonStyles({ intent, className })} {...props}>
      {intent === "add" ? (
        <FontAwesomeIcon icon={faPlus} className="text-2xl" />
      ) : intent === "convert" ? (
        <FontAwesomeIcon icon={faArrowsLeftRight} className="text-2xl" />
      ) : intent === "send" ? (
        <FontAwesomeIcon icon={faArrowUp} className="text-2xl" />
      ) : intent === "receive" ? (
        <FontAwesomeIcon icon={faArrowDown} className="text-2xl" />
      ) : (
        <FontAwesomeIcon icon={faPlus} className="text-2xl" />
      )}
    </button>
    <span>{intent}</span>
  </div>
);

export default CircularButton;
export { type CircularButtonProps };
