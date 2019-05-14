import i18n_en_US from "./en-US/i18n.json";
import i18n_en from "./en/i18n.json";
import i18n_es_ES from "./es-ES/i18n.json";
import i18next from "i18next";
import {reactI18nextModule} from "react-i18next";

const INTL_NUMBER = "intlNumber";


const i18nextClient = i18next.createInstance();
i18nextClient.
    use(reactI18nextModule).
    init({
        "interpolation": {
            "escapeValue": false,
            "format": (value, format, lng) => {
                if(format === INTL_NUMBER){
                    return Intl.NumberFormat(lng).format(value);
                }
                return value;
            }
        },
        "lng": "en-US",
        "fallbackLng": "es",
        "resources": {
            "en": {
                "translation": i18n_en
            },
            "en-US": {
                "translation": i18n_en_US
            },
            "es": {
                "translation": i18n_es_ES
            },
            "es-ES": {
                "translation": i18n_es_ES
            }
        }
    });
export default i18nextClient;
export {INTL_NUMBER};
