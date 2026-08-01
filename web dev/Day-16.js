document.getElementById("btn").addEventListener("click", function() 
{
    document.getElementById("title").innerHTML = "You clicked the button!";
    document.getElementById("text").innerHTML = "The paragraph has changed.";
});

document.getElementById("btn2").addEventListener("click", function()
{
    document.getElementById("title").style.color = "red";
    document.body.style.backgroundColor = "lightblue";
});