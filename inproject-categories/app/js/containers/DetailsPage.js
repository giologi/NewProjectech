import React, {Component} from "react";
import {connect} from "react-redux";
import * as ContentActions from "../actions/contentActions";


@connect(store => {
    return ({
        currentData: store.content.currentData
    })
})

class DetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {id, categoryName} = this.props.match.params;

        this.props.dispatch(ContentActions.getDataById(id, categoryName));
    }

    render() {
        const {currentData} = this.props;

        if (currentData) {
            return (
                <div className="detailsPage">
                    <img src="../../scss/images/no_image.png" alt=""/>
                    <div className="imageBlock">
                        <h1>{currentData.value}</h1>
                    </div>
                </div>
            );
        }

        return (<div />);
    }
}


export default DetailsPage;