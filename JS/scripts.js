Timer(Help, 50000);
Timer(IntroSwitch, 5000);

function Timer(f, t){
    setTimeout(f, t);
};

var count = 0;
$(function buttonclick() {
    $(".aanmelden_button").click(function() {
        window.open("aanmelden.html", "_self");
    });
});

$(function buttonclick() {
    $(".begrepen_button").click(function() {
        window.open("home.html", "_self");
    });
});

$(function buttonclick() {
    $(".homework").click(function() {
        window.open("home.html", "_self");
    });
});

$(function buttonclick() {
    $(".progress").click(function() {
        window.open("progressie.html", "_self");
    });
});

$(function buttonclick() {
    $(".settings").click(function() {
        window.open("instellingen.html", "_self");
    });
});

$(function buttonclick() {
    $(".header").click(function() {
        window.open("index.html", "_self");
    });
});

function IntroSwitch(){
    var txt = "";
    if (count == 0) {
        txt = "<br>Klik op \"begrepen\" om verder te gaan.";
        count++; }
    else {
        txt = "Even voorstellen, ik ben Studybod en ik ben je hulp<br><br>en toeverlaat bij het maken van je huiswerk.";
        count--; }
    document.getElementById("intro").innerHTML = txt;
    Timer(IntroSwitch, 5000);
};

function Help(){
    var txt;
    if (confirm("Het lijkt erop dat je er niet uit kunt komen, klik op OK voor assistentie.")){
        txt = "Op dit moment is Studybod erg druk bezig, probeer het later opnieuw."; }
    else { txt = "Veel succes!"; }
    window.alert(txt);
}