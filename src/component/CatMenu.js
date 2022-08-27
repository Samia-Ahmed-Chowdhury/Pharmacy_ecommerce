import React, { useState } from 'react'
import "./CatMenu.css"
import CatCard from './CatCard'

import Sdata from '../Api_Data'

const allCatMenu = ["All", ...new Set(Sdata.map((curElem) => {
  return curElem.category;
}))]
console.log(allCatMenu)

function CatMenu() {
  const [items, setItems] = useState(Sdata);
  const [catItems, setCatItems] = useState(allCatMenu)

  const filterMenu = (categoryItem) => {
    if (categoryItem === "All") {
      return setItems(Sdata);
    }
    const updateItems = Sdata.filter((curEle) => {
      return curEle.category === categoryItem;

    });
    setItems(updateItems);
  }



  return (
    <>
      <section className='category'>
        {
          catItems.map((curElem) => {
            return <button onClick={() => filterMenu(curElem)}>{curElem}</button>
          })
        }
        {/* <button onClick={() => setItems(Sdata)} >All</button>
        <button onClick={() => filterMenu('Tablets')}>Tablets</button>
        <button onClick={() => filterMenu('Drops')}>Drops</button>
        <button onClick={() => filterMenu('Liquids')}>Liquids</button>
        <button onClick={() => filterMenu('Capsules')}>Capsules </button>
        <button onClick={() => filterMenu('Antibiotics')}>Antibiotics </button>
        <button onClick={() => filterMenu('Inhalers')}>Inhalers </button>
        <button onClick={() => filterMenu('Injections')}>Injections  </button>
        <button onClick={() => filterMenu('Suppositories')}>Suppositories  </button> */}
      </section>
      <div className="container-fulid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">

              {items.map((val, index) => {
                return (
                  <CatCard
                    key={index}
                    img={val.img}
                    title={val.title}
                    details={val.details}
                    price={val.price}
                    category={val.category}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CatMenu

