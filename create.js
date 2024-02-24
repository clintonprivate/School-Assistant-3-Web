// Automatically fill in known information
const urlParams = new URLSearchParams(window.location.search);
const subject = getParameterByName('subject');
const type = getParameterByName('type');
const date = getParameterByName('date');
document.getElementById('subject').value = subject;
document.getElementById('type').value = type;
document.getElementById('date').value = date;

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
