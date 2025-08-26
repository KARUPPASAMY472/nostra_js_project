
    var containermain=document.getElementById("colle")
    const containerdiv=containermain.querySelectorAll(".shirt_div");
    var productsearch=document.getElementById("productsearch")

    
productsearch.addEventListener("keyup",function(event)
{
    var searchtext=event.target.value.toUpperCase()
    for(var i=0;i<containerdiv.length;i=i+1)
    {
        var productname = containerdiv[i].querySelector("h4").textContent

        if (productname.toUpperCase().indexOf(searchtext)<0)
        {
            containerdiv[i].style.display="none";
            document.getElementById("h1tag1").style.display="block";
            /*
            if (productname.toUpperCase().indexOf(searchtext)===-1)
            {
            document.getElementById("h1tag1").style.display="block";
            }
            else
            {
                
            document.getElementById("h1tag1").style.display="none";
            }
            */
        }
        else
        {
            containerdiv[i].style.display="block";
            
            document.getElementById("h1tag1").style.display="none";
            
        }

    }
})    
