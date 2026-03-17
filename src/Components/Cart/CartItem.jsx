import { useDispatch } from "react-redux";
import { dishesData } from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    console.log(cartItem);
    const dishes = dishesData.find((item) => item.id === cartItem.dishID)
    const dispatch = useDispatch()
    console.log(dishes)

    return(
        <div>
            <p>{dishes.name}</p>
            <p>{cartItem.quantity} portion(s)</p>
            <p>Price: ${dishes.price * cartItem.quantity}</p>

            <span onClick={() => dispatch(removeItemFromCart({cartItemID: cartItem.id}))} >
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
            </span>
        </div>
    )
}

export default CartItem; 