'use client';

import { useState } from "react";

export function GridElement({color = 'white'}: {color?: string}) {
    // console.log(`bg-${color}`);
    return (
        <div className={
            `lg:h-[16px] lg:w-[16px] bg-${color}
            lg:border-2 border-gray-200
            h-[12px] w-[12px] border
        `}>
        </div>
    );
}

export default function Grid() {

    const [color, setColor] = useState('green-900');

    let gridlg: React.ReactNode[] = [];
    let i=0;
    for (i=0; i<315; i++) {
        gridlg.push(<GridElement key={i} color={color}/>);
    }
    let grid: React.ReactNode[] = [];
    i=0;
    for (i=0; i<91; i++) {
        grid.push(<GridElement key={i} color={color}/>);
    }

    let daysmd = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"].map((day) => {
        return (
            <div key={day} className="h-4 w-8 text-center text-[10px] border border-gray-200">
                {day}
            </div>
        );
    });
    let days = ["", "Mon", "", "Wed", "", "Fri", ""].map((day) => {
        return (
            <div key={day} className="h-[12px] w-5 text-[7px] text-center border border-gray-200">
                {day}
            </div>
        );
    });

    return (
        <div className="flex flex-row justify-center ">
            <div className="hidden lg:grid grid-rows-7 grid-flow-col">
                {daysmd}
            </div>
            <div className="lg:hidden font-bold grid grid-rows-7 grid-flow-col">
                {days}
            </div>
            <div className="hidden lg:grid grid-rows-7 grid-flow-col gap-0 lg:w-[702px] w-[30rem]"> 
                {gridlg}
            </div>
            <div className="grid lg:hidden grid-rows-7 grid-flow-col gap-0 lg:w-[56rem] w-[84px]"> 
                {grid}
            </div>
        </div>
    )

}
