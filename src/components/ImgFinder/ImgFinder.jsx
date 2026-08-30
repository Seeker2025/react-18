import React, { Component } from "react";
import { Searchbar } from "components/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { getNews } from 'components/fetch';
import { Button } from "components/Button";

import { BoxForButton } from "./ImgFinder.styled";

export class ImgFinder extends Component{
    state = {
        searchInput: '',
        page: 1,
        arr: {
            total: 0,
            totalHits: 0,
            hits: [],
        },
    };

    // componentDidMount(){
    //     getNews(1, 'cat')
    //     .then(response => response.json()
    //     .then(data => console.log(data)
    //     )
    // )
    // }

    componentDidUpdate(prevProps, prevState){
        if(
        prevState.searchInput !== this.state.searchInput
        ||
        prevState.page        !== this.state.page                 
        ){
        getNews(this.state.page, this.state.searchInput)
         .then(response => response.json())
         .then(data =>{
            // console.log(data)
            // console.log(data.hits)
            this.setState({ arr: data })
            } 
         )
        }
    }

    addToDo = (val) => {
        this.setState({ searchInput: val})

    }

    toPlus = () =>{
        this.setState((prevState)=>({
            page: prevState.page + 1
        }),
        ()=>console.log(this.state.page)
    )
    }
    
    render(){
        return (
            <>
                <Searchbar addToDo={this.addToDo}/>
                <ImageGallery arrHits = {this.state.arr.hits}/>
                <BoxForButton>
                {
                this.state.arr.hits.length > 0
                &&
                this.state.arr.totalHits / 12 > this.state.page
                &&
                <Button clickTo = { this.toPlus }/>
                }
                </BoxForButton>
            </>
            
        );
    }
}