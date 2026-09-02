import { ItemLi } from "./ImageGalleryItem.styled";  
import PropTypes from "prop-types";

export const ImageGalleryItem = (props) =>{

return (
        <ItemLi onClick={props.onClick}>
        
                <img src={props.imgUrl} alt={props.tag} />
                
        </ItemLi>
    );
}

ImageGalleryItem.propTypes = {
        onClick: PropTypes.func.isRequired,
        imgUrl:  PropTypes.string.isRequired,
        tag:     PropTypes.string.isRequired
}
