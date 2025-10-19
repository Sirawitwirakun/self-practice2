const keyInput = document.getElementById('keyInput');
const keyLog = document.getElementById('keyLog');

keyInput.addEventListener('keydown', function(event) {
    const key = event.key;

    const p = document.createElement('p');
    
    if (key === 'Enter') {
        p.textContent = 'You pressed: Enter';
        p.style.color = 'blue';
    } else {
        p.textContent = `You pressed: ${key}`;
        p.style.color = 'black';
    }
    
    keyLog.appendChild(p);
});