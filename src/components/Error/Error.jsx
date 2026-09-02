import PropTypes from 'prop-types';

import {
            Card

        } from './Error.styled';

export const Error = ({ children }) =>{
    return (
        <Card>
            <div>

                <h2>Error</h2>
                <p>{ children }</p>

            </div>
        </Card>
    )
}

Error.propTypes = {
    children:PropTypes.string.isRequired
}