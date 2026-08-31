import React, { Component } from "react";

import { GalleryUl          } from "./ImageGallery.styled";
import { ImageGalleryItem   } from "components/ImageGalleryItem";

export class ImageGallery extends Component{
    
    render(){
        const { arrHits } = this.props

        return (
        <>
            <GalleryUl>
                {
                    arrHits?.map((itm)=>{

                    // console.log(itm);
                        
                    return <ImageGalleryItem 
                            key    = {itm.id}
                            imgUrl = {itm.webformatURL}
                            tag    = {itm.tags}
                            />
                    })
                }
            </GalleryUl>
        </>
        )
    }
}