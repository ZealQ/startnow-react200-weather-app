import React from "react";

export default class Week extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var days = [];
        const { cWeather, sHistory } = this.props
        if (cWeather === "") {

            return (
                <div>
                    <div className=" col sm">
                        <div className="card border border-warning">
                            <div className="card-header alert-warning">
                            </div>
                            <div className="card-body weekCover">
                            </div>
                        </div>
                    </div>
                </div>

            )
        }

        for (let i = 0; i < cWeather.list.length; i += 8) {
            days.push(cWeather.list[i]);
        }

        return (

            <div className="col-sm-10">
                <div className="card border border-success">
                    <div className="card-header alert-success Week">This Weeks Forcast
                        </div>
                    <div className="card-body">
                        <div className="container">
                            <div className="weatherDisplay">
                                <div className="card-Block">
                                    {days.length > 0 && days.map((day, i) => {
                                        const icon= day.weather[0].icon;
                                        const url= `http://openweathermap.org/img/w/${icon}.png`

                                        return (
                                            <div className="row" key={i}>
                                                <div className="col-4 my-2 text center">Day
                                             <p className="text-dark">{day.dt_txt}</p>
                                                </div>
                                                <div className="col-4 my-2 text center">
                                                <img src={url} alt="cWeather"/>
                                             <p className="text-dark">{day.weather[0].description}</p>
                                                </div>
                                                <div className="col-4 my-2 text center">Temperature
                                             <p className="text-dark">{day.main.temp}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}