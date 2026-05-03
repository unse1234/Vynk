import React from 'react';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-white/50 backdrop-blur-sm border border-white/80
                 rounded-xl px-4 py-2 text-slate-700 placeholder-slate-400
                 outline-none focus:border-blue-300 focus:bg-white/70 transition-all w-full
                 tracking-widest ${className}`}
      />
    </>
  );
};

export default Input;
