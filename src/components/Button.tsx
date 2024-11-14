import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = {
    outline?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export default function Button({
    children,
    outline = false,
    className = "",
    type,
    ...props
}: Props) {
    return (
        <button
            {...props}
            type={type ?? "button"}
            className={`rounded-full py-4 px-6 ${
                outline
                    ? "border-2 border-white bg-transparent hover:bg-gray-50/10"
                    : "bg-[#D4A017] hover:bg-[#D4A017]/75"
            } ${className}`}
        >
            {children}
        </button>
    );
}
