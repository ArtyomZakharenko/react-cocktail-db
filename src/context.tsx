import { createContext, ReactNode, useContext, useState } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('a');
	const [cocktails, setCocktails] = useState([]);

	return (
		<AppContext.Provider
			value={{
				loading,
				cocktails,
				setLoading,
				setCocktails
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}

export { AppContext, AppProvider }
