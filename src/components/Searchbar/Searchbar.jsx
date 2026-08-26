import React, { Component } from "react";
import { 
            HeaderSearchbar,
            Form,
            ButtonForm,
            InputForm

        } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {
        value: '',
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addToDo(this.state.value)
    }

    render(){
        return (
            <HeaderSearchbar>

                    <Form onSubmit = {this.handleSubmit}>

                        <ButtonForm type="submit">
                            <span></span>
                        </ButtonForm>

                        <InputForm
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value = {this.state.value}
                        placeholder="Search images and photos"
                        onChange = {this.handleChange}
                        />

                    </Form>

            </HeaderSearchbar>
        )
    }
}