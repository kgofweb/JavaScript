/* DOM Elements */
const times = document.getElementById('time'),
        greeting = document.getElementById('greeting'),
        name = document.getElementById('name'),
        focus = document.getElementById('focus');

/* Show Am Pm */
const showAmPm = true;

/* Show Time */
function showTime ()  {
        let today = new Date();
                hours = today.getHours(),
                min = today.getMinutes(),
                sec = today.getSeconds();

        /* Set AM or PM */
        const amPm = hours >= 12 ? 'PM'  :  'AM'

        /* 12h Format */
        hour = hours  % 12 || 12;

        /* Sortie de l'heure */
        times.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''} `

        setTimeout(showTime, 1000);
}

/* Add Zero */
function addZero (number) {
        return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

/* Set background and Greeting */
function setBgGreet () {
        let today = new Date(),
                hour = today.getHours();

        if (hour < 12) {
                /* Morning */
                document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
                document.body.style.backgroundPosition = "center";
                greeting.textContent = 'Good Morning';
        }
        else if (hour < 18) {
                /* Afternoon */
                document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
                document.body.style.backgroundPosition = "center";
                document.body.style.color = "#FFF";
                greeting.textContent = 'Good Afternoon';
        }
        else {
                /* Evening */
                document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
                document.body.style.backgroundPosition = "center";
                greeting.textContent = 'Good Evening';
                document.body.style.color = 'white';
        }

}

/* LocalStorage Set name and Get Name */

/* Get Name */
function getName () {
        if (localStorage.getItem("name") === null) {
                name.textContent = '[Enter Name]';
        }
        else {
                name.textContent = localStorage.getItem("name");
        }
}

/* Set Name to save items */
function setName (e) {
        if (e.type === 'keypress') {
                /* Make sur to press Enter to save Items */
                if (e.which == 13 || e.keyCode == 13) {
                        localStorage.setItem('name', e.target.innerText);
                        // name.blur();
                        e.preventDefault();
                }
        }
        else {
                localStorage.setItem('name', e.target.innerText);
        }
}

/* Get Focus */
function getFocus () {
        if (localStorage.getItem("focus") === null) {
                focus.textContent = '[Enter focus]';
        }
        else {
                focus.textContent = localStorage.getItem("focus");
        }
}

function setFocus (e) {
        if (e.type === 'keypress') {
                /* Make sur to press Enter to save Items */
                if (e.which == 13 || e.keyCode == 13) {
                        localStorage.setItem('focus', e.target.innerText);
                        focus.blur();
                }
        }
        else {
                localStorage.setItem('focus', e.target.innerText);
        }
}

// Event Listner
name.addEventListener('keypress', setName); 
name.addEventListener('blur', setName); 
focus.addEventListener('keypress', setFocus); 
focus.addEventListener('blur', setFocus); 


/* Call All Function */
showTime();
setBgGreet();
getName();
getFocus();