let numberCubs = 10
let maxNominal = 6
let setCubs = []
let statusCub = [false, false, false, false, false,
                 false, false, false, false, false]
let chances = 3
let chancesCounter = 0

let upCub = document.getElementById('up')
upCub.addEventListener("click", funcUp)



choose()
function choose(){
    for(let i=0; i < numberCubs; i++){
        let a = i+1
        let current = 'cub'+a
        let test = document.getElementById(current)
        test.addEventListener("click", function(){chooseCub(a)})
    }
}

/*let c1 = document.getElementById('cub1')
c1.addEventListener("click",  function(){
    chooseCub(1)
})*/

function chooseCub(i){
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