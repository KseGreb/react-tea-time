export const TeaSelection = ({tea}) => {
    return(<div className="teaContainer">
        <div className="allTeaForSale">
            <img src={`./${tea.image}.jpg`} alt="tea" width="350px" height="420px"/>
            <h2>{tea.teaName}</h2>
            <p>${tea.price}</p>
            <button>How many grams?</button>
            <button>Add to cart</button>
        </div>
    </div>)
}