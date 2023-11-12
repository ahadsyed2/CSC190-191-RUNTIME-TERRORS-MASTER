import React from 'react' /*imr for shorname*/
import { AiFillHome } from "react-icons/ai"; /*home*/
import { MdSell } from "react-icons/md"; /*sell*/
import { RiContactsFill } from "react-icons/ri"; /*about*/
import { MdContactPhone } from "react-icons/md"; /*contact*/

export const hamburgerMenu = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Sell a Car',
        path: '/SellCar',
        icon: <MdSell />,
        cName: 'nav-text'
    },
    {
        title: 'About Carmony',
        path: '/AboutCarmony',
        icon: <RiContactsFill />,
        cName: 'nav-text'
    },
    {
        title: 'About Dealers',
        path: '/AboutDealers',
        icon: <RiContactsFill />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/Contact',
        icon: <MdContactPhone />,
        cName: 'nav-text'
    }
]