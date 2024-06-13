import { Cart } from "../Cart/Cart"
import { Filter } from "./Filter"

export const AllCategories = () => {
    return(<div>
        <h1>What kind of tea do you like?</h1>
        {['GREEN', 'WHITE', 'BLACK', 'OOLONG', 'HERBAL', 'ALL'].map(category =>
            <Filter category={category}/>
        )}
        <Cart/>
    </div>)
}