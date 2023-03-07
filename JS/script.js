/* "HACKING" Code adapted from: https://www.youtube.com/watch?v=W5oawMJaXbU */

/* Definition Set of Signs for the Random Display */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

/* MOUSEOVER Effect for the URL */
document.getElementById("myURL").onmouseover = event => { /* Anonymous function triggered by an event on the DOM */
    let iterations = 0; /* Reset counter */

    const interval = setInterval(() => { /* runs the function automatically every ... GOTO 22 */
        event.target.innerText = event.target.innerText.split("") /* event.target identifies the object corresponding to the event; split the word into single letters */
        .map((letter, index) => { /* count through the word, letter by letter */
            if(index < iterations) { /* if counter passed position ... */
                return event.target.dataset.value[index]; /* ... replace with original letter */
            }
            return letters[Math.floor(Math.random() * 62)] /* ... else return the letter from the definition set corresponding to a random number, rounded and from 0 to 61*/
        })
        .join(""); /* join the single letters back together to a word */

        if(iterations >= event.target.dataset.value.length) clearInterval(interval); /* Stop after word length is through */
        iterations += 1 / 2; /* repeat random letter twice before locking in the correct letter */
    }, 25); /* /GOTO 10 ... every 25 ms */
}

/* MOUSEOVER Effect for the NAME */
document.getElementById("myName").onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 62)]
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) clearInterval(interval);
        iterations += 1 / 2;
    }, 25);
}

/* Redirect to other Page */
function redirect() {
    setTimeout(() => {
        window.location.replace('http://it.schoretits.com');
    }, 7000); /* wait 7000 ms */
}

/* ONLOAD Effect for the NAME */
/* "hansiburli" is an hommage to my first coding teacher Johann "Doppler-Hans" Siedler, */
/* who used to name his Turbo-PASCAL precedures "hansiburli1", "hansiburli2", etc */
function hansiburli() {
    let iterations = 0;

    const interval = setInterval(() => {
        document.getElementById("myName").innerText = document.getElementById("myName").innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return document.getElementById("myName").dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 62)]
        })
        .join("");

        if(iterations >= document.getElementById("myName").dataset.value.length) clearInterval(interval);
        iterations += 1 / 5;
    }, 25);
    redirect(); /* trigger redirect */
}

/* ONLOAD Effect for the URL, launching the ONLOAD Effect for the NAME after executed */
/* "brodiburli" is an hommage to my second coding teacher "Brodi" Brodinger */
function brodiburli() {
    let iterations = 0;

    const interval = setInterval(() => {
        document.getElementById("myURL").innerText = document.getElementById("myURL").innerText.split("")
        .map((letter, index) => {
            if(index < iterations) {
                return document.getElementById("myURL").dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 62)]
        })
        .join("");

        if(iterations >= document.getElementById("myURL").dataset.value.length) {
            clearInterval(interval);
            hansiburli(); /* trigger "HACKING" for NAME */
        } 
        iterations += 1 / 5;
    }, 25);
    
}
