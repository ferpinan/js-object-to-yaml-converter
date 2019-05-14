import PropTypes from "prop-types";
import React from "react";
import {Fragment} from "react";
import {I18n} from "react-i18next";
import i18n from "../i18n";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import {Component01, Component02} from "@ikusi/react-component-boilerplate";
import chtuluImage from "../resources/chtulu.jpg";


class App extends React.Component {
    static propTypes = {
        lang: PropTypes.string.isRequired
    };

    state = {
        buttonClick: false
    };

    componentDidMount() {
        i18n.changeLanguage(this.props.lang);
    }

    onClickComponent01 = () => {
        this.setState({buttonClick: true})
    };

    render() {
        return (
            <I18n ns="i18n">{() => {
                return (
                    <Fragment>
                        <WelcomeMessage text={i18n.t("welcome.message")}/>
                        <h2>{i18n.t("react.component.boilerplate.title")}</h2>
                        <Component01
                            name={i18n.t(this.state.buttonClick ?
                                "react.component.boilerplate.buttonAfterClick"
                                :
                                "react.component.boilerplate.button"
                            )}
                            onClickFunc={this.onClickComponent01}
                        />
                        <Component02 elements={
                            [
                                i18n.t("react.component.boilerplate.element01"),
                                i18n.t("react.component.boilerplate.element02"),
                                i18n.t("react.component.boilerplate.element03"),
                                i18n.t("react.component.boilerplate.element04")
                            ]
                        }/>
                        {
                            this.state.buttonClick ?
                                <img src={chtuluImage}/>
                                :
                                ""
                        }
                    </Fragment>
                );
            }}
            </I18n>
        );
    }
}

export default App;
