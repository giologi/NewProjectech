import React, {Component} from 'react';
import Navigation from './Navigation';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {history, pathName, content} = this.props;

        return (
            <div>
                <Navigation history={history} content={content} pathName={pathName}/>
            </div>
        );
    }
}


export default Header