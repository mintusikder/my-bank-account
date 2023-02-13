
// step 1: Add element listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    console.log('enter your deposit')
    // step 2: Get the deposit amount for the deposit input field
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText =currentDepositTotal;

    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal

    depositField.value = ''
})