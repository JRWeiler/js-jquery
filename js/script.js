function setupPen(color){
  $(".column").mouseover(function(){
    $(this).css("background-color",color);
  });
  
};



function createGrid(size) 
{   
    $('.row').remove();
    var squareSize = 600 / size;
    for (var i = 0; i < size; i++)
    {
        $('.grid').append('<div class="row"></div>');
    }
    for (var j = 0; j < size; j++)
    {
        $('.row').append('<div class="column"></div>');
    }

    $('.column').css('height', squareSize + 'px');
    $('.column').css('width',squareSize + 'px');
}

function resetGrid(){
  var size = window.prompt("How many squares do you want?"),
      color = window.prompt("Enter a color");
  createGrid(size);
  setupPen(color);
}

