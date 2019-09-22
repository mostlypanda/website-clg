
 /*  var x=1;
//  document.querySelector('#showcase').style.backgroundImage='url(index'+x+'.jpg)';
  
  while(1){
  x++;
  console.log(10);
 setInterval(10000,fxn(x))
  document.getElementById("showcase").style.backgroundImage='url(index'+x+'.jpg)';
if(x>7)
x=1;
}
function fxn(x){

    console.log(10);
    document.getElementById("showcase").style.backgroundImage='url(index'+x+'.jpg)';

}*/

// Or with jQuery
      
var x=0;      
function myFunction() {
x++;  
if(x>10)
x=1;
 // document.body.style.backgroundColor = "#f3f3f3";
  document.querySelector('#showcase').style.backgroundImage = 'url(index'+x+'.jpg)';

};

function card(){
document.getElementById("p").innerHTML='<p>Vision of the Institute is To be a role-model in technical education and research, responsive to global challenges.<br>Mission of the Institute To impart quality technical education that develops innovative professionals and entrepreneursTo undertake research that generates cutting-edge technologies and futuristic knowledge, focusing on the socio-economic needs<br><br>NITK was established in the year 1963.The institute recognizes the significance of Institute-industry Interface and promotes interaction with the industry through student placements, consultancy services, joint research projects and jointly organizing workshops, seminars, conferences, etc.<br><br> There are a number of projects that are being carried out by the institute provided by DST, MHRD, CSIR, AICTE and UGC. Teaching and research programs are supported by a central library.<br><br><br>Infrastructure:-<br><br>Library facility<br><br>The library contains 100000 books, 6028 back volumes and 3659 e-books. The library subscribes to 158 prints and approximately 2800 online journals in the fields of science, management and technology. The library remains accessible to its users 24 x 7.<br><br>Computing facilities<br><br>The Centre of Computing and Networking (CCN) is the centralized facility for students, faculty and staff of the institute. It has been provided with 24 hours internet facility with a 2 Mbps leased line.<br>Senate hall<br><br>The senate hall makes the institute well-equipped to hold conferences, seminars, workshops, etc. All the lectures of guest faculty and corporate managers are arranged <br><br>Sports complex<br><br>The complex has an expansive and lush green playground comprising basket ball, volley ball, lawn tennis, badminton, and racquet ball courts, besides cricket and football grounds. It also has a mini-gymnasium and a 400 m athletic track.<br><br><button id="button" ><a href="courses.html">click for courses</a></button></p>';
} 
  function fxn(){
    document.getElementById('ds').innerHTML='<div class="well well-lg">The most logical subject usually called as a  backbone of Computer science and engineering</div>';
  }
  
  function fc1(){
    document.getElementById('ds').innerHTML='<div class="well well-lg">OOPs is closer to hardware than most other programming languages.This makes it useful</div>';
  }
  
  function fc2(){
    document.getElementById('as').innerHTML='<div class="well well-lg">It is a work involved in developing a website for the internet and in intranet</div>';
    document.getElementById('ds').style.display=none;
  }
  
  function fc3(){
    document.getElementById('as').innerHTML='<div class="well well-lg">It is a process of examining the data sets in order to draw conclusions about the <br> information they contain</div>';
    document.getElementById('ds').style.display=none;
  }
  
  function fc4(){
    document.getElementById('as').innerHTML='<div class="well well-lg">It is the program that manages the computer resourses especially the allocation of <br> those resources among other programs </div>';
    document.getElementById('ds').style.display=none;
  }
  
  function fc5(){
    document.getElementById('as').innerHTML='<div class="well well-lg">It is a controller programmed and controlled by real time operating system</div>';
    document.getElementById('ds').style.display=none;
  }
  function funct1()
  {
    window.alert("12 students have been placed in GOOGLE upto now");
  }

  function funct2()
  {
    window.alert("45 students have been placed in AMAZON upto now");
  }
  function funct3()
  {
    window.alert("15 students have been placedin MICROSOFT upto now");
  }
  function funct4()
  {
    window.alert("4 students have been placed in APPLE upto now");
  }
  function funct5()
  {
    window.alert("89 students have been placed in HERO upto now");
  }
  function funct6()
  {
    window.alert("5 students have been placed in MERCEDQUES upto now");
  }
  function sarthak()
  {
    window.alert("your response hove been submitted, Thanks for contacting us ");
  }
