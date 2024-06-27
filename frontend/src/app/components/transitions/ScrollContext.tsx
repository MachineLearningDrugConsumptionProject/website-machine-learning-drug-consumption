import React, { createContext, useState } from 'react';

const defaultValue = {
  isFullyScrolled: false,
  setIsFullyScrolled: (value : boolean) => {},
};

export const ScrollContext = createContext(defaultValue);

export const ScrollProvider = ( children : Readonly<React.ReactNode>) => {
  const [isFullyScrolled, setIsFullyScrolled] = useState(false);

  return (
    <ScrollContext.Provider value={{ isFullyScrolled, setIsFullyScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};
