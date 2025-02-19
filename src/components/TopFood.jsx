import { useState } from "react";
import { Link } from "react-router-dom";
import "./All.css"
const TopFood = ({foods}) => {
    console.log(foods);
   
    // sorting the foods array based on purchaseQuantity in descending order
    foods.sort((a,b)=>b.purchaseQuantity-a.purchaseQuantity);

    const topFoods = foods.slice(0,6);
    const {name,image,category,price,quantity,_id} = topFoods;
   
    return (
     <div>
      <h2 className="text-3xl font-bold mt-4 mb-4 text-center">Our <span className="text-orange-500">Best</span> Food</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                topFoods.map((food,index)=>(
                <div key={index}>
                  <div className="card  bg-base-100 shadow-xl">
  <figure><img className="img-style w-96 h-[415px]" src={food.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{food.name}</h2>
    <p>category: {food.category}</p>
    <h3 className="font-bold">price: {food.price}$</h3>
    <p className="font-medium">Purchase Quantity: {food.purchaseQuantity}</p>
    <div className="card-actions justify-end">
    <Link to={`/details/${food._id}`}>
        {" "}
        <button className="btn bg-primaryColor">View Details</button>
     </Link>
    </div>
  </div>
</div>
                    </div>
                )
                    
                )
            }
         
        </div>
        <div className="flex justify-center mt-5">
          <Link to="/allFoods">
          <button className="btn bg-orange-400 btn-outline  text-center flex font-bold">See More...</button>
          </Link>
            </div>
     </div>
    );
};

export default TopFood;