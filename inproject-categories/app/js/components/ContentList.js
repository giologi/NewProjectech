import React, {Component} from "react";
import Loader from "./Loader";

class ContentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {fetchingContent} = this.props;

        if (fetchingContent) {
            return (<Loader/>)
        }

        return this.renderContent();
    }

    renderContent() {
        const {content, currCategory, goToDetailsPage} = this.props;
        console.log("CURR CATEGORY 2: ", currCategory);
        let data = currCategory[0]
            ? currCategory[0].items.map((item, i) => {
                return (
                    <div key={i} className="col-md-3 col-sm-12 col-xs-12 mainBlock"
                         onClick={() => goToDetailsPage(item.id)}>
                        <div>
                            <img src="../../scss/images/no_image.png" alt=""/>
                        </div>
                        <div>
                            <h4 className="verticalAlign">{item.value}</h4>
                        </div>
                    </div>
                );
            })
            : [];

        return (
            <div className="contentContainer">
                {data}
            </div>
        );
    }
}


export default ContentList