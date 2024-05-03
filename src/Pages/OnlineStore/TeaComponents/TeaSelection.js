export const TeaSelection = ({tea}) => {
    return(<div>
        <h2>{tea.teaName}</h2>
        <p>${tea.price}</p>
        <img src={`./${tea.image}.jpg`} alt="tea" width="350px" height="420px"/>
    </div>)
}