interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button = ({
  onClick,
  type = "button",
  disabled = false,
  className = "",
  children,
}: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer text-white px-4 py-2 rounded-md  border border-gray-300 ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick ? onClick : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
