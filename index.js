function loadJSON(file,callback) {
  let data=new XMLHttpRequest();
  data.overrideMimeType("application/json");
  data.open("GET",file,true);
  data.onreadystatechange=function() {
  	if (data.readyState===4 && data.status=="200") {
  		callback(data.responseText);
  	}
  }
  data.send(null);
}

loadJSON("data.json",function(text) {
	let data=JSON.parse(text);
	console.log(data);
	//console.log(data.card1.image);
    ram(data.card1);
    ram1(data.card2);
   
});

 var cards=document.querySelector(".cards");
 function ram(details1) {

   let card=document.createElement("div");
   card.classList.add("card1");
   cards.appendChild(card);

   var image=document.createElement("img");
   image.src=details1.image;
   card.appendChild(image);

   card.appendChild(document.createElement("hr"));

   var name=document.createElement("h2");
   name.textContent=details1.name;
   card.appendChild(name);

   var occ=document.createElement("h3");
   occ.textContent=details1.occ;
   card.appendChild(occ);

   var anchor=document.createElement("a");
   anchor.href="resume.html";
   card.appendChild(anchor);

   var profile=document.createElement("h3");
   profile.textContent=details1.profile;
   anchor.appendChild(profile);

 
 }

 function ram1(details2) {

   let card=document.createElement("div");
   card.classList.add("card2");
   cards.appendChild(card);

   var image=document.createElement("img");
   image.src=details2.image;
   card.appendChild(image);

   card.appendChild(document.createElement("hr"));

   var name=document.createElement("h2");
   name.textContent=details2.name;
   card.appendChild(name);

   var occ=document.createElement("h3");
   occ.textContent=details2.occ;
   card.appendChild(occ);

   var anchor=document.createElement("a");
   anchor.href="resume.html";
   card.appendChild(anchor);

   var profile=document.createElement("h3");
   profile.textContent=details2.profile;
   anchor.appendChild(profile);

 }