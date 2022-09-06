import { useEffect } from 'react';
import { APIKey } from '../../config/googleMapsConfig';
import { getDestination } from '../../services/googleMapServices';
import { GoogleMap , useLoadScript , Marker, StreetViewPanorama} from '@react-google-maps/api'
import { NewMarker } from './newMarker';

import {GoogleApiWrapper, Map} from 'google-maps-react';

export const GoogleMapPage = () => {

    const styles = {
        width: '100vw',
        height: '100vh'
    }

    const center={lat: 42.141508290657086 , lng: 24.75113792422516}
    
    const loadingDiv = <h1>Loading Google Map...</h1>

   let m = GoogleApiWrapper({
    apiKey: 'AIzaSyAVTp4shl2qBH9EBC6AQKMhRyVsA38ITyQ'
   })(document.getElementById('map'))

    return (
        <div id="map"></div>
        // <div id='map' className="mapWrapper">
        //     {isLoaded 
        //     ? <GoogleMap 
        //     zoom={15.2}
        //     center={{lat: 42.141508290657086 , lng: 24.75113792422516}}
        //     mapContainerStyle={styles}
        //     options={options}
        //     onClick={(e) => {
        //         // console.log(e.latLng.lat() , e.latLng.lng());
        //     }}
        //     >
        //        <NewMarker lat={42.14485275847771} lng={24.75563395163793} place='"The Wing" Cocktail Bar'/>
        //        <NewMarker lat={42.14319944982221} lng={24.74891993742969} place='Bar The Post'/>
        //        <NewMarker lat={42.1447427923008} lng={24.751252251666713} place='Club Blaze Plovdiv'/>
        //        <NewMarker lat={42.14709597092954} lng={24.75419829874492} place='Absinthe House'/>
        //        <NewMarker lat={42.14072573388059} lng={24.761539592285796} place='Cocktail Bar Noris'/>
        //        <NewMarker lat={42.149344} lng={24.749092} place='ANYWAY Social Bar'/>
        //        <NewMarker lat={42.149425} lng={24.747962} place='Barber&Cat Bar'/>
        //        <NewMarker lat={42.14254051585426} lng={24.745412115831698} place='Club Fargo'/>
        //        <NewMarker lat={42.13549067871786} lng={24.749637426787697} place='Piano bar Gatsby'/>
        //     </GoogleMap>
        //     : <h1>Loading...</h1>}
        // </div>
    )

}
