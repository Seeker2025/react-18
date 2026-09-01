import React, { Component   } from 'react';

import { GalleryUl          } from './ImageGallery.styled';
import { ImageGalleryItem   } from 'components/ImageGalleryItem';
import { Modal } from 'components/Modal';


export class ImageGallery extends Component{
    state = {
        large: '',
        tags: '',
        visible: false,
    };

    getImg = (large, tags) => {
    this.setState({
        large,
        tags,
        visible: true
    }, () => {
        console.log(this.state.large, this.state.tags);
    });
    }

    toggleModal = () => {
        this.setState(({visible})=>({
            visible: ! visible
        }))
    }
    
    render(){
        const { arrHits } = this.props

        return (
        <>
            <GalleryUl>
                {
                    arrHits?.map((itm)=>{

                    // console.log(itm);
                        
            return <ImageGalleryItem 
                    
                    key     =    {itm.id}
                    imgUrl  =    {itm.webformatURL}
                    tag     =    {itm.tags}
                    onClick={() => this.getImg(itm.largeImageURL, itm.tags)}
                    />
                    })
                }
            {
                this.state.visible
                &&
                <Modal 
                large =     {this.state.large}
                tags =      {this.state.tags}
                toClose =   {this.toggleModal}
                />
            }

            </GalleryUl>
        </>
        )
    }
}