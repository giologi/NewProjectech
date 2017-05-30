import React, {Component} from "react";
import {Nav, NavItem} from "react-bootstrap";


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.navigation = [
            {name: 'Home', path: '/'}
        ]
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            this.navigation = [{name: 'Home', path: '/'}, ...nextProps.content.map((category) => {
                return {
                    name: category.value,
                    path: "/" + category.value
                }
            })];
        }
    }

    clickHandler(path) {
        const {history} = this.props;

        history.push(path);
    }

    render() {
        const {pathName} = this.props;

        if (this.navigation && this.navigation.length) {
            let navigation = this.navigation.map((item, i) => {
                const activeClass = pathName === item.path ? 'activeClass' : null;

                return (
                    <a
                        key={i}
                        className={'btn btn-primary ' + activeClass}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();

                            console.log("PATH: ", item.path);
                            this.clickHandler(item.path);
                        }}
                    >{item.name}</a>
                );
            });

            return (
                <div>
                    {navigation}
                </div>
            );
        } else {
            return null;
        }
    }
}


export default Navigation;