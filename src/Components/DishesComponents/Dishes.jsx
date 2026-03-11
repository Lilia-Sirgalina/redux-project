import { dishesData } from "../../data/dataDishes";
import Dish from "./Dish";

const Dishes = () => {
    return(
        <div>
            {dishesData.map(dish => <Dish dish = {dish} />)}
        </div>
    )
}

export default Dishes; 