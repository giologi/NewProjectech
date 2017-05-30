import React, {Component} from "react";
import {connect} from "react-redux";
import * as ContentActions from "../actions/contentActions";
import ContentList from "../components/ContentList";

@connect(store => {
    return ({
        content: store.content.content,
        currCategory: store.content.currCategory,
        fetchingContent: store.content.fetchingContent,
    })
})


class Content extends Component {
    constructor(props) {
        super(props);

        this.goToDetailsPage = this.goToDetailsPage.bind(this);
    }

    componentWillMount() {
        const {categoryName} = this.props.match.params;

        this.props.dispatch(ContentActions.getContentByCategoryName(categoryName));
    }

    componentWillReceiveProps(nextProps) {
        const {categoryName} = this.props.match.params;
        const nextCategoryName = nextProps.match.params.categoryName;

        if (categoryName !== nextCategoryName) {
            this.props.dispatch(ContentActions.getContentByCategoryName(nextCategoryName));
        }
    }

    goToDetailsPage(id) {
        const {categoryName} = this.props.match.params;
        const {history} = this.props;

        Promise.resolve(this.props.dispatch(ContentActions.getDataById(id, categoryName)))
            .then(() => {
                history.push(`/${categoryName}/${id}`);
            });
    }

    static renderHomePage() {
        return (
            <div className="contentContainer">
                <h1 style={{color: 'white'}}>Home Page</h1>
            </div>
        );
    }

    render() {
        const {content, fetchingContent, currCategory} = this.props;

        if (content.length) {
            return (
                <ContentList
                    content={content}
                    currCategory={currCategory}
                    fetchingContent={fetchingContent}
                    goToDetailsPage={this.goToDetailsPage}
                />
            );
        }

        return Content.renderHomePage();
    };
}


export default Content;