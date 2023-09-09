import React from 'react';
import SunSwitch from "../../atoms/SunSwitch";

const SwitchButton = () => {
    return (
        <div className="w-[48px] h-[28px] bg-zinc-100 rounded-full flex items-center justify-items-start">
            <SunSwitch/>
        </div>
    )

}

export default SwitchButton;