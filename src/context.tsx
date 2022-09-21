import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { AppContextProps } from "./interfaces";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('a');
	const [cocktails, setCocktails] = useState([]);

	const fetchDrinks = async () => {
		setLoading(true);
		console.log(searchTerm);
		try {
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			const { drinks } = data;
			if (drinks) {
				const newCocktails = drinks.map((item: any) => {
					const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm]);

	return (
		<AppContext.Provider
			value={{
				loading,
				cocktails,
				setLoading,
				setSearchTerm,
				setCocktails
			} as AppContextProps}
		>
			{children}
		</AppContext.Provider>
	);
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}

export { AppContext, AppProvider }
