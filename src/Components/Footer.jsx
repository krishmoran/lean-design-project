import React from 'react'

import {TiSocialFacebookCircular, TiSocialTwitter} from "react-icons/ti"
import {IoLogoInstagram} from "react-icons/io"
import {BiPlayCircle} from "react-icons/bi"
import {FooterWrapper} from "./styles"
import {FooterWrapperBottom} from "./styles"

export const Footer = () => {
    return (
        <>
        <FooterWrapper>
            <div>
                <h4>POPULAR LOCATIONS</h4>
                <p>Northeastern University</p>
                <p>Boston University</p>
                <p>Harvard University</p>
                <p>Pace University</p>
            </div>
            <div>
                <h4>Unihand</h4>
                <p>Help</p>
                <p>Sitemaps</p>
                <p>Leagal & Privacy information</p>
            </div>
            
        </FooterWrapper>
        <FooterWrapperBottom>
            <div>
                <p>Secondhand shopping within universities.</p>
            </div>
        </FooterWrapperBottom>
        </>
    )
}
