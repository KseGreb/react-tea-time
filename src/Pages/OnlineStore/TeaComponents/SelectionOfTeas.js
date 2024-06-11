import { dataSelectionOfTeas } from "../../../Data/dataSelectionOfTeas"
import { TeaSelection } from "./TeaSelection"

export const SelectionOfTeas = () => {
    return(<div className="teaContainer">
        {dataSelectionOfTeas.map(tea => 
            <TeaSelection tea={tea}/>
        )}
    </div>)
}
