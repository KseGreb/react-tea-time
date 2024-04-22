
import TypesOfTea from "../Data/TypesOfTea"
import { useState } from "react";
import Buttons from "../Components/Buttons";
import backPicture from '../Assets/background.jpg';
// import '../App.css'

export function Types(){

    const [tea, setTea] = useState(TypesOfTea);

    const filteredTea = (search) => {
        const newTeaSearch = TypesOfTea.filter(element => element.search === search);
        setTea(newTeaSearch);
    }

    return(
        <div>
             <div className='background'>
                <img src={backPicture} alt='background'/>
            </div>

            <h1>Types of tea: the ultimate guide.</h1>
            <p>All tea comes from the same plant – camellia sinensis – it is how it’s grown, harvested and crafted that produces the different types.</p>
            
            <h3>What are the main types of tea?</h3>
            <p>The main types of tea are black tea, green tea, white tea, oolong tea, pu-erh tea, purple tea, and herbal infusions. 
                These all have their own unique characteristics and flavours due to a range of different oxidations states, processing methods and plant leaf origins.</p>
                
            <Buttons 
                filteredTea={filteredTea}
                setTea={setTea}
                TypesOfTea={TypesOfTea}
            />

            <div className="differentTeasContainer">

            {tea.map((drinkTea => {
                const {id, type, image, description, search} = drinkTea;

                return(
                    <div key={id}  className="differentTeas">
                        <h3>{type}</h3>
                        <img src={image} width="300px"/>
                        <p>{description}</p>
                    </div>
                )
            }))}

            </div> 




{/* 
More like this
See our collection of tea recipes for some ideas for how to make your own homemade teas.

How to brew tea
Making tea is a bit like making a cake; you need to follow a recipe and take a little care to get a perfect result. There are just three things to measure. Once you have mastered these, you can explore each tea in all its complexity and enjoy each one just the way you like it.

builders-tea-75ba122
3 steps to the perfect cup of tea:
1. Leaf-to-water ratio
We recommend 2-3g of leaves per teacup (150ml). This is roughly one teaspoon of broken, black tea or a dessert spoon of whole leaf teas which are lighter and more bulky. A good rule of thumb is that if you like stronger tea use more tea, do not infuse for longer — too long and it will just become bitter.

2. Water temperature
The flavours in good tea dissolve at different temperatures. White and green teas work better at lower temperatures – around 70°C – to bring out their delicate sweetness. Black teas are best with water at 80°C, if you drink them without milk, or 90-95°C with milk. The hotter the water the more tannic the tea. Boiling water is really only good for industrial tea bags and most herbal infusions. Temperature controlled kettles are available, or you can simply add a little cold water to the teapot before adding the boiling water.

3. Infusion time
This really depends on how you like your tea. The longer you leave tea to brew, the stronger and more tannic it will become. As a general rule, go for:

One minute for a light infusion
Two minutes for a strong infusion
Three minutes for a very strong infusion
Once at your desired strength, pour the last drop from the pot, or remove the leaves, so that they don’t continue to brew and become bitter. When you're ready for your second cup, just re-infuse the same tea leaves with fresh water. Often the second cup is even more delicious than the first. Some teas will infuse many times, making what seems like expensive leaf tea actually rather affordable – just a few pence per cup.






        */}


       <p>https://www.bbcgoodfood.com/howto/guide/guide-tea-types</p>
       
        </div>
    )
}

