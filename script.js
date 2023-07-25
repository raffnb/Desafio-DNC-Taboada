function tabuada(){
    var num = document.getElementById('num');
    var end = document.getElementById('end');
    if(num.value.length == 0 || end.value.length == 0){
        window.alert( '[ERRO] Confira seus dados!');
    }else {
        var n  = Number(num.value);
        var e  = Number(end.value);
        var x = 0;
        var r = ' ';
        var res = document.getElementById('resposta');
        res.innerHTML = `A Tabuada do ${n} é: <br>`;
        do{
            r = n*x;
            res.innerHTML += `${n} X ${x}  =  ${r} <br>`;
            x++;
        }while(x <= e ) 

    
    }
}