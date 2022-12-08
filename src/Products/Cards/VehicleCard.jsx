import React from 'react'
import {FiHeart} from "react-icons/fi"
import { useDispatch } from 'react-redux'
import {CardLinkWrap, CardWrapper} from "../../Components/styles"
import { addWhishlist } from '../../Redux/Wishlist/action'

export const VehicleCard = ({image, price, category, title, address, postDate, brand, model, id }) => {
    const dispatch = useDispatch();

    const addToWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('updating wishlist');
        const payload = {category : category, id : id}
        dispatch(addWhishlist(payload));
    }

    return (
            <CardWrapper>
                <CardLinkWrap to = {`/products/${id}`}>
                <div>
                    <div></div>
                    <img src= {image} alt= {image} />
                    <div></div>
                    <button onClick = {addToWishlist}><FiHeart/></button>
                </div>
                <div>
                    <p> $ {price}</p>
                    <p> {title}  </p>
                    <p> {category}  </p>
                </div>
                <div>
                    <p>{address}</p>
                    <p>{postDate}</p>
                </div>   
                </CardLinkWrap>    
            </CardWrapper>
    )
}
