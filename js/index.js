let numberCubs = 10
let maxNominal = 6
let setCubs = []
let statusCub = []
let groupStatus = []
let compUsed = []

function init(arr, num){
  for(let i =0; i<num; i++){
      arr.push(false)
  }
}
init(statusCub, numberCubs)
init(groupStatus, numberCubs)
init(compUsed, numberCubs)

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
        document.getElementById(str).hidden = true
        if(str === 'left'+combName[i]){
            document.getElementById(str+combName[i]).hidden = true
        }else{
            document.getElementById('left'+combName[i]).hidden = true
        }
        let a = i+1
        document.querySelector('#comb1'+a).classList.add('red')
        if(combName[i]==='1')userRes.one.used = true
        if(combName[i]==='2')userRes.two.used = true
        if(combName[i]==='3')userRes.three.used = true
        if(combName[i]==='4')userRes.four.used = true
        if(combName[i]==='5')userRes.five.used = true
        if(combName[i]==='6')userRes.six.used = true
        if(combName[i]==='Small')userRes.small.used = true
        if(combName[i]==='Big')userRes.big.used = true
        if(combName[i]==='F')userRes.f.used = true
        if(combName[i]==='Like')userRes.like.used = true
    }/*else{
        score2= score2 + document.getElementById(str).innerHTML*1
        document.getElementById('suma2').innerHTML = ''
        document.getElementById('suma2').innerHTML = score2
        let a = i+1
        document.getElementById(str).hidden = true
        if(str === 'right'+combName[i]){
            document.getElementById(str+combName[i]).hidden = true
        }else{
            document.getElementById('right'+combName[i]).hidden = true
        }
        document.querySelector('#comb2'+a).classList.add('red')
        if(combName[i]==='1')compOp.one.used = true
        if(combName[i]==='2')compOp.two.used = true
        if(combName[i]==='3')compOp.three.used = true
        if(combName[i]==='4')compOp.four.used = true
        if(combName[i]==='5')compOp.five.used = true
        if(combName[i]==='6')compOp.six.used = true
        if(combName[i]==='Small')compOp.small.used = true
        if(combName[i]==='Big')compOp.big.used = true
        if(combName[i]==='F')compOp.f.used = true
        if(combName[i]==='Like')compOp.like.used = true
    }*/
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
    document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
    chancesCounter = 0
        //if(userNumber === 1){
            userNumber = 2
            document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
       /* }else{
            userNumber = 1 
            document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
        }*/
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
    strategyComp()
    
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
    if(numberOne===5&&userRes.like.used === false){
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
    if((one===3|| two===3|| three===3||four===3||five===3||six===3)&&(one===2|| two===2|| three===2||four===2||five===2||six===2)&&userRes.f.used === false){
        for(let i =0; i < numberCubs/2; i++){
            scoreF = scoreF+arr[i]
        }
          return scoreF
    }else{
        return 0
    }
  
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
    if(one===1&&two===1&&three===1&&four===1&&five===1&&userRes.small.used === false){
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
    if(two===1&&three===1&&four===1&&five===1&&six===1&&userRes.big.used === false){
        if(userNumber===1){
            alert("Користувач переміг !")
        }else{
            alert("Комп`ютер переміг !")
        }
         return 30
    }else{
        return 0
    }
}

function evalBigForTen(){
    if(compOp.big.used === false){
        let  two = 0, three = 0, four = 0, five = 0, six = 0
    let scoreF = 0
    for(let i =0; i < numberCubs; i++){
        if(setCubs[i] === 2){
            two++
        }
        if(setCubs[i] === 3){
            three++
        }
        if(setCubs[i] === 4){
            four++
        }
        if(setCubs[i] === 5){
            five++
        }
        if(setCubs[i] === 6){
            six++
        }
    }
    if(six>=1 && two >= 1 && three>=1 && four>=1 && five>=1){
        return true
    }else{
        return false
    }
    }
    return false
}

function evalSmallForTen(){
    if(compOp.small.used === false){
        let  two = 0, three = 0, four = 0, five = 0, one = 0
    let scoreF = 0
    for(let i =0; i < numberCubs; i++){
        if(setCubs[i] === 2){
            two++
        }
        if(setCubs[i] === 3){
            three++
        }
        if(setCubs[i] === 4){
            four++
        }
        if(setCubs[i] === 5){
            five++
        }
        if(setCubs[i] === 1){
            one++
        }
    }
    if(one>=1 && two >= 1 && three>=1 && four>=1 && five>=1){
        return true
    }else{
        return false
    }
    }
    return false
}

function evalFullForTen(){
    if(compOp.f.used === false){
        let one = 0, two =0, three =0, four =0, five =0, six =0
    for(let i =0; i < numberCubs; i++){
        if(setCubs[i] === 1){
            one++
        }
        if(setCubs[i] === 2){
            two++
        }
        if(setCubs[i] === 3){
            three++
        }
        if(setCubs[i] === 4){
            four++
        }
        if(setCubs[i] === 5){
            five++
        }
        if(setCubs[i] === 6){
            six++
        }
    }
    if((one===3|| two===3|| three===3||four===3||five===3||six===3)&&(one===2|| two===2|| three===2||four===2||five===2||six===2)){
       return true
    }else{
        return false
    }
    }else{
        return false
    }
}

function evalLikeForTen(){
    if(compOp.like.used === false){
       let one=0, two=0, three=0, four=0, five=0, six=0
       for(let i=0; i<numberCubs; i++){
        if(setCubs[i] === 1){
            one++
        }
        if(setCubs[i] === 2){
            two++
        }
        if(setCubs[i] === 3){
            three++
        }
        if(setCubs[i] === 4){
            four++
        }
        if(setCubs[i] === 5){
            five++
        }
        if(setCubs[i] === 6){
            six++
        }
       }
       if(six>=5 && two >= 5 && three>=5 && four>=5 && five>=5 && one>=5){
        return true
    }else{
        return false
    }
    }else{
        return false
    }
}

 async function eval(){
    if(userNumber === 2){
        funcUp()
        if(evalBigForTen() === true){
            groupingForComp()
        }else{
         if(evalLikeForTen() === true){
            groupingForComp()
         }else{
             if(evalFullForTen() === true){
                groupingForComp()
             }else{
                  if(evalSmallForTen()=== true){
                     groupingForComp()
                  }else{
                     leftComb.length = 0
                    rightComb.length = 0
                    for(let i =0; i < numberCubs; i++){
                        groupStatus[i]= false
                    }
                    let c = document.getElementById('coun')
                     c.innerHTML = ' You made '+chancesCounter+' dice rolls!'
                     //await sleep(5000)
                     funcUp()
                     c.innerHTML = ' You made '+chancesCounter+' dice rolls!'
                     //await sleep(5000)
                     if(evalBigForTen() === true){
                         groupingForComp()
                     }else{
                      if(evalLikeForTen() === true){
                         groupingForComp()
                      }else{
                          if(evalFullForTen() === true){
                             groupingForComp()
                          }else{
                               if(evalSmallForTen()=== true){
                                  groupingForComp()
                               }else{
                                 randomGroup()
                               }
                          }
                      }
                     }
                  }
             }
         }
        }
     }else{
         return
     }
}
async function strategyComp(){
        leftComb.length=0
        rightComb.length=0
       funcUp()
       if(evalBigForTen() === true){
           groupingForComp()
       }else{
        if(evalLikeForTen() === true){
           groupingForComp()
        }else{
            if(evalFullForTen() === true){
               groupingForComp()
            }else{
                 if(evalSmallForTen()=== true){
                    groupingForComp()
                 }else{
                    let c = document.getElementById('coun')
                    c.innerHTML = ' You made '+chancesCounter+' dice rolls!'
                    await sleep(5000);
                    for(let i =0; i < numberCubs; i++){
                        groupStatus[i]= false
                    }
                    leftComb.length = 0
                    rightComb.length = 0
                    eval()
                 }
            }
        }
       }
        await sleep(5000)
    clearComp()
    renderComp()
    calcScore()
    addCompScore()
    for(let i =0; i < numberCubs; i++){
        groupStatus[i]= false
    }
    await sleep(5000)
    upCub.disabled = false
    for(let i = 1 ; i < numberCubs+1; i++){
        let place = document.getElementById('place'+i)
        place.innerHTML = ''
    }
    leftComb = []
    rightComb = []
    document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
    chancesCounter = 0
       /* if(userNumber === 1){
            userNumber = 2
            document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
        }else{*/
            userNumber = 1 
            document.querySelector('#avatar'+userNumber).classList.toggle('user'+userNumber)
        //}
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

function addCompScore(){
    let add1 = 0, add2 = 0
    let max1 = 0, max2  = 0
    for(let i =0; i < numberCubs; i ++){
       if(compUsed[i] === false && document.getElementById('right1').innerHTML*1 >= max1) {add1=1; max1=document.getElementById('right1').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right2').innerHTML*1 >= max1) {add1=2; max1=document.getElementById('right2').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right3').innerHTML*1 >= max1) {add1=3; max1=document.getElementById('right3').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right4').innerHTML*1 >= max1) {add1=4; max1=document.getElementById('right4').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right5').innerHTML*1 >= max1) {add1=5; max1=document.getElementById('right5').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right6').innerHTML*1 >= max1) {add1=6; max1=document.getElementById('right6').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('rightSmall').innerHTML*1 >= max1) {add1=7; max1=document.getElementById('rightSmall').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('rightBig').innerHTML*1 >= max1) {add1=8; max1=document.getElementById('rightBig').innerHTML*1}
       if(compUsed[i] === false && document.getElementById('rightF').innerHTML*1 >= max1) {add1=9;  max1=document.getElementById('rightF').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('rightLike').innerHTML*1 >= max1) {add1=10; max1=document.getElementById('rightLike').innerHTML*1}
    }
       score2 = score2*1+max1*1
       document.getElementById('suma2').innerHTML = ''
       document.getElementById('suma2').innerHTML =`${score2}`
       console.log("add"+add1)
       document.querySelector('#comb2'+add1).classList.add('red')
       compUsed[add1*1-1] = true
       for(let i =0; i < numberCubs; i ++){
       if(compUsed[i]  === false && document.getElementById('right11').innerHTML*1 > max2) {add2=1; max2=document.getElementById('right11').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right22').innerHTML*1 > max2) {add2=2;max2=document.getElementById('right22').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right33').innerHTML*1 > max2) {add2=3;max2=document.getElementById('right33').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right44').innerHTML*1 > max2) {add2=4; max2=document.getElementById('right44').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right55').innerHTML*1 > max2) {add2=5; max2=document.getElementById('right55').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('right66').innerHTML*1 > max2) {add2=6; max2=document.getElementById('right66').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('rightSmallSmall').innerHTML*1 > max2) {add2=7; max2=document.getElementById('rightSmallSmall').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('rightBigBig').innerHTML*1 > max2) {add2=8;max2=document.getElementById('rightBigBig').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('rightFF').innerHTML*1 > max2) {add2=9;max2=document.getElementById('rightFF').innerHTML*1}
       if(compUsed[i]  === false && document.getElementById('rightLikeLike').innerHTML*1 > max2) {add2=10;max2=document.getElementById('rightLikeLike').innerHTML*1}
       
    }
       compUsed[add2*1-1] = true
       score2 = score2*1+max2*1
       console.log("score")
       console.log(score2)
       document.getElementById('suma2').innerHTML = ''
       document.getElementById('suma2').innerHTML =`${score2}`
       document.querySelector('#comb2'+add2).classList.add('red')
}

