function setupPen(mode){
  $(".column").mouseover(function(){
    if (mode.toUpperCase() == "FADE"){
      $(this).css("background-color","black");
      var op = $(this).css("opacity");   
      $(this).css("opacity", op*1.3);
    }
  
    if (mode.toUpperCase() == "RANDOM"){
      $(this).css("background-color", getRandomColor());
      $(this).css("opacity", 1);
    }
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
      mode = window.prompt("Random or Fade?")
  createGrid(size);
  setupPen(mode);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};

