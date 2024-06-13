import { useState } from "react";
import { ChangeQuantity } from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../../redux/cartSlice";
import { useDispatch } from "react-redux";

export const TeaSelection = ({tea}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(<div className="teaContainer">
        <div className="allTeaForSale">
            <img src={`./${tea.image}.jpg`} alt="tea" width="350px" height="420px"/>
            <h2>{tea.teaName}</h2>
            <p>${tea.price}</p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={()=> {dispatch(addItemToCart({tea, quantity}))}}>Add to cart</button>
        </div>
    </div>)
}