function clearComp(){
        for(let j =0; j < numberCubs; j++){
            let a = j +1
            document.getElementById('cub'+a).innerHTML = ''
          }
}

function renderComp(){
      for(let j =0; j < numberCubs/2; j++){
        let a = j +1
        document.getElementById('place'+a).innerHTML = '<img  src="./image/cub'+leftComb[j]+'.png" style="width: 46px;">'
      }
      for(let j =0; j<numberCubs/2; j++){
        let a = j +1 + numberCubs/2
        document.getElementById('place'+a).innerHTML = '<img  src="./image/cub'+rightComb[j]+'.png" style="width: 46px;">'
      }
    
}

function randomGroup(){
    for(let i =0 ; i < numberCubs/2; i++){
        leftComb.push(setCubs[i])
    }
    for(let i =numberCubs/2 ; i < numberCubs; i++){
        rightComb.push(setCubs[i])
    }
}

function groupingForComp(){
    letGroup()
    if(evalBigForTen() === true){
        groupForBig()
        return
    }
    if(evalLikeForTen() === true){
       groupForLike()
       return
    }
    if(evalFullForTen() === true){
        groupForFull()
       return
    }
    if(evalSmallForTen()=== true){ 
       groupForSmall()
       return
    }
}

function groupForBig(){
    console.log("big")
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===2 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===3 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    console.log("len")
    console.log(leftComb.length)
    console.log("len")
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===4 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===5 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===6 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if( groupStatus[i]===false){
           rightComb.push(setCubs[i])
           groupStatus[i]=true
        }
    }
   
}

