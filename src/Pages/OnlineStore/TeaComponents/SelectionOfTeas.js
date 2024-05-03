import { dataSecectionOfTeas } from "../../../Data/dataSelectionOfTeas"
import { TeaSelection } from "./TeaSelection"

export const SelectionOfTeas = () => {
    return(<div className="teaContainer">
        {dataSecectionOfTeas.map(tea => 
            <TeaSelection tea={tea}/>
        )}
    </div>)
}
