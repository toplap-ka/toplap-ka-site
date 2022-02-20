$(document).ready(function() {

    // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    let shuffle = function(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    
    // randomly shuffle links to Karlsruhe live coders
    let livecoders = [];
    $("#livecoders li").each(function(i, li) {
        livecoders.push(li);
    });

    shuffle(livecoders);

    $("#livecoders").empty();

    $.each(livecoders, function(i, li) {$("#livecoders").append(li)});

});