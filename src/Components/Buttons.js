function Buttons({filteredTea, TypesOfTea, setTea, setBenefit}){


    return(
        <div >
            <button onClick={()=> filteredTea("green")}>GREEN TEA</button>
            <button onClick={()=> filteredTea("black")}>BLACK TEA</button>
            <button onClick={()=> filteredTea("oolong")}>OOLONG TEA</button>
            <button onClick={()=> filteredTea("pu’er")}>PU'ER TEA</button>
            <button onClick={()=> filteredTea("herbal")}>HERBAL TEA</button>
            <button onClick={()=> filteredTea("flavoured")}>FLAVOURED TEA</button>
            <button onClick={()=> filteredTea("white")}>WHITE TEA</button>
            <button onClick={()=> setTea(TypesOfTea)}>SHOW ALL</button>
        </div>
    )
}
export default Buttons;