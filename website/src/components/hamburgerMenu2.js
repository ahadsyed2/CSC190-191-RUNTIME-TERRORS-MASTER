import React from 'react' 
import { AiFillHome } from "react-icons/ai"; /*home*/
import { MdSell } from "react-icons/md"; /*sell*/
import { RiContactsFill } from "react-icons/ri"; /*about*/
import { MdContactPhone } from "react-icons/md"; /*contact*/

export const hamburgerMenu2 = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-bar-text'
    },
    {
        title: 'Sell a Car',
        path: '/Posting',
        icon: <MdSell />,
        cName: 'nav-bar-text'
    },
    {
        title: 'About Us',
        path: '/AboutCarmony',
        icon: <RiContactsFill />,
        cName: 'nav-bar-text'
    },
    {
        title: 'About Dealers',
        path: '/AboutDealers',
        icon: <RiContactsFill />,
        cName: 'nav-bar-text'
    },
    {
        title: 'Expert Advice',
        path: '/ExpertAdvice',
        icon: <MdContactPhone />,
        cName: 'nav-bar-text'
    }
]
