import React from 'react';
import {ReactComponent as Sunny} from "../../../images/icons/sunny.svg";

const SunSwitch = () => {
    return (
        <div className="bg-white rounded-full m-1 w-[24px] h-[24px] flex justify-center items-center">
            <Sunny className=""/>
        </div>
    )
}

export default SunSwitch;