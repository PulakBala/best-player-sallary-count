
const players = [];
const btns = document.querySelectorAll('#select-btn')
// console.log(btns);
function makeList() {
    const OrderPlayerlist = document.getElementById('player-table');
    OrderPlayerlist.innerHTML = ''; 
    for (let i = 0; i < players.length; i++) {
        const name = players[i];

        const li = document.createElement('li');

        li.innerHTML = `
            <ol>${i + 1}.</ol>
            <li class = "mb-2">${name}</li>       
        `;

        OrderPlayerlist.appendChild(li);
    }
}
function displayPlayers() {
    // console.log('right now length ' + players.length);
    if (players.length <= 5) {
        makeList();
    } else {
        alert('more than 5');
        players.pop();
        makeList();
    }
}


for (let i = 0; i < btns.length; i++) {
    // console.log(btns[i]);
    btns[i].addEventListener('click', () => {
        const playerName = btns[i].parentNode.children[1].innerText;
        players.push(playerName);
        displayPlayers();
    })
}

// document.getElementById('calculate-field').addEventListener('click', function(){
//     const parPlayerInputValue = document.getElementById('parPlayer-field').value;
//     const calculatePlayerSalary = parPlayerInputValue * players.length;
//     // console.log(calculatePlayerSalary); 
// })
