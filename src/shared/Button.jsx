const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  onClick,
  className = '',
  disabled = false,
}) => {
  const base = `w-full font-semibold rounded-xl px-6 py-2 backdrop-blur-sm transition-all`;

  const variants = {
    primary: `bg-white/60 hover:bg-white/80 border border-white/90 text-slate-600
              shadow-[0_2px_8px_rgba(100,120,200,0.2),inset_0_1px_0_rgba(255,255,255,1)]`,
    google: `bg-white/60 hover:bg-white/80 border border-white/90 text-slate-600 
             flex items-center justify-center gap-3
             shadow-[0_2px_8px_rgba(100,120,200,0.2),inset_0_1px_0_rgba(255,255,255,1)]`,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
