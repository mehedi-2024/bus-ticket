
const seatContainer = document.getElementById('seat-container');
const availableSeat = document.getElementById('available-seat');
const buyingSeat = document.getElementById('buyingSeat');
const coupneBtn = document.getElementById('coupneBtn');
const lastBtn = document.getElementById('lastBtn');
const phoneNumber = document.getElementById('phoneNumber');
const seatTable = document.getElementById('seat-table')
const totalPrice = document.getElementById('totalPrice');
const grandTotal = document.getElementById('grandTotal');
const coupneInput = document.getElementById('coupneInput');
const successBtn = document.getElementById('successBtn');
const successBox = document.getElementById('successBox');


// ticket selection 
let numberOfAvailableSeat = 40;
let selectionCount = 0;
let buyingSeatNumber = 0;
let sumOfPrice = '000';


seatContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && e.target.classList.contains('select')) {
        e.target.classList.remove('bg-green-400');
        e.target.classList.remove('text-white');
        e.target.classList.remove('select');
        removeTicketInTable(e);
        selectionCount--;
        buyingSeatNumber--;
        numberOfAvailableSeat++;
        buyingSeat.innerText = buyingSeatNumber;
        availableSeat.innerText = numberOfAvailableSeat;
    }
    else {
        if (e.target.classList.contains('seat') && selectionCount < 4) {
            e.target.classList.add('bg-green-400');
            e.target.classList.add('text-white');
            e.target.classList.add('select');
            addTicketInTable(e);
            selectionCount++;
            buyingSeatNumber++;
            numberOfAvailableSeat--;
            buyingSeat.innerText = buyingSeatNumber;
            availableSeat.innerText = numberOfAvailableSeat;
        } else if (e.target.classList.contains('seat') && selectionCount > 3) {
            alert('you can buy 4 tickets at a time !')
        }
    }

    coupneBtn.disabled = (buyingSeatNumber < 4);

    if (buyingSeatNumber > 0 && phoneNumber.value.length === 11) {
        lastBtn.disabled = false;
        lastBtn.classList.add('bg-green-500');
        lastBtn.classList.add('hover:bg-green-300');
    } else {
        lastBtn.disabled = true;
        lastBtn.classList.remove('bg-green-500');
        lastBtn.classList.remove('hover:bg-green-300');
    }


    phoneNumber.addEventListener('keyup', (e) => {
        if (buyingSeatNumber > 0 && phoneNumber.value.length === 11) {
            lastBtn.disabled = false;
            lastBtn.classList.add('bg-green-500');
            lastBtn.classList.add('hover:bg-green-300');
        } else {
            lastBtn.disabled = true;
            lastBtn.classList.remove('bg-green-500');
            lastBtn.classList.remove('hover:bg-green-300');
        }
    })
    sumOfPrice = buyingSeatNumber * 550;
    totalPrice.innerHTML = sumOfPrice;

    let x = totalPrice.innerHTML
    grandTotal.innerHTML = x;
    let lastPrice = x;

    coupneBtn.addEventListener('click', () => {
        if (coupneInput.value == 'NEW15') {
            lastPrice = lastPrice - (lastPrice / 100) * 15;
            grandTotal.innerHTML = lastPrice;
            coupneBtn.disabled = true;
            successBox.classList.remove('hidden');
        } else if (coupneInput.value == 'Couple20') {
            lastPrice = lastPrice - (lastPrice / 100) * 20;
            grandTotal.innerHTML = lastPrice;
            coupneBtn.disabled = true;
            successBox.classList.remove('hidden');
        }
    })

})



function addTicketInTable(e) {
    seatTable.innerHTML += `<tr id = '${e.target.innerHTML}' class="">
                            <td class="pt-3">${e.target.innerText}</td>
                            <td class="pt-3">Economoy</td>
                            <td class="pt-3">550</td>
                        </tr>`;
}
function removeTicketInTable(e) {
    for (let i = 0; i < seatTable.rows.length; i++) {
        if (e.target.innerHTML == seatTable.rows[i].id) {
            seatTable.rows[i].remove();
        }
    }
}


successBtn.addEventListener('click', ()=>{
    successBox.classList.add('hidden');
})