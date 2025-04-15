function verifyOrder(){
	var order = document.getElementById('inputChoice').value;

	switch (order){
	case "B":
		document.getElementById('choiceResult').innerHTML ="You ordered a burger 🍔";
		break;

	case "F":
		document.getElementById('choiceResult').innerHTML ="You ordered fries 🍟";
		break;

	case "S":
		document.getElementById('choiceResult').innerHTML ="You ordered a soda🥤";
		break;

	default:
		document.getElementById('choiceResult').innerHTML ="Your order is out of the menu 🤓"

	}
}