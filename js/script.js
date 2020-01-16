   
   var ol=document.getElementById('ol');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');


      var app={
                questions:[
                          {q:'HTML stands for?', options:['Hyper Text Markup Language','High Text Markup Language','Hyper Tabular Markup Language','None of these'],answer:1},

                          {q:'which of the following tag is used to mark a begining of paragraph ?',options:['TD','br','P','tr'],answer:3},

                          {q:'Correct HTML tag for the largest heading is ?',options:['h4','h1','h8','h9'],answer:2}
                          ],
                index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;      
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="Quiz Over......!!!"      
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="Correct";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML="Wrong";
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ol.children.length;i++){
                       	    ol.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ol.children.length;i++){
                       	    ol.children[i].style.pointerEvents="auto";
                       	    ol.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.questions.length+"/"+this.score;
                }
 
           }


           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 




         var count = 30;
         var interval = setInterval(function(){
           document.getElementById('count').innerHTML=count;
           count--;
           if (count === 0){
             clearInterval(interval);
             document.getElementById('count').innerHTML='Done';
             // or...
             alert("You're out of time!");
           }
         }, 1000);


function waitForDOM(){
   //if the list of pages is grather than 0 then
//add the new tab here and create the event listener
gBrowser.addEventListener('DOMContentLoaded',pageLoaded,true);
}


         var score = 0;
var highscore = localStorage.getItem("highscore");

if(highscore !== null){
    if (score > highscore) {
        localStorage.setItem("highscore", score);      
    }
}
else{
    localStorage.setItem("highscore", score);
}