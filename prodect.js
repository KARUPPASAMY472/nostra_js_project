

const containermain=document.getElementById("colle")
    const containerdiv=containermain.querySelectorAll(".content")
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
        }
        else
        {
            containerdiv[i].style.display="block";
            
        }

    }
})    




    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const products = document.querySelectorAll(".shirt_div");

    function filterProducts() {
      let selected = [];
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          selected.push(checkboxes[i].value);
        }
      }

      products.forEach(product => {
        const tags = product.getAttribute("data-tags").split(","); // convert to array

        if (selected.length === 0) {
          product.classList.remove("hidden"); // show all if nothing selected
        } else {
          // check if any selected value is inside tags
          const match = selected.some(value => tags.includes(value));
          if (match) {
            product.classList.remove("hidden");
          } else {
            product.classList.add("hidden");
          }
        }
      });
    }

    checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));


    


    var acc = document.getElementsByClassName("htags");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("mouseover", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    }
       else {
      panel.style.display = "block";
      if(panel.style.display === "block")
      {
       
      panel.style.display = "block"; 
      }
      else if(panel[i] === 0)
      {
        panel.style.display = "none";
      }
    }
  });
}
