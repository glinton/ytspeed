function fast() {
    runCmd("faster")
}
                
function slow() {
    runCmd("faster")
}

function norm() {
    runCmd("normal")
}

document.getElementById('fast').addEventListener('click', fast);
document.getElementById('slow').addEventListener('click', slow);
document.getElementById('norm').addEventListener('click', norm);
