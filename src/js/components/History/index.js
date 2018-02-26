import { connect } from "react-redux";
import History from "./History";

function mapStateToProps(state) {

    return {
        sHistory: state.search.sHistory

    };
}
export default connect(mapStateToProps)(History);