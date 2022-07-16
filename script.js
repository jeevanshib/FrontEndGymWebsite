var cards = [
	{
		type: "vijsa",
		transactions: [
			{
				name: "Amount added",
				type: "credit",
				category: "Funds Incoming",
				ID: "#343223",
				date: "12 July, 2016",
				amount: "+650.00"
			},
			{
				name: "Funds Added",
				type: "credit",
				category: "Payment",
				ID: "#343212",
				date: "11 July, 2016",
				amount: "+900.00"
			},
			{
				name: "Funds Added",
				type: "credit",
				category: "",
				ID: "#343566",
				date: "11 July, 2016",
				amount: "+84.96"
			},
			
			{
				name: "Funds Added",
				type: "credit",
				category: "Payment",
				ID: "#343212",
				date: "11 July, 2016",
				amount: "+390.81"
			}
		]
	},
];
var output = "";
var total = 0;
for (var n = 0; n < cards[0].transactions.length; n++) {
    output += "<div class='transaction-item " + cards[0].transactions[n].type + "'>";
    output += "<div class='transaction-item_details'>";
    output += "<h3>"+ cards[0].transactions[n].name +"</h3>";
    output += "<span class='details'>"+ cards[0].transactions[n].category + " " + cards[0].transactions[n].ID +" - " + cards[0].transactions[n].date + "</span>";
    output += "</div>";
    output += "<div class='transaction-item_amount'><span>₹  </span><p class='amount'>"+ cards[0].transactions[n].amount +"</p></div>";
    output += "</div>";
    total += parseFloat(cards[0].transactions[n].amount);
}
document.querySelector('.transactions').innerHTML = output;
document.querySelector('.total-balance').innerHTML = total.toFixed(2);



