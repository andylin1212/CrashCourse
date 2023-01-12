import React, { createContext, useState } from 'react';

// Create a context
export const LoadingContext = createContext();

// Create a provider component
export function LoadingProvider({ children }) {
  // const [isLoading, setIsLoading] = useState(false);
  const [otherInfo, setOtherInfo] = useState('');
  const [details, setDetails] = useState('')

  return (
    <LoadingContext.Provider value={{ otherInfo, setOtherInfo, details, setDetails}}>
      {children}
    </LoadingContext.Provider>
  )
}