import * as React from "react";
import { useHistory } from "react-router";
import GoogleMapReact from "google-map-react";

export const Map = () => {

    const center = {
        lat: 49.0090167,
        lng: 8.4008933,
    };

    const zoom = 14;

    const key = "AIzaSyD7IcCNhmgxMgVgZUfVUwJM1oo49qgDpWs";

    return (
        <div style={{ height: '80vh', width: '100%'  }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={49.0135205}
            lng={8.3943702}
          />
        </GoogleMapReact>
      </div>
    );
};

const Marker = ({ }: { lat: number, lng: number}) => {
  const history = useHistory();

  return (
    <img src="./img/marker.svg" alt="" onClick={() => history.push("/show-list")} />  
  );
};