function groupForSmall(){
    console.log("small")
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===2 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===3 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===4 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===5 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if(setCubs[i]===1 && groupStatus[i]===false){
           leftComb.push(setCubs[i])
           groupStatus[i]=true
           break
        }
    }
    for(let i =0; i<numberCubs; i++){
        if( groupStatus[i]===false){
           rightComb.push(setCubs[i])
           groupStatus[i]=true
        }
    }
   
}

function groupForLike(){
    console.log("like")
    let count = 0
    let like = 0
    let one=0, two=0, three=0, four=0, five=0, six=0
    for(let i =0; i <numberCubs; i++){
        if(setCubs[i]===1) one++
        if(setCubs[i]===2) two++
        if(setCubs[i]===3) three++
        if(setCubs[i]===4) four++
        if(setCubs[i]===5) five++
        if(setCubs[i]===6) six++
    }
    if(one>=5) like=1
    if(two>=5) like=2
    if(three>=5) like=3
    if(four>=5) like=4
    if(five>=5) like=5
    if(six>=5) like=6
    for(let i =0; i <numberCubs; i ++){
        if(count<5&&setCubs[i]===like){
             leftComb.push(setCubs[i])
             groupStatus[i] = true
             count++
        }
    }
    for(let i =0; i<numberCubs; i++){
        if( groupStatus[i]===false){
           rightComb.push(setCubs[i])
           groupStatus[i]=true
        }
    }
}

