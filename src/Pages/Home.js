import CupsOfTeaCounter from "../Components/Counter-cupsOfTea";
import { SliderQuotes } from "../Components/Slider-quotes";
import Video from "../Components/Video";
import { OnlineStore } from "./OnlineStore/OnlineStore";

export function Home(){
    return(
        <div>
            HOME TEST
            
            <CupsOfTeaCounter/>
            <SliderQuotes/>
            <Video/>
        </div>
    )
}