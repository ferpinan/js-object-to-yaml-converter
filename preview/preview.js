import * as JsObjectToYaml from "../src/index";

const config = {
	key1: "value 1",
    key2: {
		key21: "value 2.1",
		key22: "value 2.2.",
		key23: {
			key231: ["value 2.3.1 1", "value 2.3.1 2", "value 2.3.1 3"]
		}
	}
};

JsObjectToYaml.start(config);
