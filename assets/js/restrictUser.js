
$(document).ready(function () {
    $(document).bind("contextmenu", function (e) {
        return false;
    });
});

$(document).keydown(function (e) {
    if (e.which === 123) {
        // alert('Not allowed');
        return false;
    }
});

document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 73 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        // alert('Not allowed');
        return false;
    } else {
        return true;
    }
};