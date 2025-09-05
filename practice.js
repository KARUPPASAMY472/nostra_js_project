
                const imagesi =[
                ["images/shirt4.1.jpg","images/shirt4.2.jpg","images/shirt4.3.jpg"],
                ["images/shirt3.1.jpg","images/shirt3.2.jpg","images/shirt3.3.jpg"],
                ["images/shirt2.1.jpg","images/shirt2.2.jpg","images/shirt2.3.jpg"],
                ["images/shirt5.1.jpg", "images/shirt5.2.jpg", "images/shirt5.3.jpg"],
                ["images/shirt6.1.jpg","images/shirt6.2.jpg","images/shirt6.3.jpg"],
                ["images/shirt8.1.jpg","images/shirt8.2.jpg","images/shirt8.3.jpg"]
            ];

const container12=document.querySelectorAll(".container_12");
container12.forEach((conati,index) =>
{
    const img=conati.querySelector("img")
    const buttonn=conati.querySelectorAll(".color-btn")
    buttonn.forEach(buttos => {
        buttos.addEventListener("click",() =>
        {
            const choosecol=parseInt(buttos.dataset.color);
            if(choosecol === 0)
            {
                img.src = imagesi[index][0];
            }
            else if(choosecol === 1)
            {
                img.src = imagesi[index][1];
            }
            else if(choosecol === 2)
            {
                img.src = imagesi[index][2];
            }
        })
    }
    )
    
})