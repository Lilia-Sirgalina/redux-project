import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
    const {id, price, img, name, category} = dish;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(        
        <div key={id}>
            <h2>{name}</h2>
            <p>$ {price}</p>
            <img src={`./${dish.img}.jpg`} alt="dish" />

            {/* To fix later */}
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={() => dispatch(addItemToCart({dish, quantity}))} >Add to Cart</button>
        </div>
        
    )
}

export default Dish; 