const playerArray = [];

function selectPlayer() 
{

    const OrderPlayerlist = document.getElementById('player-table');
    OrderPlayerlist.innerHTML = ''; 
    if(playerArray.length < 6){
        for(let i = 0; i <= playerArray.length; i++) {
            const name = playerArray[i];
    
            const li = document.createElement('li');
    
            li.innerHTML = `
                <ol>${i + 1}.</ol>
                <li class = "mb-2">${name}</li>       
            `;
    
            OrderPlayerlist.appendChild(li);
        }
    }else{
        for(let i = 0; i < 5; i++) {
            const name = playerArray[i];
    
            const li = document.createElement('li');
    
            li.innerHTML = `
                <ol>${i + 1}.</ol>
                <li class = "mb-2">${name}</li>       
            `;
    
            OrderPlayerlist.appendChild(li);
        }
    }
   

}

function renderList(){
    console.log(`inside renderList: ${playerArray.length}`);

    const OrderPlayerlist = document.getElementById('player-table');
    const list = document.createElement('li');



}


function addToCard(player, callback)
{
    console.log(player);
    const playerName = player.parentNode.children[1].innerText;
    callback();    
}

function listenMe(player){
    addToCard(player, selectPlayer);
}