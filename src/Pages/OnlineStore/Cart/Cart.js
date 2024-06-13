import { useSelector } from "react-redux";
import { CartItems } from "./CartItems";
import { getCartItems } from "../../../../src/redux/cartSlice"


export const Cart = () => {
    const ourItems = useSelector(getCartItems);

    return(<div>
        <img src="https://img.icons8.com/?size=100&id=BBhHIwJINbBl&format=png&color=000000" alt="cart icon"/>
        {ourItems.map(oneItem => 
            <CartItems oneItem={oneItem}/>
        )}
        
    </div>)
}