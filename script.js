setTimeout(()=>{


document.getElementById("loading").innerHTML =
"ACCESS GRANTED";


document.getElementById("content")
.classList.remove("hidden");


},2000);



function openFile(){


document.getElementById("file").innerHTML = `


<br>


======== FILE OPENED ========


<br><br>


ARSIP 1998 | DOC.01


<br><br>


"Jika dokumen ini terbuka,
maka seseorang telah mati."


<br><br>


STATUS:
TERENKRIPSI


`;

}