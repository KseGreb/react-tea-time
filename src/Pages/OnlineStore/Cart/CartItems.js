import { dataSelectionOfTeas } from "../../../Data/dataSelectionOfTeas";
import { useDispatch } from "react-redux";
import { removeItemFromCart} from "../../../../src/redux/cartSlice";

export const CartItems = ({cartItem}) => {

    const newTeas = dataSelectionOfTeas.find(item => 
        item.id === cartItem.teaId);
    const dispatch = useDispatch();
    
    return(<div>
        <p>{newTeas.teaName}</p> 
        <p>{cartItem.quantity} grams</p> 
        <p>Price: ${newTeas.price * cartItem.quantity * 0.01}</p>
        <span onClick={ ()=> dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
            <img src="https://img.icons8.com/?size=100&id=104338&format=png&color=000000" alt="remove item from cart"/>
        </span>
        <button onClick={console.log("Clicked!!!")}
        // onClick={()=>{dispatch(removeItemFromCart({cartItemId : cartItem.id}))}}
        >Remove</button>
        
    </div>)
}