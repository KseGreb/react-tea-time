import {  useDispatch, useSelector } from "react-redux";
import {  filterCategory, getSelectedCategory } from "../../../redux/teaSlice";
import "./filter.css"

export const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    
    return(<div>
        <p onClick={()=>{dispatch(filterCategory(category))}}
            className={selectedCategory === category ? "categoryButtonSelected " : "categoryButtonNotSelected categoryButton"}>
            {category}
        </p>
    </div>)
}