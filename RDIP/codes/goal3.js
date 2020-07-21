var n2 = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],["some students like to study in the night","at night some students like to study"],["John and Mary went to church","Mary and John went to church"],["John went to church after eating","after eating John went to church","John after eating went to church"],["did he go to market","he did go to market"],["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],["John goes to the library and studies","John studies and goes to the library"],["John ate an apple so did she","she ate an apple so did John"],["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];
var n1 = ["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market","the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error","I told her that I bought a book yesterday"]
var i2 = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var i1=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया","बिल्लियों को मारकर कुत्ता सो गया"  ,"एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है  "]


$("#gf").hide();
$("#c").hide();
$("#cs").hide();
$("#w").hide();
$("#hs").hide();


function display(p) {
  
  if(p == "eng"){
    document.getElementById("rm").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br>"
    document.getElementById("rm1").innerHTML ="<i>(select the buttons in proper order)</i>"
    es1()
  }
  else if(p == "hin"){
    document.getElementById("rm").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words"+"<br>"
    document.getElementById("rm1").innerHTML ="<i>(select the buttons in proper order)</i>"
    hs1()
  }
  else{
    alert("Select language");
  }
}
function es1() {
  
  var p = Math.floor(Math.random()*n1.length);
  var q =n1[p];
  var r = s(q);
  button(r);
}

function hs1() {
  
  var p1 = Math.floor(Math.random()*i1.length);
  var q1 = i1[p1];
  var r1 = s(q1);
  button(r1);
}
function s(n) {
  
  var np = n.split(' ');                      
  for(var j=0 ; j<=np.length-1 ; ++j) {
    var k = Math.floor(Math.random()*np.length);      
    var temp = np[j];            
    np[j] = np[k];
    np[k] = temp;
  }
  string = np.join(' ');                
  return string;                        
}
function button(n) {
  var count =0;
    function b() {
      document.getElementById("rs").innerHTML = " "
      var np = n.split(" ")
      for( var j = 0; j <= np.length-1; j++) {
    var button = document.createElement("button");
     button.innerHTML = np[j];
     count++;
     button.className += "ps"
     var c = document.getElementById("rs");
     c.appendChild(button);
 }
}
 
 b();
 var ct=count;
 function a(){
  document.getElementById("gf").innerHTML = null;
  document.getElementById("cs").innerHTML = null;
  var ct1=0;
  var st=" "
  $(".ps").click(function(){
    var x =$(this).text();
    document.getElementById("cs").innerHTML += x + " ";
    $(this).hide();
    ct1 = ct1+1;
    document.getElementById("rm2").innerHTML += x + " ";
      document.getElementById("gs").innerHTML = "<br>"+"<b>Formed Sentence</b>"+"<i>(after selection)</i>"+"<br>";
      $("#gf").show();
      document.getElementById("gf").innerHTML = "Re-form the sentence"
      st =st+x+" "
      count(st)



    })
document.getElementById("rm2").innerHTML = " "
     document.getElementById("gs").innerHTML = " "
     document.getElementById("am").innerHTML = " "
     document.getElementById("w").innerHTML = " "
     $("#gf").hide();
     $("#c").hide();
     $("#gf").click(function(){
    $("#rm2").hide();
    $("#gs").hide();
    $("#gf").hide();
    $("#c").hide();
    $("#hs").hide();

    b();
    a();
    $("#rm2").show();
    $("#gs").show();
})
function count(n){
        if(ct == ct1){
          $("#c").show();
          var cn1 = 0;
          $("#c").click(function(){
            var ind = document.getElementById("select").selectedIndex;
            var val = document.getElementById("select")[ind].value;
            var s11 = n.trim(); 
            if(val == "eng"){
            for (var i = 0; i < 10; i++) {
              for (var j = 0; j < n2[i].length; j++) {
                if(s11 == n2[i][j]){
                  cn1++;
                }
              }
            }
            if(cn1 == 1){
              $("#am").show()
              $("#w").hide();
              document.getElementById("am").innerHTML = "Right answer!!!"
            }
            else{
              $("#w").show();
              $("#hs").show();
              document.getElementById("w").innerHTML = "Wrong answer!!!"
              document.getElementById("hs").innerHTML= "Get Correct Answer"
            }
          }
          else{
            for (var i = 0; i < 7; i++) {
              for (var j = 0; j < i2[i].length; j++) {
                if(s11 == i2[i][j]){
                  cn1++;
                }
              }
            }
            if(cn1 == 1){
              $("#am").show()
              $("#w").hide();
              $("#hs").hide();
              document.getElementById("am").innerHTML = "Right answer!!"
            }
            else{
              $("#w").show();
              $("#hs").show();
              document.getElementById("w").innerHTML = "Wrong answer!!"
              document.getElementById("hs").innerHTML= "Get Correct Answer"
            }
          }
          })
        }
      }
     }
     a();
}

        
  