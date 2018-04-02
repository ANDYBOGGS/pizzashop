function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}
Pizza.prototype.totalPrice = function () {
  var total = 0;

  if (size === "Small") {
    total += 7;
  } else if (size === "Medium") {
    total += 9;
  } else if (size === "Large") {
    total += 12;
  }
  return total;
}


$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var size = $('#pizza-size').val();
    var toppings = $('input:checkbox[name=toppings]:checked');
    var toppingsArray = [];
    for(var i=0; i< toppings.length; i++){
      toppingsArray.push($(toppings[i]).val());
    }

    var newPizza = new Pizza(size, toppingsArray);


    $('#pizza-order').show();
    $('.order').text(newPizza.size + " " + newPizza.toppings + " " + "Pizza");
  });
});
