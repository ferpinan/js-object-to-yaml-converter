import Adapter from "enzyme-adapter-react-16";
import {assert} from "chai";
import {configure} from "enzyme";
import i18n from "../";

configure({"adapter": new Adapter()});

/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
describe("i18n", () => {

    describe("i18n initialization:", () => {

        it("checks i18n format function with 'intlNumber' format", () => {
            const value = 10.5;
            assert.equal(i18n.format(value, "intlNumber", "en-US"), "10.5", "Expected to have same value")
        });

		it("checks i18n format function without format", () => {
			const value = 10.5;
			assert.equal(i18n.format(value, null, "en-US"), "10.5", "Expected to have same value")
		});
    });

});
