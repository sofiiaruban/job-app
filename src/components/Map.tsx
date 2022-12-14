import  {useMemo} from "react";
import { GoogleMap, useLoadScript, MarkerF, Marker } from "@react-google-maps/api";
import { mapStyles } from "./MapStyles";
import marker from "../assets/marker.svg";

function Map({locationLat, locationLong, classes} : {locationLat: number, locationLong: number, classes: string}) {
  
    const apiKey: string  = "AIzaSyC7R6RKefPNdncgoPQT_EvUJDuWKWEw7tI";
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
      });
    const center= useMemo(() => ({ lat: locationLat, lng: locationLong } ), []);

      if (!isLoaded) return <div>Loading...</div>;

      const options = {
        styles:  mapStyles,
        disableDefaultUI: true,
      }
      return (
        <GoogleMap zoom={10} center={center} mapContainerClassName={classes} options={options} >
          <MarkerF  position={center} icon={marker} />
        </GoogleMap>
      );
}
export default Map;
