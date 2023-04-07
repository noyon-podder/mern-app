import React from 'react';

const Button = ({children}) => {
  return (
    <button className="bg-primary px-10 py-3 rounded-lg text-white	 font-semibold md:ml-8">
      {children}
    </button>
  );
}

export default Button