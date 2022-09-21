import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { AppContextProps, Drink } from "../interfaces";

const CocktailList = () => {
  const { cocktails, loading }: AppContextProps = useGlobalContext();
  if (loading) {
    return <Loading />
  }
  if (!cocktails.length) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item: Drink) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList
