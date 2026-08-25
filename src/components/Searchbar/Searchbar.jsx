import React, { Component } from "react";
import { 
            HeaderSearchbar,
            Form,
            ButtonForm,
            InputForm

        } from "./Searchbar.styled";

export class Searchbar extends Component {
    state = {

    };

    render(){
        return (
            <HeaderSearchbar>

                    <Form>

                        <ButtonForm type="submit">
                            <span class="button-label"></span>
                        </ButtonForm>

                        <InputForm
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                        />

                    </Form>

            </HeaderSearchbar>
        )
    }
}