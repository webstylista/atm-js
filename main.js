$('#deposit').click(depositMoney);
//$('#withdraw').click(withdrawMoney);
var total = 0;

function depositMoney(deposit) {
  total = total + deposit;
  $('#balance').text(total);
}

function takeUserInput() {
  var userInput = +$('#amount').val();
  depositMoney(userInput);
}
