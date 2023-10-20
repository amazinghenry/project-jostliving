import { useParams } from 'react-router-dom';
import propertyData from "../data/index.js"
import { generateSlug } from '../utils.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReservationForm from './ReservationForm.js';

const PropertyDetail = () => {

    const features = [
    'WiFi', 'Pool', '24hrs light',
    'Fully Air Conditioned',
    'Netflix', 'Amazon Prime',
    'DSTV', 'Water heater',
    'TV in slll room', 'YouTube',
    'Modern Fitted Kitchen', 'Foosball Table',
    'Washine Machine', 'Parking Lot', 'House Keeping'
]


    const { id, slug } = useParams();
    const property = propertyData.find(property => property.id === parseInt(id, 10));

    if (!property || generateSlug(property.title) !== slug) {
        return <div>Property not found</div>;
    }

    return ( 
        <section className="container-fluid property-detail">
            <div className="container property-detail-wrapper"> {/* apply grid here */}

                <div className='property-detail-content'>
                    {/* property-type */}
                    <div className='property-detail-header-group'> 
                        <div className='property-detail-header'>
                            <h2 className="property-detail-type"> {property.type}</h2>
                            <p className='property-detail-location'>{property.location}</p>
                        </div>

                        <div className='peoperty-detail-price'>
                        &#8358;{property.price}/Day
                        </div>
                    </div>

                    {/* property-image */}
                    <div className='property-detail-image'>
                    {property.imageUrl.map((images, index) => (
                    <OwlCarousel
                    items={ 1}
                    className='owl-theme'
                    loop margin={10}
                    autoplay ={true}
                    dots = {false}
                    nav = {false}>
                        {Object.values(images).map((imageUrl, imgIndex) => (
                            <div key={imgIndex} className="item img-fluid">
                            <img src={`/images/${imageUrl}`}
                            alt={`${index}-${imgIndex}`} />
                        </div>
                        ))}
                    </OwlCarousel>
                    ))}
                </div>

                {/* property-title */}
                <div className='prop-detail-group'>
                    <h3 className="prop-detail-title">Property title</h3>
                    <p className='prop-detail-text'> {property.title}</p>
                </div>

                {/* property-featured */}
                <div className='prop-detail-group'>
                    <h3 className='prop-detail-title'> Features</h3>
                    <ul className='feature-group'>
                        {features.map((feature)=> (
                            <li key={feature} className='feature-item'>{feature}</li>
                        ))}
                    </ul>
                </div>

                {/* property-description */}
                <div className='prop-detail-group'>
                    <h3 className='prop-detail-title'> Description</h3>
                    <p className='prop-detail-text'> {property.description} </p>
                </div>
                </div>

                <aside className='property-detail-sidebar'>
                    <h2 className='property-detail-sidebar-title'>Reserve this apartment</h2>
                    <ReservationForm property={property} />
                </aside> 

            </div>
        </section>
     );
}
 
export default PropertyDetail;