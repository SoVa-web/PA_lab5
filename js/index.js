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

let userNumber = 1 //1 - user, 2 - computer
let score1 = 0
let score2 = 0

let counterStep = 0

let combName = ['1', '2', '3', '4', '5', '6', 'Small', 'Big','F',  'Like']
function addLis(){
    for(let i =0; i < numberCubs; i++){
        document.getElementById('left'+combName[i]).addEventListener("click", function(){addScore('left'+combName[i], i)})
        document.getElementById('left'+combName[i]+combName[i]).addEventListener("click", function(){addScore('left'+combName[i]+combName[i], i)})
        document.getElementById('right'+combName[i]).addEventListener("click",function(){ addScore('right'+combName[i], i)})
        document.getElementById('right'+combName[i]+combName[i]).addEventListener("click", function(){addScore('right'+combName[i]+combName[i], i)})
    }
}
addLis()

function addScore(str, i){
    if(userNumber === 1){
        score1 = score1+document.getElementById(str).innerHTML*1
        document.getElementById('suma1').innerHTML = ''
        document.getElementById('suma1').innerHTML = score1
        let a = i+1
        document.querySelector('#comb1'+a).classList.toggle('red')
    }else{
        score2= score2 + document.getElementById(str).innerHTML*1
        document.getElementById('suma2').innerHTML = ''
        document.getElementById('suma2').innerHTML = score2
        let a = i+1
        document.querySelector('#comb2'+a).classList.toggle('red')
    }
}


let template =  {
    left : 0,
    right : 0,
    used : false
}
let temp = {
    one : template,
    two : template,
    three : template, 
    four : template, 
    five : template, 
    six : template, 
    f : template, 
    small : template, 
    big : template, 
    like : template, 
}


let userRes = temp
let compOp = temp

let upCub = document.getElementById('up')
upCub.addEventListener("click", funcUp)

let groupCub = document.getElementById('group')
groupCub.addEventListener("click" , letGroup)

let resultComb = document.getElementById('result')
resultComb.addEventListener("click", resultShow)

let scoreBtn = document.getElementById('score')
scoreBtn.addEventListener("click", calcScore)

function calcScore(){
    if(userNumber === 1){
        userRes.one.left =  calc(leftComb, 1)
        document.getElementById('left1').innerHTML = calc(leftComb, 1)
        userRes.one.right =  calc(rightComb, 1)
        document.getElementById('left11').innerHTML = calc(rightComb, 1)
        userRes.two.left =  calc(leftComb, 2)
        document.getElementById('left2').innerHTML = calc(leftComb, 2)
        userRes.two.right =  calc(rightComb, 2)
        document.getElementById('left22').innerHTML = calc(rightComb, 2)
        userRes.three.left =  calc(leftComb, 3)
        document.getElementById('left3').innerHTML = calc(leftComb, 3)
        userRes.three.right =  calc(rightComb, 3)
        document.getElementById('left33').innerHTML = calc(rightComb, 3)
        userRes.four.left =  calc(leftComb, 4)
        document.getElementById('left4').innerHTML = calc(leftComb, 4)
        userRes.four.right =  calc(rightComb, 4)
        document.getElementById('left44').innerHTML = calc(rightComb, 4)
        userRes.five.left =  calc(leftComb, 5)
        document.getElementById('left5').innerHTML =  calc(leftComb, 5)
        userRes.five.right =  calc(rightComb, 5)
        document.getElementById('left55').innerHTML =  calc(rightComb, 5)
        userRes.six.left =  calc(leftComb, 6)
        document.getElementById('left6').innerHTML=  calc(leftComb, 6)
        userRes.six.right =  calc(rightComb, 6)
        document.getElementById('left66').innerHTML=  calc(rightComb, 6)
        userRes.f.left =  checkF(leftComb)
        document.getElementById('leftF').innerHTML =  checkF(leftComb)
        userRes.f.right =  checkF(rightComb)
        document.getElementById('leftFF').innerHTML=  checkF(rightComb)
        userRes.small.left =  checkSmall(leftComb)
        document.getElementById('leftSmall').innerHTML=  checkSmall(leftComb)
        userRes.small.right =  checkSmall(rightComb)
        document.getElementById('leftSmallSmall').innerHTML=  checkSmall(rightComb)
        userRes.big.left =  checkBig(leftComb)
        document.getElementById('leftBig').innerHTML=  checkBig(leftComb)
        userRes.big.right =  checkBig(rightComb)
        document.getElementById('leftBigBig').innerHTML=  checkBig(rightComb)
        userRes.like.left = checkLike(leftComb)
        document.getElementById('leftLike').innerHTML= checkLike(leftComb)
        userRes.like.right = checkLike(rightComb)
        document.getElementById('leftLikeLike').innerHTML = checkLike(rightComb)
    }else{
        compOp.one.left =  calc(leftComb, 1)
        document.getElementById('right1').innerHTML = calc(leftComb, 1)
        compOp.one.right =  calc(rightComb, 1)
        document.getElementById('right11').innerHTML = calc(rightComb, 1)
        compOp.two.left =  calc(leftComb, 2)
        document.getElementById('right2').innerHTML = calc(leftComb, 2)
        compOp.two.right =  calc(rightComb, 2)
        document.getElementById('right22').innerHTML = calc(rightComb, 2)
        compOp.three.left =  calc(leftComb, 3)
        document.getElementById('right3').innerHTML = calc(leftComb, 3)
        compOp.three.right =  calc(rightComb, 3)
        document.getElementById('right33').innerHTML = calc(rightComb, 3)
        compOp.four.left =  calc(leftComb, 4)
        document.getElementById('right4').innerHTML = calc(leftComb, 4)
        compOp.four.right =  calc(rightComb, 4)
        document.getElementById('right44').innerHTML = calc(rightComb, 4)
        compOp.five.left =  calc(leftComb, 5)
        document.getElementById('right5').innerHTML =  calc(leftComb, 5)
        compOp.five.right =  calc(rightComb, 5)
        document.getElementById('right55').innerHTML =  calc(rightComb, 5)
        compOp.six.left =  calc(leftComb, 6)
        document.getElementById('right6').innerHTML=  calc(leftComb, 6)
        compOp.six.right =  calc(rightComb, 6)
        document.getElementById('right66').innerHTML=  calc(rightComb, 6)
        compOp.f.left =  checkF(leftComb)
        document.getElementById('rightF').innerHTML =  checkF(leftComb)
        compOp.f.right =  checkF(rightComb)
        document.getElementById('rightFF').innerHTML=  checkF(rightComb)
        compOp.big.left =  checkBig(leftComb)
        document.getElementById('rightBig').innerHTML=  checkBig(leftComb)
        compOp.big.right =  checkBig(rightComb)
        document.getElementById('rightBigBig').innerHTML=  checkBig(rightComb)
        compOp.small.left =  checkSmall(leftComb)
        document.getElementById('rightSmall').innerHTML=  checkSmall(leftComb)
        compOp.small.right =  checkSmall(rightComb)
        document.getElementById('rightSmallSmall').innerHTML=  checkSmall(rightComb)
        compOp.like.left = checkLike(leftComb)
        document.getElementById('rightLike').innerHTML= checkLike(leftComb)
        compOp.like.right = checkLike(rightComb)
        document.getElementById('leftLikeLike').innerHTML = checkLike(rightComb)
    }
}

