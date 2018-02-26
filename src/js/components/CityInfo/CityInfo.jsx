import React from "react";

export default class CityInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cWeather } = this.props
        var icon;
        var url;
        if(cWeather.list.length>0){
            icon = cWeather.list[0].weather[0].icon;
            url = `http://openweathermap.org/img/w/${icon}.png`;
        }
        if (cWeather === "") {
            return (
                
                    <div className="col sm">
                        <div className="card border border-info">
                            <div className="card-header alert-primary">City Information
                        </div>
                            <div className="card-body cityInfoCover">
                            </div>
                        </div>
                    </div>
                
            )
        }
        return (
            
                <div className="col-sm-7">
                    <div className="card border border-info">
                        <div className="card-header alert-primary City Information">City Information
                        </div>
                        <div className="card-body">
                            <div className="container">

                                <div className= " text-center weatherDisplay">

                                     {url && <img src={url} alt="?"/>}
                                    <h1 className="display-7 text-center">{cWeather.name}</h1>
                                    <p className="lead text-center font-weight-bold">lat/lon:{cWeather.lat},{cWeather.lon}</p>

                                    <div className="card-Block">
                                        <div className="row">
                                            <div className="col-4 my-2 text-center">Temperature(F)
                                        <p className="text-success">{cWeather.temperature}F</p>
                                            </div>
                                            <div className="col-4 my-2 text-center">Pressure
                                        <p className="text-success">{cWeather.pressure}</p>
                                            </div>
                                            <div className="col-4 my-2 text-center">Humidity
                                        <p className="text-success">{cWeather.humidity}%</p>
                                            </div>
                                            <div className="col-4 my-2 text-center">Lowest Temp(F)
                                        <p className="text-success">{cWeather.lowTemp}F</p>
                                            </div>
                                            <div className="col-4 my-2 text-center">Highest Temp(F)
                                        <p className="text-success">{cWeather.highTemp}F</p>
                                            </div>
                                            <div className="col-4 my-2 text-center">Wind Speed
                                        <p className="text-success">{cWeather.windSpeed}mph</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}