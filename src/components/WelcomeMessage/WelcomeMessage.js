import PropTypes from "prop-types";
import React from "react";
import "./style/style.scss";

class WelcomeMessage extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        return <h1 className={"wm-title"}>{this.props.text}</h1>;
    }
}

export default WelcomeMessage;
