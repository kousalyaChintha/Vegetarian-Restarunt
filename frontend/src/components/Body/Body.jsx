import React, { useState } from "react";
import Card from './Card'
import "./Body.css"


function Body(){
  const ori = [
    {
            "name" : "samosa",
            "img" : "https://c.ndtvimg.com/2023-03/0m65kep_samosa_625x300_10_March_23.jpg" ,
            "price" : "₹300",
            "rate" : "3"
     },
     {
            "name" : "Bobattu",
            "img" : "https://i.pinimg.com/736x/14/fd/3f/14fd3f81c790aeec46d343f589bffed8.jpg" ,
            "price" : "₹400",
            "rate" : "3.5"
     },
     {
            "name" : "GulabJamun",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8tNjVGgzQ0QZzbuuZjgRFyhYK-u_YFQyFZOPk_C3JIu4ByFNGpRuI_u3pEEflWYzFAo&usqp=CAU" ,
            "price" : "₹500",
            "rate" : "4"
     },
     {
            "name" : "Chakrapongali",
            "img" : "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/sweet-pongal-recipe-1-500x375.jpg",
            "price" : "₹600",
            "rate" : "4.5",
            "rating" : "4.5"
     },
     {
            "name" : "Pulihora",
            "img" : "https://vismaifood.com/storage/app/uploads/public/db8/6b1/f51/thumb__700_0_0_0_auto.jpg",
            "price" : "₹300",
            "rate" : "4.5"
     },
     {
            "name" : "Curdrice",
            "img" : "https://upload.wikimedia.org/wikipedia/commons/5/58/Curd_Rice.jpg",
            "price" : "₹500",
            "rate" : "4"
     },
     {
            "name" : "Boorulu",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQz-V0eZCsA0UcpI8iytRkJ90tgObA-t9AA&s",
            "price" : "₹400",
            "rate" : "3.5"
     },
     {
            "name" : "Putharekulu",
            "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3EyuihSSs9WOUBZ0tuMMTyHOKURYwoECVw&s",
            "price" : "₹600",
            "rate" : "4.5"
     },
  ]

  const [list, setList] = useState(ori)

  const handleChange = (event) => {
    let value = event.target.value.toLowerCase();
    console.log(value);
    if (value == "") {
      setList(ori)
    }
    else {
      setList(ori.filter((item) => item.name.toLowerCase().startsWith(value)))
    }
  } 
    return(
      <>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search your favourite dish"
          className="search-bar"
        />
        <div className="body-container">
          {
            list.length === 0 ?
            <p class="no-results">No results Found.....</p>
            :
            list.map(
              (item)=>
              <Card key={item.name} name={item.name} img={item.img} price={item.price} rate={item.rate} />
            )
          }
        </div>
        </>
    )
}

export default Body;
