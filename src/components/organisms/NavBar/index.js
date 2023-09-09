import React from 'react';
import NavBarTitle from "../../atoms/NavBarTitle";
import SearchBar from "../../molecules/SearchBar";
import SwitchButton from "../../molecules/SwitchButton";

const NavBar = () => {
    return (
        <>
            <div className="md:flex justify-between items-center py-4 md:py-8 gap-x-1">
                {/*<div>*/}
                {/*    /!*Logo*!/*/}
                {/*</div>*/}
                <div className="md:hidden m-auto flex justify-end items-center">
                    <SwitchButton/>
                </div>
                <div className="bg-white text-center md:text-start md:flex md:justify-start justify-center gap-x-10">
                    <NavBarTitle title="Home"/>
                    <NavBarTitle title="Blog"/>
                    <NavBarTitle title="Posty"/>
                    <NavBarTitle title="O mnie"/>
                    <NavBarTitle title="Kontakt"/>
                </div>
                <div className="md:flex justify-end items-center gap-x-3 md:gap-x-10 hidden">
                    <SearchBar className="ml-5"/>
                    <SwitchButton/>
                </div>
                <div className="md:hidden m-auto flex justify-center items-center">
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default NavBar;