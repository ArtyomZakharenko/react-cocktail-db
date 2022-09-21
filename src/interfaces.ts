import { Dispatch, SetStateAction } from "react";

export interface Drink {
	id: string;
	name: string;
	image: string;
	info: string;
	glass: string;
}

export interface AppContextProps {
	loading: boolean;
	cocktails: Drink[];
	searchTerm: string;
	setLoading: Dispatch<SetStateAction<boolean>>;
	setSearchTerm: Dispatch<SetStateAction<string>>;
	setCocktails: Dispatch<SetStateAction<Drink[]>>;
}
