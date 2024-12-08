document.getElementById('donate-now-btn')
    .addEventListener('click', function(){
        alert('Congratulations! Money has been submitted successfully.');

const addMoney =getInputValueById('input-add-money');
const total = getTextValueById('total-balance');

const balance = getTextValueById('donate-balance');
if(isNaN(addMoney)){
    alert('invalid Donation amount');
    return;
}
if(addMoney < 0){
    alert('Your Donate is invalid');
    return;
}
const updateBalance = total - addMoney;
document.getElementById('total-balance').innerText = updateBalance;
const newBalance = balance + addMoney;
document.getElementById('donate-balance').innerText = newBalance;

// add to transaction history
const div = document.createElement('div');
        div.classList.add('text-3xl');
        div.innerHTML= `
        <p> ${addMoney} Taka is Donate for Flood at Noakhali, Bangladesh</p>
        <p class="text-gray-500"> ${new Date().toString()} </p>
        `;
        document.getElementById('transaction-container').appendChild(div);

})



// history tab functionality.
const historyButton = document.getElementById('history-btn');
const donateButton = document.getElementById('donate-btn');
historyButton.addEventListener('click', function(){
    historyButton.classList.add(
        "text-white",
        "bg-primary"
    );
    donateButton.classList.remove(
        "text-white",
        "bg-primary"
    );
})

donateButton.addEventListener('click', function(){
    donateButton.classList.add(
        "text-white",
        "bg-primary"
    );
    historyButton.classList.remove(
         "text-white",
        "bg-primary"
    );
})