import React, { createContext, useState } from 'react';

// Create a context
export const LoadingContext = createContext();

// Create a provider component
export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [otherInfo, setOtherInfo] = useState('');

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, otherInfo, setOtherInfo}}>
      {children}
    </LoadingContext.Provider>
  )
}