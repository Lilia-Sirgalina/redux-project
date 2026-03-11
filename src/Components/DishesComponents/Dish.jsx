const Dish = ({dish}) => {
    const {id, price, img, name, category} = dish;

    return(        
        <div key={id}>
            <h2>{name}</h2>
            <p>$ {price}</p>
            <img src={`./${dish.img}.jpg`} alt="dish" />

            {/* To fix later */}
            <button>HOW MANY PORTIONS?</button>
            <button>Add to Cart</button>
        </div>
        
    )
}

export default Dish; 