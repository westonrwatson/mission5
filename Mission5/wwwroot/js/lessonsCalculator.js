$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = parseFloat($("#hours").val());
        let rate = parseFloat($("#rate").val());

        if (isNaN(hours) || hours <= 0) {
            $("#error-message").removeClass("d-none");
            $("#total").val("");
        } else {
            $("#error-message").addClass("d-none");
            let total = hours * rate;
            $("#total").val("$" + total.toFixed(2));
        }
    });
});