import React, { Component } from "react";
import { 
            HeaderSearchbar,
            Form,
            ButtonForm,
            InputForm

        } from "./Searchbar.styled";
import PropTypes from "prop-types";

export class Searchbar extends Component {
    state = {
        value: '',
    };

    handleChange = (e) => {
    this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
    e.preventDefault();

    const value = this.state.value.trim();

    if (!value) {
        return;
    }
        this.props.addToDo(value)
        this.setState({ value: '' })
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

Searchbar.propTypes = {
    addToDo: PropTypes.func.isRequired,
}
