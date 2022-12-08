import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getDynamicData } from "../../Redux/GetDynamicData/action";
import { NavbarRoutes } from '../NavbarRoutes'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar';
import CardDetails from "../CardDetails";

const json_data = require('./products.json');

export const DynamicCardContents = () => {
    const id = useParams()
    const dispatch = useDispatch()
    const content = useSelector(state => state.dynamicContent.dynamicData);

    const [item, setItem] = useState({});
    
    useEffect(() => {
        dispatch(getDynamicData(id))
        // check if the above call is pulling data from redux store
        
       
        
    }, [dispatch, content, id])
    console.log(content.length === 0 ? " " : content[0])
    // get data from redux store

    //loop through json data and return CardDetails for each
    // const cardDetails = json_data.map((item) => {
    //     return <CardDetails key = {item.id} {...item} />
    // })
    // console.log(cardDetails)
    // return cardDetails
    //map json_data to CardDetails objects based on ID
    // const cardDetails = json_data.map((item) => {
    //     return <CardDetails key = {item.id} {...item} />
    // })


    return <>
     <Navbar/>
    <NavbarRoutes />

    {/* {json_data.map((item) => {
        return <CardDetails key = {item.id} {...item} />
    })} */}
    




    <CardDetails {...json_data[1]}/>         
    {/* <h1>Dynamic Contents Fetched!</h1>
    <h3>{content.length === 0 ? null:content[0].category}</h3>
    <h3>{content.length === 0 ? null:content[0].id}</h3>
    <h3>{content.length === 0 ? null:content[0].description}</h3> */}
    <Footer />
    </>
}