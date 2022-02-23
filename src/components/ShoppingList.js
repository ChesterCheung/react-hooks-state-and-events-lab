import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items)

  const handleOnchange = (e) => {
    console.log(e.target.value)

    const filteredItem = items.filter(itemObj => itemObj.category === e.target.value)

    console.log(filteredItem)

    setSelectedCategory(filteredItem)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleOnchange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
