import { useState, useContext, useEffect, ReactNode, createContext } from 'react'


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext(null);

const AppProvider = ({ children } : {children: ReactNode}) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
