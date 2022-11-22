import { Navigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

import { pins } from "../../../various_things/pins";

import Pins from "../Pins";
import PinContent from "./Pin_content";

function Pin({ handlePinSave, handlePinRemoveFromSaved, handlePinOpenerClick, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){
    const [ searchParams, setSearchParams ] = useSearchParams();

    const pinId = parseInt(searchParams.get("id"));
    const pin = useSelector((state) => state.app.allPins?.find((pin) => pin.id === pinId)); //Getting pin based on param 'id'

    if(!pin){
        return(
            <Navigate to="/" />
        );
    }

    const similarPins = pins.filter((possibleSimilarPin) => {
        for(let i = 0; i < pin.tags.length; i++){
            if(possibleSimilarPin.tags.includes(pin.tags[i]) && possibleSimilarPin.id !== pin.id){
                return true;
            }
        }
    });
    return(
        <div className="pin">
            <PinContent pin={pin} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />

            <b>Similar pins</b>
            <Pins pins={similarPins} handlePinOpenerClick={handlePinOpenerClick} handlePinSave={handlePinSave} />
        </div> 
    );  
}

export default Pin;