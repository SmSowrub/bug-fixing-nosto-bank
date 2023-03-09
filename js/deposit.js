// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
  /* 
    1. get previous deposit total by id

    */

   const previousDepositTotalPerseInt=  getTextElementValueById("deposit-total")
  // console.log(previousDepositTotalPerseInt);

  // calculate new deposit total
  const newDepositTotal = previousDepositTotalPerseInt + newDepositAmount;
  // console.log(newDepositTotal);
  // set deposit total value
  setTextElementValueById('deposit-total', newDepositTotal);
  // document.getElementById('deposit-total').innerText=newDepositTotal;
  

  // get previous balance by using the function
  const previousBalanceTotal = getTextElementValueById("balance-total", newDepositTotal);
  // console.log(previousBalanceTotal);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
  // document.getElementById('balance-total').innerText=newBalanceTotal;
});
