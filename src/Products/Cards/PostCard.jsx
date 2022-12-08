import React from 'react'
import {FiHeart} from "react-icons/fi"
import {CardLinkWrap, CardWrapper} from "../../Components/styles"

export const PostCard = ({image, price, year, distance, address, postDate, brand, model, category, id }) => {

    return (
            <CardWrapper>
                <CardLinkWrap to = {`/products/${id}`}>
                <div>
                    <div></div>
                    <img src= {image} alt= {image} />
                    <div></div>
                    <button><FiHeart/></button>
                </div>
                <div>
                    <p> $ {price}</p>
                </div>
                <div>
                    <p>{address}</p>
                    <p> {postDate}</p>
                </div>   
                </CardLinkWrap>    
            </CardWrapper>
    )
}
