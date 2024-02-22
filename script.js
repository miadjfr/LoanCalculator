const AmountEl =document.getElementById("Amount")
const rateEl = document.getElementById("rate")
const monthEl = document.getElementById("month")
const paymentEl = document.getElementById("payment")

function update(){
    rate = (AmountEl.value * (rateEl.value *0.01  ) )/monthEl.value

    month = (AmountEl.value / monthEl.value + rate).toFixed(2)

    paymentEl.innerText = month
}




AmountEl.addEventListener("input" , update)
monthEl.addEventListener("input" , update)
