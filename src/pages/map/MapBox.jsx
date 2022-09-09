// import mapboxgl, {Marker} from 'mapbox-gl'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
import { useState, useRef, useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoibmlrb2xhaWNob2xha292MjUiLCJhIjoiY2w3c3F1amtzMDVsNzNwbzB4ZnAxemRjNSJ9.ehrUZsQZizObHg1cP9K9_w'


export const MapBox = () => {
    
    let [lng,setLng] = useState(24.75113792422516)
    let [lat,setLat] = useState(42.141508290657086)
    let [zoom,setZoom] = useState(14)
    let [markers,SetMarkers] = useState([
        [42.14485275847771,24.75563395163793 , '"The Wing" Cocktail Bar'] , 
        [42.14319944982221,24.74891993742969,'Bar The Post'] , 
        [42.1447427923008,24.751252251666713,'Club Blaze Plovdiv'] , 
        [42.14709597092954,24.75419829874492,'Absinthe House'] , 
        [42.14072573388059,24.761539592285796,'Cocktail Bar Noris'] , 
        [42.149344,24.749092,'ANYWAY Social Bar'] , 
        [42.149425,24.747962,'Barber & Cat Bar'] , 
        [42.14254051585426,24.745412115831698,'Club Fargo'] , 
        [42.13549067871786,24.749637426787697,'Piano bar Gatsby'] , 
    ])
    let [dirLngLat , setDirLngLat] = useState([])

    const mapContainer = useRef(null);
    const map = useRef(null);

    // mapboxgl.workerClass = MapboxWorker;
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
            })
            .on('click' , (e) => {
                console.log(e);
            });


        });
        
    useEffect(() => {
        markers.map(m => 
        new mapboxgl.Marker()
        .setLngLat([m[1],m[0]])
        .setPopup(new mapboxgl.Popup()
        .setHTML(
        `<div>
            <h1>${m[2]}</h1>
            <button id='direction' >Get Directions</button>
        </div>
            `
        )) 
        .addTo(map.current)
        )
        
        map.current.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserHeading: true
        }));

        // map.current.addControl(new mapboxgl.({
        //     accessToken: mapboxgl.accessToken
        // }), 'top-left')
    })


    return (
    <div>
        <div ref={mapContainer} className="mapWrapper" />
    </div>
    )
}