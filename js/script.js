$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    const fullnameInput = $("input#fullname").val();
    const addressInput = $("input#address").val();
    const emailInput = $("input#email").val();
    const carInput = $("select#car").val();
    const priceInput = $("select#price").val();
    const paymentInput = $("select#payment").val();
    const dateInput = $("input#date").val();


    $(".fullname").text(fullnameInput);
    $(".address").text(addressInput);
    $(".email").text(emailInput);
    $(".car").text(carInput);
    $(".price").text(priceInput);
    $(".date").text(dateInput);
    $(".payment").text(paymentInput);
  
    $("#receipt").show();
    $(".container").hide();
  });
});