function groupForFull(){
    console.log("full")
    let count1 = 0, count2 =0
    let like1 = null, like2 = null 
    let one=0, two=0, three=0, four=0, five=0, six=0
    for(let i =0; i <numberCubs; i++){
        if(setCubs[i]===1) one++
        if(setCubs[i]===2) two++
        if(setCubs[i]===3) three++
        if(setCubs[i]===4) four++
        if(setCubs[i]===5) five++
        if(setCubs[i]===6) six++
    }
    if(one>=3)like1=1
    if(two>=3)like1=2
    if(three>=3)like1=3
    if(four>=3)like1=4
    if(five>=3)like1=5
    if(six>=3)like1=6
    if(one>=2&&like1!=1)like2=1
    if(two>=2&&like1!=2)like2=2
    if(three>=2&&like1!=3)like2=3
    if(four>=2&&like1!=4)like2=4
    if(five>=2&&like1!=5)like2=5
    if(six>=2&&like1!=6)like2=6
    for(let i =0; i <numberCubs; i ++){
        if(count1<3&&like1===setCubs[i]){
             leftComb.push(setCubs[i])
             groupStatus[i] = true
             count1++
        }
    }
    for(let i =0; i <numberCubs; i ++){
        if(count2<2&&like2===setCubs[i]){
             leftComb.push(setCubs[i])
             groupStatus[i] = true
             count2++
        }
    }
    for(let i =0; i<numberCubs; i++){
        if( groupStatus[i]===false){
           rightComb.push(setCubs[i])
           groupStatus[i]=true
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  