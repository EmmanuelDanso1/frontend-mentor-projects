<!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>calculator</title>
 </head>
 <style>
    #calculator{
        border: 2px solid black;
        width: 50%;
        /* display: inline-block; */
        background-color: #333;
        margin: auto;
        border-radius: 5px;
    }
    #screen{
        background-color: white;
        height: 90px;
        padding: 4px ;

    }
    .typing-section-font{
        font-size: 30px;
        height: 35px;
        padding: 3px;
    }
    .results-section-font{
        font-size: 40px;
        text-align: right;
        height: 48px;
    }
    .button-text-font{
        font-size: 20px;
    }
    .button{
        display: inline-block;
        width: 20%;
        background-color: #15162e;
        color: white;
        border: 1px solid black;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        margin: 25px 1.6%;
        border-radius: 5px;
    }
 </style>
 <body>
    <script>
        let screen_array =[];
        let results_accessed =0;
    </script>
    <div id="calculator">
    <div id="screen">
    <div id="typing-section" class="typing-section-font">

    </div>
    <div id="result-section" class="results-section-font">

    </div>
 </div>
 <div id="keyboard" class="buttton-text">
 <div>
 <div class="button" id="one">1</div>
 <div class="button" id="two">2</div>
 <div class="button" id="three">3</div>
 <div class="button" id="plus">+</div>
 </div>
 <div>
 <div class="button" id="four">4</div>
 <div class="button" id="five">5</div>
 <div class="button" id="six">6</div>
 <div class="button" id="minus">-</div>
 </div>
 <div>
 <div class="button" id="seven">7</div>
 <div class="button" id="eight">8</div>
 <div class="button" id="nine">9</div>
 <div class="button" id="division">/</div>
 </div>
 <div>
 <div class="button" id="clear" style="background-color: red;">C</div>
 <div class="button" id="backspace">CE</div>
 <div class="button" id="zero">0</div>
 <div class="button" id="equals">=</div>
 </div>
 </div>
</div>
 </body>
 <script>
 function clear(){
    let screen =document.querySelector("#typing-section");
    let result_section =document.querySelector("#result-section");
   screen.innerText =" ";
    result_section.innerText = " ";
    screen_array=[];
 }
 function check_and_clear(){
    if (results_accessed ==1){
        clear();
        results_accessed=0;
    }
 }
 function one(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "1";
    screen_array.push(1);
 }
 function two(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "2";
    screen_array.push(2);
 }

 function three(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "3";
    screen_array.push(3);
 }function four(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "4";
    screen_array.push(4);
 }
 function five(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "5";
    screen_array.push(5);
 }function six(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "6";
    screen_array.push(6);
 }function seven(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "7";
    screen_array.push(7);
 }function eight(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "8";
    screen_array.push(8);
 }function nine(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "9";
    screen_array.push(9);
 }
 function zero(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "0";
    screen_array.push(0);
 }
 
 function backspace(){
    let screen =document.querySelector("#typing-section")
    // this deletes from the back on the screen
    screen.innerText = screen.innerText.slice(0,screen.innerText.length-1);
    screen_array.pop();
 }
 function equals(){
    let screen =document.querySelector("#typing-section");
    let results = eval(screen.innerText);
    document.querySelector("#result-section").innerText=results;
    results_accessed = 1;
 }
 //do function for the operators(+,-,*)
 function plus(){
    check_and_clear()
    let screen =document.querySelector("#typing-section")
    screen.innerText = screen.innerText + "+";
    screen_array.push("+");

 }
 function minus(){
    check_and_clear()
    let screen = document.querySelector("#typing-section");
    screen.innerText = screen.innerText + "-";
    screen_array.push("-");

 }
 function division(){
    check_and_clear()
    let screen = document.querySelector("#typing-section");
    screen.innerText = screen.innerText + "/";
    screen_array.push("/");

 }
 
 document.querySelector("#clear").addEventListener("click",clear);
 document.querySelector("#one").addEventListener("click",one);
 document.querySelector("#two").addEventListener("click",two);
 document.querySelector("#three").addEventListener("click",three);
 document.querySelector("#four").addEventListener("click",four);
 document.querySelector("#five").addEventListener("click",five);
 document.querySelector("#six").addEventListener("click",six);
 document.querySelector("#seven").addEventListener("click",seven);
 document.querySelector("#eight").addEventListener("click",eight);
 document.querySelector("#nine").addEventListener("click",nine);
 document.querySelector("#zero").addEventListener("click",zero);
 document.querySelector("#minus").addEventListener('click', minus);
 document.querySelector("#division").addEventListener('click',division);

 document.querySelector("#backspace").addEventListener("click",backspace);
 document.querySelector("#plus").addEventListener("click",plus);
 document.querySelector("#equals").addEventListener("click",equals);

 </script>
 </html>