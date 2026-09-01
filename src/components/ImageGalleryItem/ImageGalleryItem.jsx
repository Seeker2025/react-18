import { ItemLi } from "./ImageGalleryItem.styled";  

export const ImageGalleryItem = (props) =>{

return (
        <ItemLi onClick={props.onClick}>
        
                <img src={props.imgUrl} alt={props.tag} />
                
        </ItemLi>
        
    );
}