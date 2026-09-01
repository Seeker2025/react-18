import React, { Component } from "react";
import { createPortal } from 'react-dom';

import { Overlay, ModalWin, ButtonClose } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    state = {

    };

    componentDidMount(){
        window.addEventListener('keydown', this.toHandleEsc)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.toHandleEsc)
    }

    toHandleEsc = e => {
        if(e.key === 'Escape') this.props.toClose();
    }

    render(){

        const { large, tags, toClose } = this.props

        return createPortal(
            <Overlay>
                <ModalWin >
                    <img src={large} alt={tags} />
                </ModalWin>
                <ButtonClose onClick = {toClose}></ButtonClose>
            </Overlay>,
            modalRoot
        )
    }
}