function resultShow(){
    upCub.disabled = false
    for(let i = 1 ; i < numberCubs+1; i++){
        let place = document.getElementById('place'+i)
        place.innerHTML = ''
    }
    leftComb = []
    rightComb = []
    console.log(userNumber)
    document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
    chancesCounter = 0
        if(userNumber === 1){
            userNumber = 2
            document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
        }else{
            userNumber = 1 
            document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
        }
    counterStep++
    if(counterStep === numberCubs){
        if(score1>score2){
            alert("Користувач виграв")
        }
        if(score1===score2){
            alert("Нічия")
        }
        if(score1<score2){
            alert("Комп'ютер виграв !")
        }
    }
}
window.addEventListener("load",function(){ document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)})


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
   if(upCub.disabled === true){
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
    let a = '#cub'+moveCurrent
        document.querySelector(a).classList.remove("moveCub")
   }
}

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
    if(chancesCounter < 3){
        castLots()
        renderCubs()
        chancesCounter++
        let c = document.getElementById('coun')
        c.innerHTML = ' You made '+chancesCounter+' dice rolls!'
    }else{
        console.log("Group your cubs!")
    }
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

function calc(arr, numinal){
    let numberOne = 0
    for(let i =0;i < numberCubs/2; i++){
      if(arr[i] === numinal){
          numberOne++
      }
    }
    return numberOne*numinal
}

function checkLike(arr){
    let numberOne = 0
    for(let i =0;i < numberCubs/2; i++){
        if(arr[i] === arr[0]){
            numberOne++
        }
      }
    if(numberOne===5){
        return 50
    }else{
        return 0
    }
}

function checkF(arr){
    let one = 0, two = 0, three = 0, four = 0, five = 0, six = 0
    let scoreF = 0
    for(let i =0; i < numberCubs/2; i++){
        if(arr[i] === 1){
            one++
        }
        if(arr[i] === 2){
            two++
        }
        if(arr[i] === 3){
            three++
        }
        if(arr[i] === 4){
            four++
        }
        if(arr[i] === 5){
            five++
        }
        if(arr[i] === 6){
            six++
        }
    }
    if((one===3|| two===3|| three===3||four===3||five===3||six===3)&&(one===2|| two===2|| three===2||four===2||five===2||six===2)){
        for(let i =0; i < numberCubs/2; i++){
            scoreF = scoreF+arr[i]
        }
    }
    return scoreF
}

function checkSmall(arr){
    let one = 0, two = 0, three = 0, four = 0, five = 0
    let scoreF = 0
    for(let i =0; i < numberCubs/2; i++){
        if(arr[i] === 1){
            one++
        }
        if(arr[i] === 2){
            two++
        }
        if(arr[i] === 3){
            three++
        }
        if(arr[i] === 4){
            four++
        }
        if(arr[i] === 5){
            five++
        }
    }
    if(one===1&&two===1&&three===1&&four===1&&five===1){
        return 21
    }else{
        return 0
    }
}

function checkBig(arr){
    let six = 0, two = 0, three = 0, four = 0, five = 0
    let scoreF = 0
    for(let i =0; i < numberCubs/2; i++){
        if(arr[i] === 6){
            six++
        }
        if(arr[i] === 2){
            two++
        }
        if(arr[i] === 3){
            three++
        }
        if(arr[i] === 4){
            four++
        }
        if(arr[i] === 5){
            five++
        }
    }
    if(two===1&&three===1&&four===1&&five===1&&six===1){
        return 30
        if(userNumber===1){
            alert("Користувач переміг !")
        }else{
            alert("Комп`ютер переміг !")
        }
    }else{
        return 0
    }
}


