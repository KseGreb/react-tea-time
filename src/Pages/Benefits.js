import Buttons from "../Components/Buttons";
import HealthBenefits from "../Data/HealthBenefits";
import TypesOfTea from "../Data/TypesOfTea";
import { useState } from "react";

export function Benefits(){

    // const filteredTea = (search) => {
    //     const newTeaSearch = TypesOfTea.filter(element => element.search === search);
    //     setTea(newTeaSearch);
    // }

    const [benefit, setBenefit] = useState(HealthBenefits);
    const [showText, setShowText] = useState(false);

    const filteredTea = (search) => {
        const newBenefitSearch = TypesOfTea.filter(element => element.search === search);
        setBenefit(newBenefitSearch);
    }

    return(
        <div>
                       Health benefits 

            <p>What Are The Health Benefits of Tea? People all over the world have been drinking tea for thousands of centuries, and for good reason. Numerous studies have shown that a variety of teas may boost your immune system, fight off inflammation, and even ward off cancer and heart disease. While some brews provide more health advantages than others, there’s plenty of evidence that regularly drinking tea can have a lasting impact on your wellness. Put the kettle on, because we’re sharing some of the biggest benefits hidden in the world’s most popular teas.</p>

            
            <Buttons 
                filteredTea={filteredTea}
                setBenefit = {setBenefit}
                TypesOfTea={TypesOfTea}
            />

           
            
                <div className="aboutHealthBenefits">
                    {benefit.map((benefitsOfTea => {
                        const {id, benefit, image, description, showMore, search} = benefitsOfTea;

                    const showTextClick = (benefit) => {
                        benefit.showMore = !benefit.showMore;
                        setShowText(!showText)
                    }

                        return(
                            <div key={id} className="aboutBenefits">
                                <h1>{benefit}</h1>
                                <img src={image} width="300px"/>
                                <p>{ showMore ? description : description.substring(0,150) + "..."} 
                                    <button onClick={ () => showTextClick(benefitsOfTea)}>{showMore ? "Show less" : "Show more"}</button>
                                </p>
                            </div>
                        )
                    }))}

                
 
            </div>
        
        <p>info is taken form https://www.pennmedicine.org/updates/blogs/health-and-wellness/2019/december/health-benefits-of-tea</p>
        




        </div>
    )
}