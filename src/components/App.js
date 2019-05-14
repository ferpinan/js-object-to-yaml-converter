import PropTypes from "prop-types";
import React from "react";
import {Fragment} from "react";
import {I18n} from "react-i18next";
import i18n from "../i18n";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";


class App extends React.Component {
    static propTypes = {
        lang: PropTypes.string.isRequired
    };

    componentDidMount() {
        i18n.changeLanguage(this.props.lang);
    }

    render() {
        return (
            <I18n ns="i18n">{() => {
                return (
                    <Fragment>
                        <WelcomeMessage text={i18n.t("welcome.message")} />
                    </Fragment>
                );
            }}
            </I18n>
        );
    }
}

export default App;
