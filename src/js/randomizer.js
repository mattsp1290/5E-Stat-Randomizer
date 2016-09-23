
function calculateCost(pointArray) {
  var cost = 0;
  for (var i = 0, len = pointArray.length; i < len; i++){
    cost += getPointCost(pointArray[i]);
  }
  return cost;
}

function generateScore(points) {
  var pointCosts = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
  };

  var pointArray = [8,8,8,8,8,8];
  while (calculateCost(pointArray) != points){
    var position = Math.floor(Math.random() * pointArray.length);
    var newValue = getPossiblePoints()[Math.floor(Math.random() * getPossiblePoints().length)];
    pointArray[position] = newValue;
  }
  return pointArray;
}

function generateScores(points){
  for (var i = 1, len = 7; i < len; i++){
    for (var j = 1, jlen = 7; j < jlen; j++){
      var scores = generateScore(points);
      scores = scores.sort(function(a,b){
        if (a > b) {
          return -1;
        }
        if (a < b) {
          return 1;
        }
        return 0;
      });
      var printScores = "<p>";
      for (var k = 0, klen = scores.length; k < klen; k++) {
        if (k != 0) {
          printScores += ", ";
        }
        printScores += scores[k];
      }
      printScores += "</p>";
      $('#' + i + '-' + j).html(printScores);
    }
  }
}

function getPointCost(point){
  var pointCosts = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
  };
  return pointCosts[point];
}

function getPossiblePoints(){
  return [8,9,10,11,12,13,14,15];
}

$( document ).ready(function() {
    generateScores(27);
});
