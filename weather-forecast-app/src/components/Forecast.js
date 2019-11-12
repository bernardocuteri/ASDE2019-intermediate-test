import React from 'react';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import OpacityIcon from '@material-ui/icons/Opacity';

export default function Forecast(props) {



    if(props.weather.length === 3){
        return(
            <div>
               <ul>
                    {props.weather.map(w => {
                        if(w.weather === "rainy"){
                            return <li>{w.temperature} °C <OpacityIcon/></li>
                        }else if(w.weather === "sunny"){
                            return <li>{w.temperature} °C <WbSunnyIcon/></li>
                        }else if(w.weather === "cloudy"){
                            return <li>{w.temperature} °C <WbCloudyIcon/></li>
                        }else return {}
                    })}
               </ul>
            </div>
        );
    }else return(<div></div>);
}