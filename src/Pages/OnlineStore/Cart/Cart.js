import { useSelector } from "react-redux";
import { CartItems } from "./CartItems";
import { getCartItems, getTotalPrice } from "../../../../src/redux/cartSlice";

export const Cart = () => {
    const ourItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(<div>
        <img src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000" alt="cart icon"/>
        <h3>YOUR TOTAL: ${totalPrice * 0.01}</h3>
        <h3>In your cart you have:</h3>
        {ourItems.map(cartItem => 
            <CartItems cartItem={cartItem}/>
        )}
        
    </div>)
}