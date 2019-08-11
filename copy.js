let btn = document.getElementById('copy');

btn.addEventListener('click', copy);

function copy() {
    let div = document.getElementById('div');
    let text = div.innerText;
    let textArea = document.createElement('textarea');
    textArea.width = "1px";
    textArea.height = "1px";
    textArea.background = "transparents";
    textArea.value = text;
    document.body.append(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}