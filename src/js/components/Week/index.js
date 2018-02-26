import { connect } from "react-redux";
import Week from "./Week";

function mapStateToProps(state) {

    return {
        cWeather: state.search.cWeather,
        sHistory: state.search.sHistory
    };
}
export default connect(mapStateToProps)(Week);