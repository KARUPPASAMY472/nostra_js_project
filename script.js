var closemark=document.querySelector(".close_mark")
var closeheader=document.querySelector(".nostra_header")
var menubar=document.querySelector(".menu_bar")
var e=document.getElementById("e")
var closemenu=document.querySelector(".close_menu_bar")
var sidenavbar=document.querySelector(".side_navbar")
var rightarrow=document.querySelector(".right_arrow")






function xmark()
{
    closeheader.style.display="none";
}
function xmarksidenav()
{
    sidenavbar.style.display="none";
    sidenavbar.style="transition-duration: 1s;";
}
function opensidebar()
{
    sidenavbar.style.display="block";
    sidenavbar.style="margin-left:0%";
    
}
/** 
function chanfered()
{
    nheart.style.display="none";
    redheart.style.display="block";
}

function chanfenormal()
{
    nheart.style.display="block";
    redheart.style.display="none";
}

*/




var leftarrow=document.querySelector(".left_arrow")
var mainimg1=document.querySelector(".main_img_1")
var mainimg2=document.querySelector(".main_img_2")
var mainimg3=document.querySelector(".main_img_3")
var lef1=document.querySelector(".arrow-tag-left")
var rig1=document.querySelector(".arrow-tag-right")
var lef=document.getElementById("lef")
var rig=document.getElementById("rig")
var thr=document.getElementById("thr")
var fouri=document.getElementById("four")


function leftclickarow()
{
    
    mainimg3.style="margin-right:-1500px";
    mainimg1.style="left:0%;right:0%";
    mainimg2.style="margin-left:100%";
    thr.style.display="block";
    fouri.style.display="block";
    lef.style.display="none";
    rig.style.display="none";
    lef1.style.display="none";
    rig1.style.display="none";
}
function  rightclickarow()
{
    mainimg3.style="margin-right:0%";
    mainimg1.style="left:-110%;right:0%";
    mainimg2.style="margin-left:-100%";
    thr.style.display="none";
    fouri.style.display="none";
    lef1.style.display="none";
    rig1.style.display="none";
    lef.style.display="block";
    rig.style.display="block";
}

function leftclickt()
{
     mainimg3.style="margin-right:-1500px";
    mainimg1.style="left:-110%;right:0%";
    mainimg2.style="margin-left:0%";
    thr.style.display="none";
    fouri.style.display="none";
    lef.style.display="none";
    rig.style.display="none";
    lef1.style.display="block";
    rig1.style.display="block";
}

function rightclickt()
{
    mainimg3.style="margin-left:-200%";
    mainimg1.style="left:0%;right:0%";
    mainimg2.style="margin-left:-100%";
    thr.style.display="block";
    fouri.style.display="block";
    lef1.style.display="none";
    rig1.style.display="none";
    lef.style.display="none";
    rig.style.display="none";
}


function rightcli()
{
     mainimg3.style="margin-right:-1500px";
    mainimg1.style="left:-110%;right:0%";
    mainimg2.style="margin-left:0%";
    thr.style.display="none";
    fouri.style.display="none";
    lef.style.display="none";
    rig.style.display="none";
    lef1.style.display="block";
    rig1.style.display="block";
}

function leftcli()
{
    mainimg3.style="margin-right:0%";
    mainimg1.style="left:-110%;right:0%";
    mainimg2.style="margin-left:-100%";
    thr.style.display="none";
    fouri.style.display="none";
    lef1.style.display="none";
    rig1.style.display="none";
    lef.style.display="block";
    rig.style.display="block";
}







/** color changed shirt */




                const imagesi =[
                ["images/shirt4.1.jpg","images/shirt4.2.jpg","images/shirt4.3.jpg"],
                ["images/shirt3.1.jpg","images/shirt3.2.jpg","images/shirt3.3.jpg"],
                ["images/shirt2.1.jpg","images/shirt2.2.jpg","images/shirt2.3.jpg"],
                ["images/shirt5.1.jpg", "images/shirt5.2.jpg", "images/shirt5.3.jpg"],
                ["images/shirt6.1.jpg","images/shirt6.2.jpg","images/shirt6.3.jpg"],
                ["images/shirt8.1.jpg","images/shirt8.2.jpg","images/shirt8.3.jpg"]
            ];
                const containser=document.querySelectorAll(".container_12");

                containser.forEach((contais, index) =>  {
                const img = contais.querySelector("img");
                const buttonsy = contais.querySelectorAll(".color-btn");
                
                buttonsy.forEach(butto => {
                    butto.addEventListener("click", () => {
                    
               const colorInde=butto.dataset.color;
               
               console.log("this is what :"+colorInde)
               const colorIndex=parseInt(butto.dataset.color);
               console.log("this color change img :"+colorIndex)
               if (colorIndex === 0)
               {
                img.src =imagesi[index][0];
                console.log("this image is :" +imagesi[index][0])
                
               }
               else if (colorIndex === 1)
               {
                img.src =imagesi[index][1];
                console.log("this image is :" +imagesi[1][1])
               }
               else if (colorIndex === 2)
               {
                img.src =imagesi[index][2];
                console.log("this image is :" +imagesi[2][2])
               }
                });
                });
                });


                /**  like button */


                const nheart=document.querySelectorAll(".n-heart");

                nheart.forEach((button) =>
            {
                button.addEventListener("click",() => {
                    if (button.classList.contains("liked"))
                {
                    k=button.classList.contains("liked")
                    console.log("thi is liked or not liked :"+k)
                    ki=button.className;
                    console.log("thi is liked or not liked :"+ki)
                    button.classList.remove("fa-solid","liked");
                    button.classList.add("fa-regular");
                }
                else
                {
                    
                    k=button.classList.contains("liked")
                    console.log("thi is liked or not liked :"+k)
                    button.classList.remove("fa-regular");
                    button.classList.add("fa-solid","liked");
                }
                });
            });





   

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("offer-div_1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

/*

var checkshirtnamebox=document.getElementById("checkshirtnamebox")
const selectshirt=checkshirtnamebox.querySelectorAll(".select_shirt");
var productsear=checkshirtnamebox.querySelectorAll(".check_boxs")

productsear.addEventListener("click",function(event)
{
    checktextval=textContent.value;
})

var sectionnavbartop=document.querySelector(".collection_section_navbar_top")
var clickh1tag=sectionnavbartop.querySelectorAll("h1")
var navtopdiv=sectionnavbartop.querySelectorAll(".nav_top_one_div")

clickh1tag.addEventListener("click",function()
{
    for(let i=0;i<clickh1tag;i++)
    {
        navtopdiv.style.display="none"   
    }
})

*/

