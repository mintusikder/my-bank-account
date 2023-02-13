// step 1: add event handler with the withdraw button

//step 2:
document.getElementById('btn-withdraw').addEventListener('click',function(){
    console.log('withdeow')
    const withdrawField = document.getElementById('Withdraw-field');
    const newwithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newwithdrawAmountString)
    console.log(newWithdrawAmount)

    withdrawField.value=''

    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a valid number')
        return
    }

    const withdrawTotalElement = document.getElementById('Withdraw-total');
    const previousTotalAmountStirng = withdrawTotalElement.innerText;
    const previousTotalAmount =parseFloat(previousTotalAmountStirng);
    console.log(previousTotalAmount)


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Deposit Money');
            return;
    }
    
    const correntWithdrawTotal = previousTotalAmount + newWithdrawAmount;
    withdrawTotalElement.innerText =correntWithdrawTotal;


    const newTotalBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText =newTotalBalance


    


})