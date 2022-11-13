import { useLocation } from "react-router";
import { pins } from "../../../various_things/pins";
import PinInfo from "./Pin_info";
import Pins from "../Pins";

function Pin(){
    const location = useLocation();
    const pin = location.state.pin;

    const similarPins = pins.filter((possibleSimilarPin) => {
        for(let i = 0; i < pin.tags.length; i++){
            if(possibleSimilarPin.tags.includes(pin.tags[i]) && possibleSimilarPin.id !== pin.id){
                return true;
            }
        }
    });
    console.log("Similar",similarPins);

    return(
        <div className="pin">
            <img src={pin.imageSrc} alt={`${[pin.title]} image`} />
            <PinInfo pin={pin} />

            <b>Similar pins</b>
            <Pins pins={similarPins} />
        </div> 
    );  
}

export default Pin;