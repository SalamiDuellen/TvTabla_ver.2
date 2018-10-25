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
