<script>
var a_1, d, n, k;

var min_a_1, max_a_1;
var min_d, max_d;
var min_k, max_k;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate_equation() {
    a_1 = 0, d = 0, n = 0, k = 0;

    min_a_1 = -10, max_a_1 = 10;
    min_d = 5, max_d = 15;
    min_k = 3, max_k = 5;
    a_1 = getRandomInRange(min_a_1, max_a_1);
    d = getRandomInRange(min_d, max_d);
    k = getRandomInRange(min_k, max_k);  
    
    var text = create_equation(a_1, d, k);

    print_in_div("equation", text);
}


function show_answer() {
    var a_k = a_1 + (k - 1) * d;
    
    n = 2 * k - 1;
    
    var a_n = a_1 + (n - 1) * d;  
    text = "$a_1 = "+a_1+",  a_{"+k+"} = "+a_k+", a_{"+n+"} = "+a_n+"$";
    print_in_div("answer", text);
}

function create_equation(a_1, d, k) {
    var a_k = a_1 + (k - 1) * d;
    
    n = 2 * k - 1;
    
    var a_n = a_1 + (n - 1) * d;   
    
    var sum = a_1 + a_k + a_n;
    var proc = a_1 * a_k * a_n;
  
    return "Про возрастающую арифметическую прогрессию известно, что  $a_1 + a_{"+k+"} + a_{"+n+"} = "+sum+"$ и $a_1a_{"+k+"}a_{"+n+"} = "+proc+"$. Найдите $a_1, a_{"+k+"}, a_{"+n+"}$." 
}

function print_in_div(divID, print_text) {
  var div = document.getElementById(divID);
  div.innerHTML = print_text;
  MathJax.Hub.Queue(['Typeset',MathJax.Hub,'result']);
}
</script>

<!DOCTYPE html>
<html lang="rus">
  <head>
    <meta charset="utf-8">
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
    });
    </script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
  </head>
  <body>
    <div ID="equation">Тут будет уравнение</div><br>
    <div ID="answer">Тут будет ответ</div><br>
    Введите код для генерации (4-x значное число): <input type="password" id="input_key">
    <input type="button" value ="Генерировать уравнение" onclick="generate_equation()">
    <input type="button" value ="Показать ответ" onclick="show_answer()">
  </body>
</html>