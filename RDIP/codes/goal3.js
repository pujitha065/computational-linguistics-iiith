var n1 = ["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple","some students like to study in the night","at night some students like to study","John and Mary went to church","Mary and John went to church","John went to church after eating","after eating John went to church","John after eating went to church","did he go to market","he did go to market","the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics","John goes to the library and studies","John studies and goes to the library","John ate an apple so did she","she ate an apple so did John","the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book","I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]

var i1 = ["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम","राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी","मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम","राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम","बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को","एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब","एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]
var newArray= ["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम","राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी","मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम","राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम","बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को","एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब","एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब","John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple","some students like to study in the night","at night some students like to study","John and Mary went to church","Mary and John went to church","John went to church after eating","after eating John went to church","John after eating went to church","did he go to market","he did go to market","the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics", "John goes to the library and studies","John studies and goes to the library", "John ate an apple so did she","she ate an apple so did John", "the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book", "I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her" ];


$("#gf").hide();
$("#c").hide();

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
  
  var p = Math.floor(Math.random()*i1.length);
  var q = i1[p];
  var r = s(q);
  button(r);
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
    function b() {
      document.getElementById("rs").innerHTML = " "
      var np = n.split(" ")
      for( var j = 0; j <= np.length-1; j++) {
    var button = document.createElement("button");
     button.innerHTML = np[j];
     button.className += "ps"
     var c = document.getElementById("rs");
     c.appendChild(button);
 }
}
 b();
 function a(){
  document.getElementById("gf").innerHTML = null;
 $(".ps").click(function(){
      $(this).hide()
    var z = $(this).text();
      document.getElementById("rm2").innerHTML += z + " ";
      document.getElementById("gs").innerHTML = "<b>Formed Sentence</b>"+"<i>(after selection)</i>";
      $("#gf").show();
      document.getElementById("gf").innerHTML = "Re-form the sentence"
     })
     document.getElementById("rm2").innerHTML = " "
     document.getElementById("gs").innerHTML = " "
     $("#gf").hide();
     $("#gf").click(function(){
    $("#rm2").hide();
    $("#gs").hide();
    $("#gf").hide();
    b();
    a();
    $("#rm2").show();
    $("#gs").show();
})
     }
     a();
     $("#c").show();

function cs(){
  
        var str= gs.trim();
    for(let i=0;i<newArray.length;i++){
        var str1 = newArray[i];
         console.log(i, str1.localeCompare(str), str, str.length, str1, str1.length)
        var n = str1.localeCompare(str);
        if (n == 0) {
            document.getElementById('s8').innerHTML = "RIGHT";
            
            return;
        }
    }
    document.getElementById('s9').innerHTML = "WRONG";
    }
  }