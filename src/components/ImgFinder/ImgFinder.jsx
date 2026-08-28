import React, { Component } from "react";
import { Searchbar } from "components/Searchbar";
import { ImageGallery } from "components/ImageGallery";
import { getNews } from 'components/fetch';
// import { Button } from "components/Button";

export class ImgFinder extends Component{
    state = {
        searchInput: '',
        arr: [],

    };

   

    // componentDidMount(){
    //     getNews(1, 'cat')
    //     .then(response => response.json()
    //     .then(data => console.log(data)
    //     )
    // )
    // }

    componentDidUpdate(prevProps, prevState){
        if(prevState.searchInput !== this.state.searchInput){
        getNews(1,  this.state.searchInput)
         .then(response => response.json())
         .then(data =>{
            console.log(data.hits)
            this.setState({ arr: data.hits })
            } 
         )
        }
    }

    addToDo = (val) => {
        this.setState({ searchInput: val})

    }
    

    render(){
        return (
            <>
                <Searchbar addToDo={this.addToDo}/>
                <ImageGallery arrHits = {this.state.arr}/>
                {/* <Button/> */}
            </>
            
        );
    }
}