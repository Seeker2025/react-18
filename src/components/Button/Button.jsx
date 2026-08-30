import { ButtonBlue } from './Button.styled';

export const Button = (props) =>{
    return (

         <ButtonBlue
         onClick = {props.clickTo}
         >Load More
         </ButtonBlue>
        
    )
 }