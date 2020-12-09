let numberCubs = 10
let maxNominal = 6
let setCubs = []
let statusCub = [false, false, false, false, false,
                 false, false, false, false, false]
let chances = 3
let chancesCounter = 0
let moveCurrent = null
let leftComb = []
let rightComb = []

let upCub = document.getElementById('up')
upCub.addEventListener("click", funcUp)

let groupCub = document.getElementById('group')
groupCub.addEventListener("click" , letGroup)

let resultComb = document.getElementById('result')
resultComb.addEventListener("click", resultShow)

function resultShow(){
    console.log('leftComb')
    for(let i =0; i < numberCubs/2 ; i++){
       console.log(leftComb[i])
    }
    console.log('rightComb')
    for(let i =0; i < numberCubs/2 ; i++){
       console.log(rightComb[i])
    }
}

function letGroup(){
    upCub.disabled = true
    for(let i =0; i < numberCubs; i++){
        let a = i+1
        let current = '#cub'+a
        document.querySelector(current).classList.remove("chooseCub")
    }
}


choose()
function choose(){
    for(let i=0; i < numberCubs; i++){
        let a = i+1
        let current = 'cub'+a
        let test = document.getElementById(current)
        let placeC = document.getElementById('place'+a)
        test.addEventListener("click", function(){chooseCub(a)})
        test.addEventListener("click", function(){moveC(a)})
        placeC.addEventListener("click", function(){moveTo(a)})
    }
}

function moveTo(i){
    let cubMove = document.getElementById('place'+i)
    cubMove.innerHTML = '<img  src="./image/cub'+setCubs[moveCurrent-1]+'.png" style="width: 46px;">'
    let current = 'cub'+moveCurrent
    let test = document.getElementById(current)
    test.innerHTML = ''
    if(i < 5 || i === 5){
      leftComb.push(setCubs[moveCurrent-1])
    }else{
      rightComb.push(setCubs[moveCurrent-1])
    }
}

/*let c1 = document.getElementById('cub1')
c1.addEventListener("click",  function(){
    chooseCub(1)
})*/

function chooseCub(i){
   if(upCub.disabled === false){
    let a = '#cub'+i
    if(statusCub[i-1]===true){
    document.querySelector(a).classList.remove("chooseCub")
    }else{
        document.querySelector(a).classList.add("chooseCub")
    }
    if(statusCub[i-1]===true){
        statusCub[i-1]=false
    }else{
        statusCub[i-1]=true
    }
   }
}

function moveC(i){
    if(upCub.disabled === true){
        let a = '#cub'+i
        document.querySelector(a).classList.toggle("moveCub")
        moveCurrent = i
       }
    
}

function funcUp(){
    castLots()
    renderCubs()
}

function castLots() { //кидання кубиків
    //setCubs = []
    for(let i =0; i < numberCubs; i++){
        if(statusCub[i] === false){
        setCubs[i] =1+ Math.floor(Math.random() * Math.floor(maxNominal))
        //setCubs.push(a+1)  
        }
    }
}

function renderCubs(arr){
  let str = ""
  for(let i =0; i < numberCubs; i++){
        let a = i+1
        str ="cub"+a
        let place = document.getElementById(str)
        place.innerHTML = '<img id="im'+a+'" src="./image/cub'+setCubs[i]+'.png" style="width: 46px;">'
  }
}