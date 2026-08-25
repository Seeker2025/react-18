import React, { Component } from "react";

import { GalleryUl } from "./ImageGallery.styled";

export class ImageGallery extends Component{
    state = {
        img: null,
    };

    render(){
        return (
            <>
                <GalleryUl>
                    {
                        this.state.img && this.state.img.map((itm)=>{

                        })
                    }
            
                </GalleryUl>
            </>
        )
    }
}