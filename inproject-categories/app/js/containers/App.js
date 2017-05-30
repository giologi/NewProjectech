import React, {Component} from "react";
import {fetchContent} from '../actions/contentActions';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import Header from "../components/Header";
import Content from "./Content";
import DetailsPage from "./DetailsPage";


@connect(store => {
    return {
        content: store.content.content,
        currCategory: store.content.currCategory
    };
}, dispatch => {
    return {
        onLoad: () => {
            dispatch(fetchContent());
        }
    };
})

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {history, location, content, currCategory} = this.props;
        return (
            <div className="container-fluid">
                <Header
                    history={history}
                    content={content}
                    pathName={location.pathname}/>

                <Route path='/:categoryName?' exact component={Content}/>
                <Route path='/:categoryName/:id' exact component={DetailsPage}/>
            </div>
        );
    }

    componentDidMount() {
        console.log("BEFORE FETCHING CONTENT");
        this.props.onLoad();
    }
}


export default App