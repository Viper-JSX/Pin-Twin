import { useSelector } from "react-redux/es/exports";
import { pins } from "../../various_things/pins";

import Pins from "../Pins/Pins";

function MainPage({ handlePinSave }){
    const user = useSelector((state) => state.user);

    return(
        <div id="mainPage">
            Main

            {
                user ? 
                <Pins pins={pins} handlePinSave={handlePinSave} />
                :
                "Some other content"
            }
        </div>
    );
}

export default MainPage;