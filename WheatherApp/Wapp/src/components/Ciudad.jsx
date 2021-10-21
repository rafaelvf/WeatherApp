import React from "react";
import {Link} from "react-router-dom";

export default function Ciudad({city}) {
    if(city===null){
        return (<div>Errorrrrrrrrrrrrrrrrrrrrrrrrrr <Link to ="/">Home</Link></div>)
    }
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}