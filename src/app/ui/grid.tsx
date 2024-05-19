'use client';

import { useState } from "react";

export function GridElement({color = 'white'}: {color?: string}) {
    // console.log(`bg-${color}`);
    return (
        <div className={
            `md:h-4 md:w-4 bg-${color}
            md:border-2 border-gray-200
            h-[10px] w-[10px] border 
        `}>
        </div>
    );
}

export default function Grid() {

    const [color, setColor] = useState('green-900');

    let gridmd: React.ReactNode[] = [];
    let i=0;
    for (i=0; i<364; i++) {
        gridmd.push(<GridElement key={i} color={color}/>);
    }
    let grid: React.ReactNode[] = [];
    i=0;
    for (i=0; i<182; i++) {
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
            <div key={day} className="h-[10px] w-6 text-[7px] text-center border border-gray-200">
                {day}
            </div>
        );
    });

    return (
        <div className="flex flex-row">
            <div className="hidden md:grid grid-rows-7 grid-flow-col">
                {daysmd}
            </div>
            <div className="md:hidden font-bold grid grid-rows-7 grid-flow-col">
                {days}
            </div>
            <div className="hidden md:grid grid-rows-7 grid-flow-col gap-0 md:w-[56rem] w-[30rem]"> 
                {gridmd}
            </div>
            <div className="grid md:hidden grid-rows-7 grid-flow-col gap-0 md:w-[56rem] w-[17rem]"> 
                {grid}
            </div>
        </div>
    )

}
