function populate()
{
  if(quiz.isEnded())
  {
    showScores();
  }
  else
  {
    //show question
    var element =  document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i< choices.length; i++)
    {
      var element = document.getElementById("choice"+i);
      element.innerHTML = choices[i];
      guess("btn"+ i, choices[i]);
    }
    showProgress();
  }
}

function guess(id, guess)
{
  var button = document.getElementById(id);
  button.onclick = function()
  {
    quiz.guess(guess);
    populate();
  }
}

function showProgress()
{
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " +currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores()
{
  document.getElementById("demo").innerHTML = Date();
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id='score'> Your Scores: " +quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question("What is my name?", ["Ebbie", "Donald trump","Barack Obama","Bernie Sanders"], "Ebbie"),
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
  new Question("There are _ main components of object oriented programming", ["1", "6", "2", "4"], "4")
];

var quiz = new Quiz(questions);
populate();
