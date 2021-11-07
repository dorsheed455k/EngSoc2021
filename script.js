function decrementValue1()
{
    var value = parseInt(document.getElementById('number1').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0) {
      value = 0;
    } 
    document.getElementById('number1').value = value;
}

function incrementValue2()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number2').value = value;
}

function decrementValue2()
{
    var value = parseInt(document.getElementById('number2').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0) {
      value = 0;
    } 
    document.getElementById('number2').value = value;
}

function incrementValue3()
{
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number3').value = value;
}

function decrementValue3()
{
    var value = parseInt(document.getElementById('number3').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0) {
      value = 0;
    } 
    document.getElementById('number3').value = value;
}

function incrementValue4()
{
    var value = parseInt(document.getElementById('number4').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number4').value = value;
}

function decrementValue4()
{
    var value = parseInt(document.getElementById('number4').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0) {
      value = 0;
    } 
    document.getElementById('number4').value = value;
}

b1= document.getElementById('number1').value;
b2 = document.getElementById('number2').value;
b3 = document.getElementById('number3').value;
b4 = document.getElementById('number4').value;

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Building', 'Occupants'],
  ['Business and Information Technology Building	', 5],
  ['Energy Systems and Nuclear Science Research Centre	', 10],
  ['Science Building', 20],
  ['Software and Informatics Research Centre	', 40],
]);

var options = {'title':'Current Building Occupancy', 'width':550, 'height':400};


  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}


function showResults(){
  let answers = document.querySelectorAll(".poll .answers .answer");
  for(let i=0;i<answers.length;i++){
    let percentage=0;
    if(i==poll.selectedAnswer){
      /*
      percentage=Math.round(
        (poll.answersWeight[i]+1)/ (poll.pollCount+1)
        
      );
      */
      poll.pollCount=poll.pollCount+1;
      poll.answersWeight[i]=poll.answersWeight[i]+1;
      percentage=poll.answersWeight[i];
    }else{
    /*
    percentage=Math.round(
      (poll.answersWeight[i])/(poll.pollCount+1)
    );
    */
    poll.pollCount=poll.pollCount+1;
    percentage=poll.answersWeight[i];
  }
  answers[i].querySelector(".percentage-value").innerText=percentage;
}
}




