import { useState } from "react";
import { Menu } from "./Menu";
import { Title } from "./Title";
import { APIMenu } from "./api/types";
import { menuData } from "./api/api";
import { Categories } from "./Categories";

const categories = menuData.map((item) => item.category);
const allCategories = ["all", ...categories];

function App() {
  const [menuItems, setMenuItems] = useState<APIMenu[]>(menuData);
  const [categories, setCategories] = useState(allCategories);

  function filterItems(category: string) {
    if (category === "all") {
      setMenuItems(menuData);
    }

    const newItems = menuData.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu">
        <Title title="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
