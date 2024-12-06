var nam=document.getElementById("sitename");
var ur=document.getElementById("siteurl");
var table=document.getElementById("table");
// localStorage.clear();
if(localStorage.getItem('alldata') != null){
    var sitelist = JSON.parse(localStorage.getItem('alldata'));
} else {
    var sitelist = [];
}
function add(){
    var x=0;
    var site = {
        sname:nam.value,
        surl:ur.value,
    }
    if (!validateURL(ur.value)) {
        alert("Please enter a valid URL")

        return; // Stop adding the site if the URL is invalid
    }

    var site = {
        sname: nam.value,
        surl: ur.value,
    }
    sitelist.push(site);
    localStorage.setItem ("alldata",JSON.stringify(sitelist));


    
for(var i=0;i<sitelist.length-1;i++){
    if (sitelist[i].sname == sitelist[sitelist.length-1].sname){
        x++;
       
    }
}

if (x==0){
    console.log(sitelist);
    showsite();
}
else{
    alert("The name definitely exists")
}

}  


function  showsite(){

    var str=`    <tr class="back4"><td><h3>Index</h3></td><td><h3>Site name</h3></td><td><h3>Visit</h3></td><td><h3>Delet</h3></td></tr>
`;
    for (var i=0;i<sitelist.length;i++){
        str+=` <tr class="mt-3"><td><h5 class="ms-4">${i+1}</h5></td><td><h5 class="ms-4">${sitelist[i].sname}</h5></td><td class="ps-4"><a class="back3" href="${sitelist[i].surl}" target="_blank"><i class="fa-solid fa-eye"></i></a></td><td class="ps-4"> <button  onclick="delet(${i})" class=" bt"><i   class="fa-solid fa-trash"></i></button></td></tr>
`
    }
    table.innerHTML=str;

}
function delet(index){
    sitelist.splice(index,1);
    showsite();
    localStorage.setItem ("alldata",JSON.stringify(sitelist));


}
function validateURL(url) {
   
    var pattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
    return pattern.test(url);
}