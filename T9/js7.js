function nhannut(){
    alert('abc');

}
function cong(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    console.log(a);
    console.log(b);
    var c= a+b;
    console.log(c);
    document.getElementById('kq').value=c;

}
function tru(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    console.log(a);
    console.log(b);
    var c= a-b;
    console.log(c);
    document.getElementById('kq').value=c;

}
function nhan(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    console.log(a);
    console.log(b);
    var c= a*b;
    console.log(c);
    document.getElementById('kq').value=c;

}
function chia(){
    var a=parseFloat(document.getElementById('soa').value);
    var b=parseFloat(document.getElementById('sob').value);
    console.log(a);
    console.log(b);
    
    console.log(c);
    if(b==0){
        alert("khong the chia cho 0")
        return;
    }
    else{
        var c= a/b;
        document.getElementById('kq').value=c;
    }


}

