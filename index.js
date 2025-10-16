function play(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const image1 = document.getElementsByClassName('img1')[0];
    image1.setAttribute('src', `images/dice${randomNumber1}.png`);

    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const image2 = document.getElementsByClassName('img2')[0];
    image2.setAttribute('src', `images/dice${randomNumber2}.png`);

    if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = "Draw"
    }else if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins"
    }else{
        document.querySelector("h1").innerHTML = "player 2 wins"
    }
}

