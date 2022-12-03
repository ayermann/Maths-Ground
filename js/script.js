const taskMultiple = document.querySelector('.multiple__task');
const taskDividing = document.querySelector('.dividing__task');
const taskExcercises = document.querySelector('.excercises__task');
const taskDue = document.querySelector('.taskDue');
const answerM = document.querySelector('.answerM');
const answerD = document.querySelector('.answerD');
const answerE = document.querySelector('.answerE');
const task = document.querySelector('.task');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

let n1 = Math.floor(Math.random(0)*10);
let n2 = Math.floor(Math.random(0)*10);
let scoreC = 0;
score.innerHTML=scoreC;

function multipleTask(){
taskMultiple.style.display='block';
taskDividing.style.display='none';
taskExcercises.style.display='none';
taskDue.innerHTML=n1+"*"+n2;
}
document.addEventListener('keydown', checkKey);
function checkKey(event){
	if(event.keyCode == 13){
		checkAnswerM()
	}
}
function checkAnswerM(){
	if(answerM.value == n1*n2){
	result.innerHTML = 'Правильно!'
	scoreC++;
	score.innerHTML=scoreC;
n1 = Math.floor(Math.random(0)*10);
n2 = Math.floor(Math.random(0)*10);
	taskDue.innerHTML=n1+"*"+n2;
	answerM.value="";
}else{
	result.innerHTML = 'НЕ Правильно!'
	answerM.value="";
	scoreC = 0;
score.innerHTML=scoreC;
}
}

function dividingTask(){
	taskDividing.style.display='block';
	taskMultiple.style.display='none';
	taskExcercises.style.display='none';
	}

	function excercisesTask(){
		taskExcercises.style.display='block';
		taskMultiple.style.display='none';
		taskDividing.style.display='none';
		}