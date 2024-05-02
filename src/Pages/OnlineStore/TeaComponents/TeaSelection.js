export const TeaSelection = ({tea}) => {
    return(<div>
        <h2>{tea.teaName}</h2>
        <p>${tea.price}</p>
        <img src={`./${tea.img}.jpg`} alt="tea"/>
    </div>)
}