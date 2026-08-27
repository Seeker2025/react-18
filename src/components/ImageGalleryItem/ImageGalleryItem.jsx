import { ItemLi } from "./ImageGalleryItem.styled";  

export const ImageGalleryItem = (props) =>{

return (
    
        <ItemLi>
            <img src={props.imgUrl} alt={props.tag} />
        </ItemLi>
        
    );
}