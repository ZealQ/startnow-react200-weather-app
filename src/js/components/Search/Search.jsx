import React from "react";


import {
    theWeather,
    updateSearch
} from "./searchActions";


export default class Search extends React.Component {
    constructor(props) {
        super(props);


        this.handleLookUp = this.handleLookUp.bind(this);
        this.handlePreLoad = this.handlePreLoad.bind(this);
    }

    handleLookUp() {

        var place = document.getElementById("Search").value;

        const { dispatch } = this.props;
        var m = new Date().getMonth() + 1;
        var d = new Date().getDate();
        var y = new Date().getFullYear();
        var day = String(m + "/" + d + "/" + y)

        function zero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function time(i) {
            if (i > 12) {
                i = i - 12;
            }
            return i;
        }

        var hr = zero(time(new Date().getHours()));
        var min = zero(new Date().getMinutes());
        var sec = zero(new Date().getSeconds());
        var t = String(hr + ":" + min + ":" + sec)
        dispatch(theWeather(place));
        dispatch(updateSearch(place, day, t));


    }

    handlePreLoad(e) {
        var place = e.target.value;

        const { dispatch } = this.props;
        var m = new Date().getMonth() + 1;
        var d = new Date().getDate();
        var y = new Date().getFullYear();
        var day = String(m + "/" + d + "/" + y)

        function zero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function time(i) {
            if (i > 12) {
                i = i - 12;
            }
            return i;
        }

        var hr = zero(time(new Date().getHours()));
        var min = zero(new Date().getMinutes());
        var sec = zero(new Date().getSeconds());
        var t = String(hr + ":" + min + ":" + sec)
        dispatch(theWeather(place));
        dispatch(updateSearch(place, day, t));

    }


    render() {
        const { cWeather } = this.props;
        var error = cWeather.error


        return (
            <div>
                <div className="preLoaded mb-3">
                    <button type="button" className="btn btn-primary" value="San Diego" onClick={this.handlePreLoad}>San Diego</button>
                    <button type="button" className="btn btn-primary" value="New York" onClick={this.handlePreLoad}>New York</button>
                    <button type="button" className="btn btn-primary" value="District Of Columbia" onClick={this.handlePreLoad}>Washington D.C</button>
                    <button type="button" className="btn btn-primary" value="London" onClick={this.handlePreLoad}>London</button>
                    <button type="button" className="btn btn-primary" value="Tokyo" onClick={this.handlePreLoad}>Tokyo</button>
                    <div className="citySelectorDiv">
                </div>
                
                    <form>
                        <div className="form-row">
                            <div className="col">
                                <div className="input-group">
                                    <input type=" text" className="form-control" placeholder=" Enter city" aria-label="search for" name="Search" id="Search" />
                                    <span className="input-group=btn">
                                        <button className="btn btn-success" type="button" onClick={this.handleLookUp}>GO!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {error == true &&
                    <div className="card error p-1">
                        <p className="errorG">ERROR</p>
                        <p>please try again</p>
                    </div>
                }
            </div>
        );
    }
}