import React from "react";
import SettingIcon from "../Icons/SettingIcon/index.jsx";
import {ArrowLeftIcon} from "@heroicons/react/24/solid/index.js";

const Menu = () => {
    return (

        <>
            <div
                className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12'>
                <div className="flex items-center justify-between border-b bg-blue-400 p-3">
                    <div className="flex items-center space-x-2 rounded bg-gray-100 py-1 px-2 text-slate-500 shadow-md">
                        <ArrowLeftIcon/>
                    </div>
                    <div className="text-lg font-bold text-gray-100 p-4">Piwero Blog</div>
                    <div className="flex items-center space-x-5 text-gray-100">
                        < SettingIcon />

                    </div>
                </div>
            </div>
        </>
    );
}
export default Menu;