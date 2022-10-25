const readLine=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
let level=1
let numrange=2
let numarr=[1,2]
let num=Math.round(Math.random()*numarr.length)
let parsenum=num
let usernum=""
let guessStatus=false
function getInput(){
readLine.question(`Guess a number between 1 and ${numrange}: `, numinput=>{
    usernum=parseFloat(numinput)
    guessNumber(usernum)
})
}
function guessNumber(inputnum){
if(usernum==parsenum){
    numarr.push(numarr.length+1)
      level++
    console.log(`Congratulations you geuessed correctly, move to level ${level}`)
    guessStatus=true
    numrange++
    getInput()
}
else{
    console.log(`Incorrect number Try again, the correct Number is ${parsenum}`)
    getInput()
}
}
getInput()
