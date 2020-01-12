var quizBox=document.getElementById('questionBox');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');


    
    var quizBox=document.getElementById('questionBox');
    var app= {
            questions:[
                        {q:'HTML stands for?',options:['Hyper Text Markup Language', 'High Text Markup Language',
                        'Hyper Tabular Markup Language','None of these'],answer:1},
                    

                        {q:'which of the following tag is used to mark a begining of paragraph ?'
                        ,options:['<TD>', '<br>','<P>','<TR>'],answer:3},
                


                        {q:'Correct HTML tag for the largest heading is',options:['<head>', 
                        '<h6>','<heading>','<h1>'],answer:4},
            ],

            index:0,
        load:function(){
            quizBox.innerHTML=this.questions[this.index].q;
            op1.innerHTML=this.questions[this.index].options[0];
            op2.innerHTML=this.questions[this.index].options[1];
            op3.innerHTML=this.questions[this.index].options[2];
            op4.innerHTML=this.questions[this.index].options[3];

        },
        check:function(ele){

            var id=ele.id.split('');
            console.log(id);

            if(id[id.length-1]==this.questions[this.index].answer){
                console.log("Correct")
            }
            else{
                console.log("Incorrect")
            }
        }
    }

    window.onload=app.load();
    function button(ele){
        app.check(ele);
    }
