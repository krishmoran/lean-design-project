import React from 'react'
import {Link} from "react-router-dom"
import {RiArrowDownSLine} from "react-icons/ri"
import { useSelector } from 'react-redux'

import { RoutesNavbarWrapper } from './styles'
import { wordHashes } from "../Utils/BilingualData"

export const NavbarRoutes = () => {
    const language = useSelector((state) => state.language.lang);

    return (
        <RoutesNavbarWrapper>
            <div><span>{wordHashes.allCategories[language]}<RiArrowDownSLine /> </span> </div>
            <div>
                <Link to = "/" >Men</Link>
                <Link to = "/men" >Women</Link>
                <Link to = "/women">Premium</Link>
                <Link to = "/designer" >Designer</Link>
                <Link to = "/shoes" >Shoes</Link>
                <Link to = "/handbags" >Handbags</Link>
                <Link to = "/accessories" >Accessories</Link>
            </div>        
        </RoutesNavbarWrapper>
    )
}
