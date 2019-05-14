import React from "react";
import {render} from "react-dom";
import App from "./components/App";

// La variable VERSION la inyecta webpack al hacer la compilacion
// Exportamos la version del componente para controlar que version esta usando el cliente en caso de que renombren
// El fichero de distribucion
// eslint-disable-next-line no-undef
const version = VERSION;

function start(config) {
    render(
        <App
            lang={config.lang}
        />,
        document.querySelector(`#${config.containerId}`)
    );
}

export default start;
export {start, version};
