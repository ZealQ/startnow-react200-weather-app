import React from "react";

export default class History extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sHistory } = this.props;
        return (
            
                <div className="col-5 p-1">
                    <div className="card">
                        <div className="card-header alert-info">Search History</div>
                        <div className="card-block">
                            <table className="table table-striped">
                                <tbody>
                                    {
                                        sHistory.map((historyItem, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{historyItem.city}</td>
                                                    <td>{historyItem.date}</td>
                                                    <td>{historyItem.time}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            
        )
    }
}
