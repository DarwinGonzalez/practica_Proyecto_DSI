
var boardPanel = document.getElementById('boardPanel');
var gamePanel = boardPanel.getContext('2d');
var btn = document.getElementById('btn');
var snakeSize = 10; 
var width = 550;
var height = 470;
var score = 0;
var snake;
var food;

var drawModule = (function () { 

  //Función que compone el cuerpo principal de la serpiente
  var bodySnake = function(x, y) {
        gamePanel.fillStyle = 'green';
        gamePanel.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        gamePanel.strokeStyle = 'darkgreen';
        gamePanel.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  }
  
  //Función que dibuja la manzana que se come la serpiente
  var apple = function(x, y) {
        gamePanel.fillStyle = 'yellow';
        gamePanel.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        gamePanel.fillStyle = 'red';
        gamePanel.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
  }

  //Función que muestra por pantalla la puntuación o el número de manzanas que se ha comido la serpiente
  var scoreText = function() {
    var score_text = "Score: " + score;
    gamePanel.fillStyle = 'blue';
    gamePanel.fillText(score_text, 255, height-5);
  }

  //Función que va aumentando el tamaño de la serpiente a medida que come
  var drawSnake = function() {
      var length = 4;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }  
  }
    
  //Función que dibuja los elementos del panel
  var paint = function(){
      gamePanel.fillStyle = 'lightgrey';
      gamePanel.fillRect(0, 0, width,height);
      gamePanel.strokeStyle = 'black';
      gamePanel.strokeRect(0, 0, width,height);

      btn.setAttribute('disabled', true);

      var snakeX = snake[0].x;
      var snakeY = snake[0].y;

      if (direction == 'right') { 
        snakeX++; }
      else if (direction == 'left') { 
        snakeX--; }
      else if (direction == 'up') { 
        snakeY--; 
      } else if(direction == 'down') { 
        snakeY++; }

      if (snakeX == -1 || snakeX == width/snakeSize || snakeY == -1 || snakeY == height/snakeSize || checkCollision(snakeX, snakeY, snake)) {
          //Si se produce una colisión con las paredes o con su cola se reinicia el juego
          btn.removeAttribute('disabled', true);

          gamePanel.clearRect(0,0,width,height);
          gameloop = clearInterval(gameloop);
          score = 0;
          return;          
        }
        
        //Si la serpiente llega a la comida, se crea un nuevo trozo a la cabeza de la serpiente
        if(snakeX == food.x && snakeY == food.y) {
          var tail = {x: snakeX, y: snakeY}; 
          score ++;
          //Creamos la siguiente manzana
          createFood(); 
        } else {
          var tail = snake.pop(); //pops out the last cell
          tail.x = snakeX; 
          tail.y = snakeY;
        }
       
        snake.unshift(tail); 

        for(var i = 0; i < snake.length; i++) {
          bodySnake(snake[i].x, snake[i].y);
        } 
        
        apple(food.x, food.y); 
        scoreText();
  }


  //Función que crea la comida manzana dandole una posición aleatoria dentro de las dimensiones posibles
  var createFood = function() {
      food = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (food.x===snakeX && food.y === snakeY || food.y === snakeY && food.x===snakeX) {
          food.x = Math.floor((Math.random() * 30) + 1);
          food.y = Math.floor((Math.random() * 30) + 1);
        }
      }
  }

  //Función que tiene en cuenta si la serpiente colisiona con ella misma
  var checkCollision = function(x, y, array) {
      for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
      } 
      return false;
  }

  //Función que inicia el juego y que crea el bucle en el que estará ejecutando el juego hasta que haya una colisión
  var init = function(){
      direction = 'down';
      drawSnake();
      createFood();
      gameloop = setInterval(paint, 80);
  }


    return {
      init : init
    };

    
}());