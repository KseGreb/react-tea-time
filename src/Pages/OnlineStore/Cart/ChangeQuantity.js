export const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () =>{
        const newQuantity = quantity +100;
        setQuantity(newQuantity);
    }
    const removeQuantity = () => {
        const newQuantity = quantity -100;
        if(quantity <= 1) return quantity;
        setQuantity(newQuantity)
    }

    return(<div>
        <button onClick={removeQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={addQuantity}>+</button>
    </div>)
}

