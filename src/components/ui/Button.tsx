interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-black text-white px-5 py-2 rounded-md ${props.className}`}
    >
      {children}
    </button>
  );
}

export default Button;
