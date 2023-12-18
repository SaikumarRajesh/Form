function labelcreate(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
  }
  
  function linebreakers(tagname) {
    var ele = document.createElement(tagname);
    return ele;
  }
  
  function inputele(tagname, attrname, attrvalue, attrname1, attrvalue1) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.setAttribute(attrname1, attrvalue1);
    return ele;
  }

  function section(tagname,attrname,attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele
  }

  function option(tagname,attrname,attrvalue)
  {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
  }
  

  function div(tagname,attrname,attrvalue){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
  }

var titleElement = document.createElement("h1");
titleElement.setAttribute("id", "title");
titleElement.textContent = "HTML Form";

var descriptionElement = document.createElement("p");
descriptionElement.setAttribute("id", "description");

descriptionElement.textContent = "This page is an Example of HTML Form submission to add data in Table";

var Headdiv=div("div", "class", "Header-container")
Headdiv.append(titleElement,descriptionElement)
document.body.append(Headdiv);


  var form=document.createElement('form')
  form.setAttribute('id', 'form')
 
  var fname = labelcreate("label", "for", "fname", "Firstname: ");
  var fninput = inputele("input", "type", "text", "id", "first-name");
  fninput.setAttribute("required", "true");
  fninput.setAttribute("placeholder", "Enter your first name");
  var br1 = linebreakers("br");
  
  var lname = labelcreate("label", "for", "lname", "Lastname: ");
  var lninput = inputele("input", "type", "text", "id", "last-name");
  lninput.setAttribute("required", "true");
  lninput.setAttribute("placeholder", "Enter your last name");
  var br2 = linebreakers("br");
  
  var address = labelcreate("label", "for", "address", "Address: ");
  var adinput = inputele("textarea", "id", "address");
  adinput.setAttribute("required", "true");
  adinput.setAttribute("placeholder", "Enter your Address");
  var br3 = linebreakers("br");
  
  var pincode = labelcreate("label", "for", "pincode", "Pincode: ");
  var pininput = inputele("input", "type", "text", "id", "pincode");
  pininput.setAttribute("required", "true");
  pininput.setAttribute("placeholder", "Enter your pincode");
  var br4 = linebreakers("br");
  
  
  var gender = labelcreate("label", "for", "gender", "Gender: ");
  var genSelect = section("div", 'id', 'gender');
  var genMale = inputele("input", "type", "radio", "name", "gender");
  genMale.setAttribute("id", "male"); 
  var maleLabel = labelcreate("label", "for", "male", "Male");
  var genFemale = inputele("input", "type", "radio", "name", "gender");
  genFemale.setAttribute("id", "female"); 
  var femaleLabel = labelcreate("label", "for", "female", "Female");
  genSelect.append( genMale,maleLabel,genFemale,femaleLabel);
  var br5 = linebreakers("br");

  var choiceOfFood = labelcreate("label", "for", "food", "Choice of food: ");
  var foodinput = section("select", "id", "food");
  foodinput.setAttribute("multiple", "multiple"); 
  var food0=option("option","value",'Dosa')
  food0.innerHTML='Dosa'
  var food1=option("option","value",'Puri')
  food1.innerHTML='Puri'
  var food2=option("option","value",'Pongal')
  food2.innerHTML='Pongal'
  var food3=option("option","value",'Idli')
  food3.innerHTML='Idli'
  var food4=option("option","value",'chapati')
  food4.innerHTML='Chapati'
  foodinput.append(food0,food1,food2,food3,food4)
  var br6 = linebreakers("br");
  
  var state = labelcreate("label", "for", "state", "State: ");
  var stinput = section("select", "id", "state");
  var state0=option("option","value",'selectstate')
  state0.innerHTML='Select state'
  var state1=option("option","value",'kerala')
  state1.innerHTML='Kerala'
  var state2=option("option","value",'Tamil Nadu')
  state2.innerHTML='Tamil Nadu'
  var state3=option("option","value",'Karnataka')
  state3.innerHTML='Karnataka'
  var state4=option("option","value",'Andra Pradesh')
  state4.innerHTML='Andra Pradesh'
  var state5=option("option","value",'Telangana')
  state5.innerHTML='Telangana'
  stinput.append(state0,state1,state2,state3,state4,state5)
  var br7 = linebreakers("br");
  
  var country = labelcreate("label", "for", "country", "Country: ");
  var cninput = section("select","id", "country");
  var country0=option("option","value",'select cn')
  country0.innerHTML='Select country'
  var country1=option("option","value",'india')
  country1.innerHTML='India'
  cninput.append(country0,country1)
  var br8= linebreakers("br");

  var Button = inputele("button", "type", "submit","id", "submit");
  Button.innerHTML="Submit"
  Button.classList.add("btn", "btn-primary");


  
  var div0=div("div", "class", "form-container")
  var div1=div('div','class','form-group')
  div1.append(fname,fninput,br1,)
  var div2=div('div','class','form-group')
  div2.append(lname,lninput,br2)
  var div3=div('div','class','form-group')
  div3.append( address,adinput,br3)
  var div4=div('div','class','form-group')
  div4.append(pincode,pininput,br4)
  var div5=div('div','class','form-group')
  div5.append(gender,genSelect,br5)
  var div6=div('div','class','form-group')
  div6.append( choiceOfFood,foodinput,br6)
  var div7=div('div','class','form-group')
  div7.append( state,stinput,br7)
  var div8=div('div','class','form-group')
  div8.append(country,cninput, br8);
  var div9 = div('div','class','form-group')
  div9.append(Button)



form.append(div1,div2,div3,div4,div5,div6,div7,div8,div9)
div0.append(form)
document.body.append(div0)

var table = document.createElement('table');
table.setAttribute('id', 'dataTable'); 
table.setAttribute('class', 'table'); 



var thead = document.createElement('thead');
var headerRow = document.createElement('tr');

['First Name', 'Last Name', 'Address', 'Pincode', 'Gender', 'Choice of Food', 'State', 'Country'].forEach(function(header) {
  var th = document.createElement('th');
  th.textContent = header;
  headerRow.append(th);
});

thead.append(headerRow);
table.append(thead);

var tbody = document.createElement('tbody');
table.append(tbody); 

var div=div("div", "class", "table-container")
div.append(table)
document.body.append(div);


document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  var fname = document.getElementById('first-name').value;
  var lname = document.getElementById('last-name').value;
  var address = document.getElementById('address').value;
  var pincode = document.getElementById('pincode').value;
  var genderMale = document.getElementById('male');
  var genderFemale = document.getElementById('female');
  var gender;
  if (genderMale.checked) {
    gender = genderMale.nextSibling.textContent.trim();;
  } else if (genderFemale.checked) {
    gender = genderFemale.nextSibling.textContent.trim();;
  } else {
    gender = "Not specified"; 
  }

  var food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value).join(', ');
  var state = document.getElementById('state').value;
  var country = document.getElementById('country').value;

  var tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

  var newRow = tableBody.insertRow(tableBody.rows.length);
  var cells = [
    newRow.insertCell(0),
    newRow.insertCell(1),
    newRow.insertCell(2),
    newRow.insertCell(3),
    newRow.insertCell(4),
    newRow.insertCell(5),
    newRow.insertCell(6),
    newRow.insertCell(7)
  ];

  cells[0].innerHTML = fname;
  cells[1].innerHTML = lname;
  cells[2].innerHTML = address;
  cells[3].innerHTML = pincode;
  cells[4].innerHTML = gender;
  cells[5].innerHTML = food;
  cells[6].innerHTML = state;
  cells[7].innerHTML = country;

  document.getElementById('form').reset();
});

  
  