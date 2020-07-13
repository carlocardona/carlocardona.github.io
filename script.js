$(".card").on("click", function(e){
    e.preventDefault();
    console.log(e);
    $("#main").load(clickedPage);
})