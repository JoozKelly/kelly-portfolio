// src/context/StageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for stage state
const StageContext = createContext();

// Create a custom hook to access the stage context
export const useStage = () => {
  return useContext(StageContext);
};

// Create a provider component
export const StageProvider = ({ children }) => {
  // Use localStorage to persist the state
  const [currentStage, setCurrentStage] = useState(() => {
    const savedStage = localStorage.getItem('currentStage');
    return savedStage ? JSON.parse(savedStage) : 1; // Default to stage 1 if nothing saved
  });

  // Update localStorage whenever the stage changes
  useEffect(() => {
    localStorage.setItem('currentStage', JSON.stringify(currentStage));
  }, [currentStage]);

  return (
    <StageContext.Provider value={{ currentStage, setCurrentStage }}>
      {children}
    </StageContext.Provider>
  );
};
