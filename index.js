const root=document.getElementById("root");
const menu=["Home","Products","Categories","Contacts","Login","Signup"];
function navBar(menu)
{
const nav=document.createElement("nav");
const logo=document.createElement("a");
logo.innerHTML="Shopping-app";
nav.appendChild(logo);const div=document.createElement("div");
for(item in menu)
{
    const a=document.createElement("a");
    a.innerHTML=menu[item]+ " ";
    div.appendChild(a);
}
nav.appendChild(div);
return nav;
}
root.appendChild(navBar(menu));