import { AllCategories } from "./Filter/AllCategories"
import { Cart } from "./Cart/Cart"
import { SelectionOfTeas } from "./TeaComponents/SelectionOfTeas"

export const OnlineStore = () => {
    console.log(OnlineStore)
    return(<div>
        
        <div className="mainSelection">
            <div className="selection">
                <AllCategories/>
            </div>
            <div className="selection">
                <SelectionOfTeas/>
            </div>

        </div>
        <Cart/>
        
        
    </div>)
}
