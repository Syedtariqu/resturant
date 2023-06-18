import React, { useState } from "react";
import "./Basics/style.css";
import Menu from "./Basics/menuApi";
import Navbar from "./Basics/Navbar";
import MenuCard from "./Basics/MenuCard";



const uniqueList =
[
  ...new Set(
    Menu.map((curElem)=>{
      return curElem.category;
    })
  ),
  "All",
];

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]=useState(uniqueList)
  const filterItem =(category)=>{
    if(category ==="All"){
      setMenuData(Menu);
      return;
    }
    const updatedList =Menu.filter((curElem)=>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
 <Navbar filterItem={filterItem} menuList={menuList} key={menuData.id}/>
    <MenuCard menuData={menuData} key={Menu.id}/>
    </>
  );
};

export default Resturant;