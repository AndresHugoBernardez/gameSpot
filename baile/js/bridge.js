
function cargarCSS(url) {
    if (document.querySelector(`link[href="${url}"]`)) return Promise.resolve(true);
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.onload = () => resolve(true);
        link.onerror = () => reject(new Error(`CSS falló: ${url}`));
        document.head.appendChild(link);
    });
}

function cargarHTML(url, tag) {
    return fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`HTML ${res.status}`);
            return res.text();
        })
        .then(html => {
            document.getElementById(tag).innerHTML = html;
            return true;
        })
        .catch(err => {
            console.error('Error HTML:', err);
            return false;
        });
}

function cargarJS(url) {
    if (document.querySelector(`script[src="${url}"]`)) return Promise.resolve(true);
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error(`JS falló: ${url}`));
        document.head.appendChild(script);
    });
}

async function abrirClase(nombreClase, tag) {
    try {
        const modulo = await import(`../${nombreClase}/personaje.js`);
        const Clase = modulo.default;
        if (typeof Clase !== 'function') throw new Error("No export default");
        return new Clase(tag);
    } catch (err) {
        console.error("Error import clase:", err);
        throw err;
    }
}

async function cargarPersonaje(packageName, tag) {
    try {
        await cargarCSS(`./${packageName}/personaje.css`);
        await cargarHTML(`./${packageName}/personaje.html`, tag);
        await cargarJS(`./${packageName}/const.js`);

        // Ahora que el JS está cargado, importamos la clase
        const instancia = await abrirClase(packageName, tag);
        return instancia;
    } catch (err) {
        console.error("Fallo al cargar paquete:", packageName, err);
        return null;
    }
}