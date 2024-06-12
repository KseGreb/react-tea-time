import { dataSelectionOfTeas } from "../../../Data/dataSelectionOfTeas";
import { TeaSelection } from "./TeaSelection";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../../redux/teaSlice";

export const SelectionOfTeas = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return(<div className="teaContainer">
        {dataSelectionOfTeas
            .filter(teas => {
                return selectedCategory === teas.category;
            })
            .map(tea => 
                <TeaSelection tea={tea}/>
        )}
    </div>)
}
