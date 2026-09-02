import React, { Component } from "react";
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

import { Overlay, ModalWin, ButtonClose } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    

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
            <Overlay onClick = {toClose}>
                <ModalWin onClick={e => e.stopPropagation()}>
                    <img src={large} alt={tags} />

                    <ButtonClose onClick = {toClose}></ButtonClose>
                </ModalWin>
                
            </Overlay>,
            modalRoot
        )
    }
}

Modal.propTypes = {
    toClose: PropTypes.func.isRequired,
    tags:    PropTypes.string.isRequired,
    large:   PropTypes.string.isRequired
}