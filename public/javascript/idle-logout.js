let idleTime = 0;

async function idleLogout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}


window.onload = function () {

    // increase idleTime by 1 every minute
    var minuteCount = setInterval(logoutTimer, 60000);

    this.addEventListener('mousemove', () => {
        idleTime = 0;
    });

    this.addEventListener('keypress', () => {
        idleTime = 0;
    });

    // logout User after 30 idle minutes 
    function logoutTimer() {
        idleTime++;
        if (idleTime > 30) {
            clearInterval(minuteCount);
            
            idleLogout();
        }
    }
}

