import { connect } from "react-redux";
import Search from "./Search";

function mapStateToProps(state) {

    return {
        cWeather: state.search.cWeather
    };
}
export default connect(mapStateToProps)(Search);