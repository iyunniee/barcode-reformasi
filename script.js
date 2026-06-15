function deniedAccess(){


let warning=document.getElementById("warning");


warning.style.display="flex";


setTimeout(()=>{


warning.style.display="none";


},3000);


}




function openFile(){


let file=document.getElementById("fileWindow");


file.style.display="block";


setTimeout(()=>{


file.style.display="none";


},8000);



}



function closeFile(){


document.getElementById("fileWindow").style.display="none";


}