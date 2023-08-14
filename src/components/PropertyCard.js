import bathIcon from '../assets/bath-icon.png'
import bedIcon from '../assets/bed-icon.png'
import toiletIcon from '../assets/toilet-icon.png'

const PropertyCard = (props) => {
    return ( 
        <div className="property-item" key={props.id}>
            <img src={`./images/${props.imageUrl1}`} alt="" className="property-image" />
            <div className="property-content">
                <div className="property-type">{props.type}</div>
                <div className="property-location">{props.location}</div>
                <div className="property-price">&#8358;{props.price}</div>
                {/* <div className="property-title">{props.title}</div> */}
                <div className="property-icon-group">
                    <div className="property-bed">
                    <img src={bedIcon} alt="" className='property-icon' /> 
                    - {props.bed} 
                    </div>
                    <div className="property-bath">
                    <img src={bathIcon} alt="" className='property-icon' />
                    - {props.bath}
                    </div>
                    <div className="property-toilet">
                    <img src={toiletIcon} alt="" className='property-icon' /> 
                    - {props.toilet}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PropertyCard;