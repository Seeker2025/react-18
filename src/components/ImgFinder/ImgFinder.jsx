import React, { Component } from "react";
import { Searchbar } from "components/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { getNews } from 'components/fetch';

export class ImgFinder extends Component{
    state = {

    }

   

    componentDidMount(){
        getNews(1, 'cat')
        .then(response => response.json()
        .then(data => console.log(data)
        )
    )
    }
    

    render(){
        return (
            <>
                <Searchbar/>
                <ImageGallery/>
            </>
            
        );
    }
}