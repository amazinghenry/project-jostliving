import bathIcon from '../assets/bath-icon.png'
import bedIcon from '../assets/bed-icon.png'
import toiletIcon from '../assets/toilet-icon.png'
import { Link } from 'react-router-dom';
import { generateSlug } from '../utils';

const PropertyCard = ({ id, images, type, title, price, location, bed, bath, toilet, description }) => {
    const num = 1
    return ( 
        <Link to = {`/property/${id}/${generateSlug(title)}`} className="property-item" key={id}>
            <img src={`/images/${images[0].imageUrl1}`} alt="" className="property-image img-fluid" />
            <div className="property-content">
                <div className="property-type">{type}</div>
                <div className="property-location">{location}</div>
                <div className="property-price">&#8358;{price}</div>
                <div className="property-icon-group">
                    <div className="property-bed">
                    <img src={bedIcon} alt="" className='property-icon' /> 
                    - {bed} {(bed > num) ? "beds" : "bed" }
                    </div>
                    <div className="property-bath">
                    <img src={bathIcon} alt="" className='property-icon' />
                    - {bath} {(bath > num) ? "baths" : "bath" }
                    </div>
                    <div className="property-toilet">
                    <img src={toiletIcon} alt="" className='property-icon' /> 
                    - {toilet} {(toilet > num) ? "toilets" : "toilet" }
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default PropertyCard;