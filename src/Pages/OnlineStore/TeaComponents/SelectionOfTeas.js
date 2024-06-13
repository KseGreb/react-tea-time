import { dataSelectionOfTeas } from "../../../Data/dataSelectionOfTeas";
import { TeaSelection } from "./TeaSelection";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../../redux/teaSlice";

export const SelectionOfTeas = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return(<div className="teaContainer">
        {dataSelectionOfTeas
            .filter(tea => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === tea.category;
            })
            .map(tea => 
                <TeaSelection tea={tea}/>
        )}
    </div>)
}
