function loadJSON(file,callback)
{
  let data=new XMLHttpRequest();
  data.overrideMimeType("application/json");
  data.open("GET",file,true);
  data.onreadystatechange=function() 
  {
  	if (data.readyState===4 && data.status=="200")
    {
  		callback(data.responseText);
  	 }
  }
  data.send(null);
}

  loadJSON("data.json",function(text) 
   {
	let data=JSON.parse(text);
	console.log(data);

    /*left div*/
    ram(data.left1);
    ram1(data.left2);
    
    /*right div*/
    ram2(data.right);    
});
   var main=document.querySelector(".main");

   var left=document.createElement("div");
   left.classList.add("left");
   main.appendChild(left);

   /*var right=document.createElement("div");
   right.classList.add("right");
   main.appendChild(right);*/

   function ram(details1) {

   // var left=document.createElement("div");
   // left.classList.add("left");
   // main.appendChild(left);

   var left1=document.createElement("div");
   left1.classList.add("left1");
   left.appendChild(left1);

   let image=document.createElement("img");
   image.src=details1.image;
   left1.appendChild(image);

   var name=document.createElement("h2");
   name.textContent=details1.myname;
   left1.appendChild(name);
   
   var occ=document.createElement("h3");
   occ.textContent=details1.designation;
   left1.appendChild(occ);

   left.appendChild(document.createElement("hr"));
}

  
  // var main=document.querySelector(".main");
   function ram1(details2) {

   /*var left=document.createElement("div");
   left.classList.add("left");
   main.appendChild(left);*/

   var left2=document.createElement("div");
   left2.classList.add("left2");
   left.appendChild(left2);

   var fname=document.createElement("p");
   fname.textContent=details2.fname;
   left2.appendChild(fname);

   var email=document.createElement("p");
   email.textContent=details2.email;
   left2.appendChild(email);

   var phoneno=document.createElement("p");
   phoneno.textContent=details2.phoneno;
   left2.appendChild(phoneno);

   var address=document.createElement("p");
   address.textContent=details2.address;
   left2.appendChild(address);

   var state=document.createElement("p");
   state.textContent=details2.state;
   left2.appendChild(state);

   var country=document.createElement("p");
   country.textContent=details2.country;
   left2.appendChild(country);

 }
   
   function ram2(details3) {

   var right=document.createElement("div");
   right.classList.add("right");
   main.appendChild(right);

   var crobj=document.createElement("h2");
   crobj.textContent=details3.crobj;
   right.appendChild(crobj);

   var crobjdes=document.createElement("p");
   crobjdes.textContent=details3.crobjdes;
   right.appendChild(crobjdes);

   right.appendChild(document.createElement("hr"));

   var aprofile=document.createElement("h2");
   aprofile.textContent=details3.aprofile;
   right.appendChild(aprofile);

   var graduation=document.createElement("h3");
   graduation.textContent=details3.graduation;
   right.appendChild(graduation);

   var graddes=document.createElement("p");
   graddes.textContent=details3.graddes;
   right.appendChild(graddes);
   // console.log(graddes);

   var inter=document.createElement("h3");
   inter.textContent=details3.inter;
   right.appendChild(inter);

   var interdes=document.createElement("p");
   interdes.textContent=details3.interdes;
   right.appendChild(interdes);

   var ssc=document.createElement("h3");
   ssc.textContent=details3.ssc;
   right.appendChild(ssc);

   var sscdes=document.createElement("p");
   sscdes.textContent=details3.sscdes;
   right.appendChild(sscdes);

   right.appendChild(document.createElement("hr"));

   var tc=document.createElement("h2");
   tc.textContent=details3.tc;
   right.appendChild(tc);

   var pl=document.createElement("h3");
   pl.textContent=details3.pl;
   right.appendChild(pl);

   var pldes=document.createElement("p");
   pldes.textContent=details3.pldes;
   right.appendChild(pldes);

   var wt=document.createElement("h3");
   wt.textContent=details3.wt;
   right.appendChild(wt);

   var wtdes=document.createElement("p");
   wtdes.textContent=details3.wtdes;
   right.appendChild(wtdes);

   right.appendChild(document.createElement("hr"));

   var ach=document.createElement("h3");
   ach.textContent=details3.ach;
   right.appendChild(ach);

   var achdes=document.createElement("p");
   achdes.textContent=details3.achdes;
   right.appendChild(achdes);

   right.appendChild(document.createElement("hr"));

   var hobbies=document.createElement("h3");
   hobbies.textContent=details3.hobbies;
   right.appendChild(hobbies);

   var hobdes=document.createElement("p");
   hobdes.textContent=details3.hobdes;
   right.appendChild(hobdes);

   right.appendChild(document.createElement("hr"));

   var strengths=document.createElement("h3");
   strengths.textContent=details3.strengths;
   right.appendChild(strengths);

   var strdes=document.createElement("p");
   strdes.textContent=details3.strdes;
   right.appendChild(strdes);

}

 
   

