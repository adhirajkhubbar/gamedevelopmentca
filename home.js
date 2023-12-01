let playbtn= document.querySelector("button")
playbtn.addEventListener("click",function(){
    window.location.href="./game.html"
})

let exit=document.getElementById("exit")
exit.addEventListener("click",function(){
    alert("Do you really want to exit!!");
})


let instruction=document.getElementById("instruction")
instruction.addEventListener("click",function(){
    alert ("INSTRUCTION:-\n1)Click or press the spacebar to stack the block on the tower...\n2)If you reach the highest point on the page you will  win the game \n3)GOOD LUCK MATE!!!!");
})



  function playGame(){

    let name=document.getElementById("name").value;
    let nickName=document.getElementById("nick-name").value;

    

    let playerObj={
        name,
        nickName
    }

   

    localStorage.setItem("playerDetails",JSON.stringify(playerObj));


}