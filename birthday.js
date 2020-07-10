// Get button element from the DOM
let startParty = document.getElementById("start");

// Get party div from the DOM
let party = document.getElementById("party");

const delay = 1500;

// Main event that triggers the whole party
startParty.onclick = function () {
    party.innerHTML = "";

    let name = document.getElementById("name").value;

    if (name && name.length < 20) {
        let message_node = `
        <h1 id="msg1" class="ml6 "><span class="letters rainbow-text">Happy birthday to you!</span></h1>
        <h1 id="msg2" class="ml6"><span class="letters rainbow-text">Happy birthday, dear ${name}!</span></h1>
        `

        // Inject name dynamically in the title
        document.title = `Happy Birthday ${name}!`;

        bday_loop(message_node);
    }else {
        alert("ERROR! You need to enter a name that's below 20 characters...");
    }
};

function addToParty(string) {
    party.innerHTML += string;
}

function bday_loop(message) {
    addToParty(message);
    dance("msg1");
    setTimeout(function () {
        addToParty(message);
        dance("msg2");
    }, delay);
    
    setTimeout(function () {
        createFirework(59, 180, 8, 6, null, null, null, null, true, true);
    }, delay * 4);
    setTimeout(function () {
        $("body").fireworks();
    }, delay * 5);

    // displays a lovely birthday card
    birthdayCardImage();
}

//Letter Animations
function dance(target) {
    let textWrapper = document.querySelector("#" + target + " .letters");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
        targets: "#" + target + " .letter",
        opacity: [0, 1],
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i,
    });
}


function birthdayCardImage() {

    // clean the DOM first
    document.getElementById("party").innerHTML = "";

    // Then insert the image
    document.getElementById("party").innerHTML = '<img src="https://i.pinimg.com/736x/ee/f0/36/eef036f583e91a438896a377716ea85e.jpg" alt="birthday image">'


}
