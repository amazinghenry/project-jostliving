import Header from "./Header";
import propertyData from "../data/index.js"
import PropertyCard from "./PropertyCard";

const Home = () => {
    
    return ( 
        <div className="home-wrapper" >
            <Header />
            <div className="container listing-container">
                <h2 className="section-title">Latest Short Let Listing</h2>
                <div className="property-group">
               { propertyData.map((property)=>(
                <PropertyCard 
                id = {property.id}
                images = {property.imageUrl}
                type = {property.type}
                title = {property.title}
                price = {property.price}
                location = {property.location}
                bed = {property.bed}
                bath = {property.bath}
                toilet = {property.toilet}
                description = {property.description}
                />
                ))}
                </div>
            </div>
        </div>
     );
}

export default Home;