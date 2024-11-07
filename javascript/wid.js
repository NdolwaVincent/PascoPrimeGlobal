const minimumAmount = 5;

function submitWithdrawal() {
    const amount = document.getElementById("withdraw-amount").value;
    
    if (amount < minimumAmount) {
        alert(`The minimum withdrawal amount is USD ${minimumAmount}.`);
    } else {
        alert(`You have successfully requested a withdrawal of USD ${amount} from MAIN BALANCE.`);
    }
}