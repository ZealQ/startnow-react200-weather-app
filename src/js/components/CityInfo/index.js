import { connect } from "react-redux";
import CityInfo from "./CityInfo";

function mapStateToProps(state) {
    return {
        cWeather: state.search.cWeather

    };
}
export default connect(mapStateToProps)(CityInfo);