

document.getElementById('deposit-button').addEventListener("click",function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmmountText = depositInput.value
    const newDepositAmmount = parseFloat(newDepositAmmountText)


    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositText)

const newDepoitTotal = previousDepositAmmount + newDepositAmmount
depositTotal.innerText = newDepoitTotal;




// ////////Balance Update//////////////


const balanceTotal = document.getElementById('balance-input');
const balanceTotalText = balanceTotal.innerText;
const balanceTotalAmmount = parseFloat(balanceTotalText)
const neWBalanceTotal = balanceTotalAmmount +newDepoitTotal ;
balanceTotal.innerText = neWBalanceTotal;

    depositInput.value ='';
   
});





document.getElementById('widthdraw-button').addEventListener("click",function(){
const widthdrawInput = document.getElementById('widthdraw-input');
const widthdrawInputText = widthdrawInput.value;
const widthdrawInputAmmount = parseFloat(widthdrawInputText);

// update Widthdraw//////

const widthrawTotal = document.getElementById('widthdraw-total');
 const previousWidthdrawTotalText = widthrawTotal.innerText;


 const previousWidthdrawTotalAmomunt = parseFloat(previousWidthdrawTotalText);
 const newWidthdrawTotal = previousWidthdrawTotalAmomunt + widthdrawInputAmmount

widthrawTotal.innerText = newWidthdrawTotal;




const balanceTotal = document.getElementById('balance-input');
const previousBalanceTotal = balanceTotal.innerText;
const previousBalanceTotalAmmount = parseFloat(previousBalanceTotal)
console.log(previousBalanceTotalAmmount);

const neWBalanceTotal = previousBalanceTotalAmmount - widthdrawInputAmmount;
balanceTotal.innerText = neWBalanceTotal;





 widthdrawInput.value ='';
});






