function sidebar_button_highlight() {
    if (window.location.href === "https://geonerd-linggeek.github.io/") {
        document.getElementById("home").style.backgroundColor = "rgb(90,101,234)";
        document.getElementById("home").style.borderRadius = "37%";
        document.getElementById("home").style.transition = "ease-in-out 0.2s";
    } else if (window.location.href === "https://geonerd-linggeek.github.io/games/") {
        document.getElementById("games").style.backgroundColor = "rgb(90,101,234)";
        document.getElementById("games").style.borderRadius = "37%";
        document.getElementById("games").style.transition = "ease-in-out 0.2s";
    } else if (window.location.href === "https://geonerd-linggeek.github.io/bots/") {
        document.getElementById("bots").style.backgroundColor = "rgb(90,101,234)";
        document.getElementById("bots").style.borderRadius = "37%";
        document.getElementById("bots").style.transition = "ease-in-out 0.2s";
    } else if (window.location.href === "https://geonerd-linggeek.github.io/about/") {
        document.getElementById("about").style.backgroundColor = "rgb(90,101,234)";
        document.getElementById("about").style.borderRadius = "37%";
        document.getElementById("about").style.transition = "ease-in-out 0.2s";
    } else if (window.location.href === "https://geonerd-linggeek.github.io/channels/") {
        document.getElementById("channels").style.backgroundColor = "rgb(90,101,234)";
        document.getElementById("channels").style.borderRadius = "37%";
        document.getElementById("channels").style.transition = "ease-in-out 0.2s";
    } else if (window.location.href === "https://geonerd-linggeek.github.io/languages/") {
        document.getElementById("languages").style.backgroundColor = "rgb(90,101,234)";
        document.getElementById("languages").style.borderRadius = "37%";
        document.getElementById("languages").style.transition = "ease-in-out 0.2s";
    }
}

setInterval(sidebar_button_highlight, 100)
