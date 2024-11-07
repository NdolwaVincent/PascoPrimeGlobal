const conversionRate = 0.007;
function convertToUSD(){
	const kshAmount = document.getElementById("amount").value;
	const usdAmount = (kshAmount * conversionRate).toFixed(2);
	document.getElementById("usd-amount").textContent = usdAmount;
}

function submitDeposit(){
	const amount = document.getElementById("amount").value;
	const usdAmount = (kshAmount * conversionRate).toFixed(2);

	if (amount) {
		alert('Deposit KSH ${amount} (USD ${usdAmount}) via MPESA.');
	}
	else{
		alert('Please enter anamount');
	}
}