"use client";

import GoogleMapReact from "google-map-react";
import {
    useLoadScript,
    GoogleMap
} from "@react-google-maps/api";
const libs = ["places"];
const AnyReactComponent = () => (
    <Image src="/icons/map-marker.png" alt="marker" width="40" height="40" />
);
import { useRef, useState } from "react";
import Image from "next/image";

export default function Maps(){
    const mapRef = useRef(null)
    const [mapCenter, setMapCenter] = useState({ lat: -6.902203929985474, lng: 107.61863114717433 })

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_KEY,
        libraries: libs,
    });

    if (!isLoaded) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.NEXT_PUBLIC_MAPS_KEY,
                }}
                defaultCenter={mapCenter}
                defaultZoom={18}
            >
                <AnyReactComponent
                lat={Number(mapCenter.lat)}
                lng={Number(mapCenter.lng)}
                />
            </GoogleMapReact>
                
        </>
    )
}