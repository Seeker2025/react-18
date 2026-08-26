import React, { Component } from "react";

import { GalleryUl } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem";

export class ImageGallery extends Component{
    state = {
        img: [{id: 1111, im:'https://img.magnific.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?semt=ais_hybrid&w=740&q=80'}]
    };

    render(){
        return (
        <>
            <GalleryUl>
                {
                    this.state.img && this.state.img.map((itm)=>{
                       return <ImageGalleryItem im={itm.im} key={itm.id}/>
                    })
                }
            </GalleryUl>
        </>
        )
    }
}