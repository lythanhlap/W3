function input1(value){
    document.getElementById('result').value+=value;

}

function delAll(){
    document.getElementById('result').value= '';
}
function del(){
    let res = document.getElementById('result').value;
    document.getElementById('result').value = res.substring(0, res.length -1);
}
function calculator(){
    

}

