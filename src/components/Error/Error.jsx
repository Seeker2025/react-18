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