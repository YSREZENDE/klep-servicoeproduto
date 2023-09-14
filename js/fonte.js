function FontSize(type){
var ids=["#ace"];
ids.forEach(id=>{
    var elemento=document.querySelector(id);
    var size=window.getComputedStyle(elemento
        ,null).getPropertyValue('font-size');
    size=parseFloat(size);
    if(type=='increase'){
        elemento.style.fontSize=(size+5)+"px";
    }else{
        elemento.style.fontSize=(size-5)+"px";
    }  

})
};