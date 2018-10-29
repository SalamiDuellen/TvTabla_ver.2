$(function () {

    $('#contactusform').submit(function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var comment = $("#comment").val();

        $(".error").remove();

        if (name.length < 1) {
            $("#name").before('<span class="error">Obligatiriskt fält</span>');
        }
        if (comment.length < 1) {
            $("#comment").before('<span class="error">Obligatiriskt fält</span>');
        }
        if (email.length < 1) {
            $("#email").before('<span class="error">Obligatiriskt fält</span>');
        } else {
            var regEx = /\S+@\S+\.\S+/;
            var validEmail = regEx.test(email);
            if (!validEmail) {
                $("#email").before('<span class="error">Ogiltlig e-mail adress</span>');
            }
        }
    });
});
// För sök med knapp
function getProgramInfo() {
    var test = document.forms["topnavsearch"]["search"].value;
    var testLowCase = test.toLowerCase();

    var list = document.getElementById("tvchannel");
    var items = list.getElementsByTagName("li");
    var ulListAdd = document.getElementById("prog-info-ul");

    // //Printar alla li i en ul.
    for (var i = 0; i < items.length; i++) {
        var x = items[i].innerText;
        var xLowCAse = x.toLowerCase();

        if (xLowCAse.includes(testLowCase)) {

            // document.write(x);
            var li = document.createElement('li');
            ulListAdd.appendChild(li);
            li.innerHTML = li.innerHTML + x;
        }

    };
}
// För autocomplete
function createArray() {
    var test = document.forms["topnavsearch"]["search"].value;
    var testLowCase = test.toLowerCase();
    var list = document.getElementById("tvchannel");
    var items = list.getElementsByTagName("li");
    var arr = new Array;

    for (var i = 0; i < items.length; i++) {
        var x = items[i].innerText;
        if (x.substr(6, test.length).toUpperCase() == test.toUpperCase()) {
            arr.push(x);
        }
    }
    return arr;
}
$(function () {
    var arr = createArray();
    $("#inputautocomplete").autocomplete({ source: arr });
});

