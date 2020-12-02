import JSToYaml from 'convert-yaml';

// La variable VERSION la inyecta webpack al hacer la compilacion
// Exportamos la version del componente para controlar que version esta usando el cliente en caso de que renombren
// El fichero de distribucion
// eslint-disable-next-line no-undef
const version = VERSION;

function start(myObjectToConvert) {
	JSToYaml.spacing = ' '.repeat(4);
	JSToYaml.spacingStart = '';
	const yamlString = JSToYaml.stringify(myObjectToConvert).value;
	downloadString(yamlString, "text/yaml", "object.yml");
}

function downloadString(text, fileType, fileName) {
	const blob = new Blob([text], { type: fileType });

	const a = document.createElement('a');
	a.download = fileName;
	a.href = URL.createObjectURL(blob);
	a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
	a.style.display = "none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
}

export default start;
export {start, version};
