function pick(arr){
    const idx = Math.floor((Math.random()*arr.length))
    return arr[idx];
}
    
function playCard(){
    const values= [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K'
    ];
const suits = ['Clubs','Spades','Diamonds','Hearts'];
return {value : pick(values) , suit: pick(suits)};
}   
