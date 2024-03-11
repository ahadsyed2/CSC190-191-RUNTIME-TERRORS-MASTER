import React from 'react' 
import { AiFillHome } from "react-icons/ai"; /*home*/
import { MdSell } from "react-icons/md"; /*sell*/
import { RiContactsFill } from "react-icons/ri"; /*about*/
import { MdContactPhone } from "react-icons/md"; /*contact*/

export const hamburgerMenu2 = [
    {
        title: 'Home',
        path: '/AfterHome',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Sell a Car',
        path: '/SellCar2',
        icon: <MdSell />,
        cName: 'nav-text'
    },
    {
        title: 'About Carmony',
        path: '/AboutCarmony2',
        icon: <RiContactsFill />,
        cName: 'nav-text'
    },
    {
        title: 'About Dealers',
        path: '/AboutDealers2',
        icon: <RiContactsFill />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/Contact2',
        icon: <MdContactPhone />,
        cName: 'nav-text'
    }
]