import {assert} from "chai";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import WelcomeMessage from "../WelcomeMessage";

configure({adapter: new Adapter()});

describe("WelcomeMessage", () => {
    let component = null;
    const options = {
        text: "file"
    };

    beforeEach(() => {
        component = mount(<WelcomeMessage {...options} />);
    });

    it("renders WelcomeMessage", () => {
        assert.strictEqual(1, component.find("h1").length);
    });

    it("validate text", () => {
        assert.strictEqual(options.text, component.find("h1").text());
    });
});
