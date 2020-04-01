import * as React from "react";
import { useHistory } from "react-router";
import ReactMapGL, { Marker } from "react-map-gl";


export const Map = () => {
    const history = useHistory();

    const [viewport, setViewport] = React.useState({
        width: 400,
        height: 400,
        latitude: 49.0090167,
        longitude: 8.4008933,
        zoom: 14
      });

    const RADIUS = 0.01;

    const markers = React.useMemo(() => {
        return Array.from({ length: 20 }, () => ({
            latitude: 49.0090167 + RADIUS * (-1 + Math.random() * 2),
            longitude: 8.4008933 + RADIUS * (-1 + Math.random() * 2)
        }));
    }, []);

    return (
        <div style={{ height: '80vh', width: '100%'  }}>
        <ReactMapGL {...viewport} onViewportChange={setViewport} mapboxApiAccessToken="pk.eyJ1Ijoiam9uYXN3aWxtcyIsImEiOiJhNTFmYWY1YzNmN2ViOTkxYmM0MjE3NWU1MWFmY2E3YyJ9.QF9e0dR74ojhTLnIPi48Jg" width="100%" height="100%">
          {markers.map((marker, index) => 
            <Needle latitude={marker.latitude} longitude={marker.longitude} index={"" + index} onClick={() => history.push("/show-list")} />)}
        </ReactMapGL>
      </div>
    );
};


const SIZE = 40;
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const Needle = ({ latitude, longitude, index, onClick }: { latitude: number, longitude: number, index: string, onClick(): any }) => (
    <Marker key={`marker-${index}`} longitude={longitude} latitude={latitude}>
        <svg
          height={SIZE}
          viewBox="0 0 24 24"
          style={{
            cursor: 'pointer',
            fill: 'var(--text)',
            stroke: 'none',
            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`
          }}
          onClick={onClick}
        >
            <path d={ICON} />
        </svg>
      </Marker>
);