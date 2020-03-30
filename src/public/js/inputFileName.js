// Put image name in input file
const imageGame = document.getElementById('imageGame')
imageGame.addEventListener("change", readInputName);
function readInputName() {
    let fullPath = imageGame.value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        let filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        document.getElementById('fileName').innerHTML = filename
    }
}