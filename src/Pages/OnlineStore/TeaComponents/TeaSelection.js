export const TeaSelection = ({tea}) => {
    return(<div className="teaContainer">
        <div className="allTeaForSale">
            <img src={`./${tea.image}.jpg`} alt="tea" width="350px" height="420px"/>
            <h2>{tea.teaName}</h2>
            <p>${tea.price}</p>
        </div>
    </div>)
}