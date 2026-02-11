
async function fetchData() {
    try {
        const response = await fetch('/api/hello');
        const data = await response.json();
        document.getElementById('message').textContent = data.message;
    } catch (error) {
        document.getElementById('message').textContent = 'Error: ' + error.message;
    }
}

window.onload = fetchData;