import { ButtonBlue } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ clickTo }) =>{
    return (

         <ButtonBlue
         onClick = { clickTo }
         >Load More
         </ButtonBlue>
        
    )
 }

 Button.propTypes = {
     clickTo: PropTypes.func.isRequired
 }