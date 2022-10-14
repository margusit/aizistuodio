// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
/*let iceCream =true;
if (iceCream){
    alert("like iceCream")
}else{
    alert("不不不我不喜欢")
}*/

function mul(num1,num2){
    let result =num1*num2;
    alert(result);
}
let myImage = document.querySelector('img');
myImage.onclick= function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/carimg.png') {
            myImage.setAttribute('src', 'images/img.png');
        } else {
            myImage.setAttribute('src', 'images/carimg.png');
        }
    }
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick=function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName){
        setUserName();
 }
    else {

        localStorage.setItem('name', myName);
        myHeading.textContent = '欢迎来到汽车之家' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '欢迎来到汽车之家' + storedName;

}