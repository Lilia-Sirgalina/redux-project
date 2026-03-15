import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({dish}) => {
    const {id, price, img, name, category} = dish;
    const [quantity, setQuantity] = useState(1)

    return(        
        <div key={id}>
            <h2>{name}</h2>
            <p>$ {price}</p>
            <img src={`./${dish.img}.jpg`} alt="dish" />

            {/* To fix later */}
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button>Add to Cart</button>
        </div>
        
    )
}

export default Dish; 