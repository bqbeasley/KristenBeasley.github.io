var globalTick = 0;
var tickInterval = 100;
const story = new Map();

story.set(1, function () {
    document.getElementById("light").classList.add("risen");
    return true;                     // one-shot: fires, transition takes over
});
story.set(50, speak("Let there be light."));
story.set(70, function() {
	document.getElementById("light").classList.replace("risen","expand");
	return true;
});

var intervalId = window.setInterval(function () {
    globalTick += tickInterval;
    var act = story.get(storyIndex());
    if (!act) return;
    if (!act()) {
        var next = storyIndex() + 1;
        var existing = story.get(next);
        story.set(next, !existing ? act : function () {
            var a = act();        // run both; call each before &&
            var b = existing();   // so neither gets short-circuited away
            return a && b;
        });
    }
}, tickInterval);

function storyIndex() {
    return globalTick / tickInterval;
}

function speak(text) {
    var i = 0;
    return function () {
        var elem = document.getElementById("word");
        elem.textContent += text.charAt(i);   // SVG <text> wants textContent, not innerHTML
        i++;
        return i >= text.length;
    };
}
