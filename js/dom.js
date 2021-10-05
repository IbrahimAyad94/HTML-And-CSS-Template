/*global $, console*/

// Created Body And Head And Some Tags in Head 

// Global
var myBody = document.body,
    container = document.createElement('div'),
    overlay = document.createElement('div'),
    myHead = document.getElementsByTagName('head')[0],
    myTitle = document.createElement('title'),
    metaRespon = document.createElement('meta'),
    commentMeta = document.createComment('First Mobile Meta'),
    linkTagFont = document.createElement('link'),
    linlFontAewsome = document.createElement('link');

container.style.width = "1150px";
container.style.margin = "auto";
container.classList.add('container');
myBody.style.margin = "0";
myBody.style.paddingTop = "45px";

/***************************************************************************************/

// Create Meta Responsive And Append To Head
myHead.appendChild(metaRespon);
myHead.appendChild(commentMeta);
metaRespon.setAttribute('name', 'viewport');
metaRespon.setAttribute('content', 'width=device-width, initial-scale=1');

/***************************************************************************************/

// Attach Font AweSome Libalry
myHead.appendChild(linlFontAewsome);
linlFontAewsome.setAttribute('rel', 'stylesheet');
linlFontAewsome.setAttribute('href', 'css/font-awesome.min.css');

/***************************************************************************************/

// Create My Title And Append To Head
myHead.appendChild(myTitle);
document.title = "Pure Javascript";

/***************************************************************************************/

//Create Font Google
myHead.appendChild(linkTagFont);
linkTagFont.setAttribute('rel', 'stylesheet');
linkTagFont.setAttribute('href', 'https://fonts.googleapis.com/css?family=Lobster');

/***************************************************************************************/

// Create Tag Style In Html 
var stylesheet = document.createElement('style');
stylesheet.type = "text/css";
stylesheet.innerHTML = ".hidemenu {display: none} .addRight {right: -255px} .showDivSearch {right: 0px}";
document.getElementsByTagName('head')[0].appendChild(stylesheet);

/***************************************************************************************/

// Create Overlay All body

myBody.appendChild(overlay);
overlay.classList.add('overlay');
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.right = "0";
overlay.style.bottom = "0";
overlay.style.left = "0";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
overlay.style.zIndex = "58";
overlay.style.display = "none";
 
/***************************************************************************************/

// Start Section Links 

var // Create Element To Section 
    myLinks = document.createElement('div'),
    sectionSignUp = document.createElement('div'),
    btnSignIn = document.createElement('button'),
    btnSignUp = document.createElement('button'),
    links = document.createElement('div'),
    clearFixmyLinks = document.createElement('div'),
    i;

// Append Element To Section
myBody.appendChild(myLinks);
myBody.appendChild(container);
myLinks.appendChild(sectionSignUp);
myLinks.appendChild(links);
myLinks.appendChild(clearFixmyLinks);

myLinks.classList.add('myLinks');

// Create Images Links 
for (i = 1; i <= 4; i = i + 1) {
    var link = document.createElement('img');
    links.appendChild(link);
    link.style.float = "left";
    link.style.borderRight = "1px solid #DDD";
    link.style.cursor = "pointer";
}
clearFixmyLinks.style.clear = "both";

myLinks.style.backgroundColor = "#eceef4";
myLinks.style.position = "fixed";
myLinks.style.top = "0";
myLinks.style.left = "0";
myLinks.style.zIndex = "52";
myLinks.style.width = "100%";
myLinks.style.height = "45px";

links.style.float = "right";
links.style.marginRight = "200px";

links.children[0].setAttribute('src', 'images/links/link-fb.png');
links.children[1].setAttribute('src', 'images/links/link-tw.png');
links.children[2].setAttribute('src', 'images/links/link-insta.png');
links.children[3].setAttribute('src', 'images/links/link-google.png');

// Style social links
links.children[0].style.padding = "12px 20px 12px 0";
links.children[1].style.padding = "12px 20px";
links.children[2].style.padding = "12px 20px";
links.children[3].style.padding = "12px 0 10px 20px";
links.children[3].style.border = "0";

// Style Section Sign Up and Sign In
for (i = 1; i <= 2; i = i + 1) {
    var btnLogin = document.createElement('button');
    sectionSignUp.appendChild(btnLogin);
    btnLogin.style.marginTop = "4.5px";
    btnLogin.style.padding = "9px 15px";
    btnLogin.style.border = "1px solid #3498db";
    btnLogin.style.backgroundColor = "#fff";
    btnLogin.style.color = "#444";
    btnLogin.style.cursor = "pointer";
    btnLogin.style.transition = "all 0.5s ease-in-out";
}

sectionSignUp.style.float = "left";
sectionSignUp.style.marginLeft = "200px";

sectionSignUp.children[0].textContent = "Sign Up";
sectionSignUp.children[1].textContent = "Sign In";

// Style Two Button
sectionSignUp.children[0].onmouseenter = function () {"use strict"; this.style.color = "#FFF"; this.style.backgroundColor = "#3498db"; };
sectionSignUp.children[0].onmouseleave = function () {"use strict"; this.style.color = "#444"; this.style.backgroundColor = "#FFF"; };
sectionSignUp.children[0].style.borderRight = "0";
sectionSignUp.children[0].style.borderRadius = "5px 0 0 5px";

sectionSignUp.children[1].style.borderRadius = "0 5px 5px 0";
sectionSignUp.children[1].onmouseenter = function () {"use strict"; this.style.color = "#FFF"; this.style.backgroundColor = "#3498db"; };
sectionSignUp.children[1].onmouseleave = function () {"use strict"; this.style.color = "#444"; this.style.backgroundColor = "#FFF"; };
sectionSignUp.children[1].style.padding = "9px 17px";

// End Section Links

/*******************************************************************************************/

// Start Section Header 

var // All Varibale For My Header
    myHeader = document.createElement('header'),
    myLogo = document.createElement('img'),
    myBrand = document.createElement('h1'),
    myContact = document.createElement('div'),
    clearFixHeader = document.createElement('div');

// Append Element To Body
container.appendChild(myHeader);
myHeader.appendChild(myLogo);
myHeader.appendChild(myBrand);
myHeader.appendChild(myContact);
myHeader.classList.add('header');
myLogo.classList.add('mylogo');
myBrand.classList.add('brand');
myContact.classList.add('myContact');

for (i = 1; i <= 3; i = i + 1) {
    var conSpan = document.createElement('span'),
        conSpanImg = document.createElement('img'),
        condivSpan = document.createElement('div');
    myContact.appendChild(conSpan);
    conSpan.appendChild(conSpanImg);
    conSpan.appendChild(condivSpan);
    
    conSpan.style.padding = "5px 10px";
    conSpan.style.borderRight = "1px solid #CCC";
    conSpan.style.cursor = "pointer";
    conSpan.style.display = "block";
    conSpan.style.float = "left";
    conSpan.style.position = "relative";
    
    condivSpan.style.width = "150px";
    condivSpan.style.height = "30px";
    condivSpan.style.border = "1px solid #CCC";
    condivSpan.style.borderRadius = "5px";
    condivSpan.style.color = "#555";
    condivSpan.style.lineHeight = "30px";
    condivSpan.style.textAlign = "center";
    condivSpan.style.cursor = "default";
    condivSpan.style.display = "none";
    condivSpan.style.position = "absolute";
    condivSpan.style.top = "-40px";
    condivSpan.style.left = "-60px";
}
myHeader.appendChild(clearFixHeader);

clearFixHeader.style.clear = "both";

myHeader.style.height = "140px";
myHeader.style.padding = "20px";

// STyle My Logo
myLogo.setAttribute('src', 'images/logo.jpg');
myLogo.setAttribute('title', 'Logo');
myLogo.style.width = "350px";
myLogo.style.height = "140px";
myLogo.style.display = "block";
myLogo.style.float = "left";
myLogo.style.cursor = "pointer";

// Style My Brand 
myBrand.textContent = "Pure Javascript";
myBrand.style.fontFamily = "'Lobster', cursive";
myBrand.style.fontSize = "35px";
myBrand.style.float = "left";
myBrand.style.margin = "80px 0 0";
myBrand.style.letterSpacing = "3px";
myBrand.style.color = "rgba(52, 152, 219, 0.4)";

// Style My Contact 
myContact.style.width = "200px";
myContact.style.height = "20px";
myContact.style.float = "right";
myContact.style.marginTop = "80px";
myContact.children[2].style.border = "0";
myContact.children[0].children[0].setAttribute('src', 'images/contact/call.png');
myContact.children[1].children[0].setAttribute('src', 'images/contact/map.png');
myContact.children[2].children[0].setAttribute('src', 'images/contact/message.png');

// Style Div 1
myContact.children[0].children[1].textContent = "Call : 01146908152";

myContact.children[0].children[1].style.top = "-40px";
myContact.children[0].children[1].style.left = "-70px";

// Style Div 2
myContact.children[1].children[1].textContent = "Egypt, Cairo";

// Style Div 3
myContact.children[2].children[1].textContent = "Send Message";

// Function Div MyContent

// Show div 1
myContact.children[0].onmouseenter = function () {"use strict"; myContact.children[0].children[1].style.display = "block"; };
myContact.children[0].onmouseleave = function () {"use strict"; myContact.children[0].children[1].style.display = "none"; };

// Show div 2
myContact.children[1].onmouseenter = function () {"use strict"; myContact.children[1].children[1].style.display = "block"; };
myContact.children[1].onmouseleave = function () {"use strict"; myContact.children[1].children[1].style.display = "none"; };

// Show div 3
myContact.children[2].onmouseenter = function () {"use strict"; myContact.children[2].children[1].style.display = "block"; };
myContact.children[2].onmouseleave = function () {"use strict"; myContact.children[2].children[1].style.display = "none"; };

// End Section Header

/*******************************************************************************************/

// Start Navbar 

var // Create All Element
    myNav = document.createElement('nav'),
    myList = document.createElement('ul'),
    myLi,
    btnShowMenu = document.createElement('img'),
    divSearch = document.createElement('div'),
    inpSearch = document.createElement('input'),
    divSearchFixed = document.createElement('div'),
    divInpSearchFixed = document.createElement('input'),
    divIconSearchFixed = document.createElement('img'),
    iconSearch = document.createElement('img'),
    clearFixNav = document.createElement('div'),
    i;

// Append Element To Body
container.appendChild(myNav);
myNav.appendChild(btnShowMenu);
myNav.appendChild(myList);
myNav.appendChild(divSearch);
divSearch.appendChild(iconSearch);
divSearch.appendChild(inpSearch);
myNav.appendChild(clearFixNav);
myBody.appendChild(divSearchFixed);
divSearchFixed.appendChild(divIconSearchFixed);
divSearchFixed.appendChild(divInpSearchFixed);
clearFixNav.style.clear = "both";

myNav.classList.add('navbar');
myList.classList.add('mylist');
divSearch.classList.add('search-relative');
divSearchFixed.classList.add('search-fixed');

// Style btnShowMenu 
btnShowMenu.setAttribute('src', 'images/menu.png');
btnShowMenu.style.position = "absolute";
btnShowMenu.style.top = "8px";
btnShowMenu.style.left = "20px";
btnShowMenu.style.cursor = "pointer";
btnShowMenu.style.backgroundColor = "#bdc5ff";
btnShowMenu.style.padding = "5px 8px";
btnShowMenu.style.borderRadius = "5px";
btnShowMenu.style.display = "none";
btnShowMenu.classList.add('btn-show-menu');

// Style Section Nav
myNav.style.height = "60px";
myNav.style.backgroundColor = "#FFF";
myNav.style.zIndex = "55";
myNav.style.width = "100%";

// Style Un Order List 
myList.style.listStyleType = "none";
myList.style.padding = "0";
myList.style.borderTop = "1px solid #EEE";
myList.style.margin = "0";
myList.style.float = "left";
myList.style.fontFamily = "arial";
myList.style.backgroundColor = "#fff";

// Create All list Item
for (i = 1; i <= 6; i = i + 1) {
    myLi = document.createElement('li');
    myList.appendChild(myLi);
    myLi.style.float = "left";
    myLi.style.padding = "21px";
    myLi.style.cursor = "pointer";
    myLi.style.color = "#444";
    myLi.style.borderRight = "1px solid #EEE";
    myLi.style.fontWeight = "bold";
    myLi.style.transition = "all 0.5s ease-in-out";
    myLi.onmouseenter = function () {"use strict"; this.style.color = "#FFF"; this.style.backgroundColor = "#3498db"; };
    myLi.onmouseleave = function () {"use strict"; this.style.color = "#444"; this.style.backgroundColor = "#FFF"; };
    
}
// Create Text Content To List Item
myList.children[0].textContent = "Home";
myList.children[1].textContent = "About Me";
myList.children[2].textContent = "Wath We Do?";
myList.children[3].textContent = "Our Project";
myList.children[4].textContent = "Excellent Team";
myList.children[5].textContent = "Contact";

myList.children[0].style.color = "#FFF";
myList.children[0].style.backgroundColor = "#3498db";
myList.children[0].onmouseleave = function () {"use strict"; this.style.color = "#FFF"; this.style.backgroundColor = "#3498db"; };
myList.children[5].style.border = "0";


//style div Search 
divSearch.style.float = "left";
divSearch.style.marginLeft = "60px";
divSearch.style.width = "300px";
divSearch.style.height = "100%";
divSearch.style.padding = "5px";
divSearch.style.position = "relative";

// Style Input Search 
inpSearch.setAttribute('type', 'search');
inpSearch.setAttribute('placeholder', 'Type Your Search Words');
inpSearch.style.float = "right";
inpSearch.style.padding = "10px";
inpSearch.style.marginTop = "3px";
inpSearch.style.width = "240px";
inpSearch.style.height = "45px";
inpSearch.style.border = "1px solid #DDD";
inpSearch.style.borderRadius = "6px";
inpSearch.style.fontSize = "16px";

// Style Icon Search
iconSearch.setAttribute('src', 'images/icon-search.png');
iconSearch.style.float = "left";
iconSearch.style.marginTop = "18px";
iconSearch.style.marginLeft = "20px";

//////////////////////////////////////////////////////
// Style div Search Fixed
divSearchFixed.style.width = "300px";
divSearchFixed.style.height = "50px";
divSearchFixed.style.padding = "8px";
divSearchFixed.style.backgroundColor = "rgba(238, 238, 238, .25)";
divSearchFixed.style.border = "2px solid #999";
divSearchFixed.style.position = "fixed";
divSearchFixed.style.top = "50px";
divSearchFixed.classList.add('addRight');
divSearchFixed.style.zIndex = "60";
divSearchFixed.style.borderRadius = "6px";
divSearchFixed.style.transition = "all 0.5s ease-in-out";
divSearchFixed.style.display = "none";

divInpSearchFixed.setAttribute('type', 'search');
divInpSearchFixed.setAttribute('placeholder', 'Type Your Search Words');
divInpSearchFixed.style.padding = "10px";
divInpSearchFixed.style.width = "80%";
divInpSearchFixed.style.height = "100%";
divInpSearchFixed.style.fontSize = "16px";
divInpSearchFixed.style.float = "left";
divInpSearchFixed.style.border = "0";
divInpSearchFixed.style.borderRadius = "5px";
divInpSearchFixed.style.border = "1px solid #DDD";

divIconSearchFixed.setAttribute('src', 'images/icon-search.png');
divIconSearchFixed.style.float = "left";
divIconSearchFixed.style.width = "9%";
divIconSearchFixed.style.padding = "11px 20px 10px 10px";
divIconSearchFixed.style.cursor = "pointer";

// Create Function In Input Search When Focus and blur
inpSearch.onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your Search Words') { this.placeholder = ''; }
    overlay.style.display = "block";
    divSearch.style.zIndex = "60";
};

inpSearch.onblur = function () {
    "use strict";
    if (this.placeholder === '') {this.placeholder = 'Type Your Search Words'; }
    overlay.style.display = "none";
    divSearch.style.zIndex = "10";
};
divInpSearchFixed.onfocus = function () {
    "use strict";
    if (this.placeholder === 'Type Your Search Words') {this.placeholder = ''; }
    overlay.style.display = "block";
};
divInpSearchFixed.onblur = function () {
    "use strict";
    if (this.placeholder === '') {this.placeholder = 'Type Your Search Words'; }
    overlay.style.display = "none";
};
overlay.onclick = function () {"use strict"; this.style.display = "none"; };

divIconSearchFixed.onclick = function () {
    "use strict";
    divSearchFixed.classList.toggle('showDivSearch');
};

// End Navbar 

/*******************************************************************************************/

// Start Section Slider 

var // Create All Element In Section
    mySlider = document.createElement('section'),
    headingSlider = document.createElement('h2'),
    pSlider = document.createElement('p'),
    spanSlider = document.createElement('span');
// Append Element To Section 

myBody.appendChild(mySlider);
mySlider.appendChild(headingSlider);
mySlider.appendChild(pSlider);
mySlider.appendChild(spanSlider);
    
mySlider.classList.add('slider');

// Style Section Slider
mySlider.style.background = "url(images/bg-slider.png) no-repeat";
mySlider.style.backgroundSize = "100% 100%";
mySlider.style.height = "885px";
mySlider.style.textAlign = "center";
mySlider.style.color = "#FFF";
mySlider.style.position = "relative";
mySlider.style.zIndex = "0";

// Style headingSlider
headingSlider.textContent = "LET'S DRAW SOME ARTS";
headingSlider.style.fontFamily = "Tahoma";
headingSlider.style.fontSize = "40px";
headingSlider.style.margin = "0 0 5px";
headingSlider.style.paddingTop = "260px";

// Style pSlider 
pSlider.textContent = "make your business much better";
pSlider.style.margin = "0";
pSlider.style.fontFamily = "verdana";
pSlider.style.fontSize = "24px";
pSlider.style.textIndent = "210px";

// Style spanSlider
spanSlider.textContent = "&";
spanSlider.style.display = "block";
spanSlider.style.position = "absolute";
spanSlider.style.top = "30.5%";
spanSlider.style.left = "32%";
spanSlider.style.fontFamily = "Arial";
spanSlider.style.fontSize = "70px";
spanSlider.style.fontWeight = "bold";
spanSlider.style.color = "#bbedff";
spanSlider.style.zIndex = "-1";

// End Section Slider

/*******************************************************************************************/

// Start Section About Me 

var // Created Element Section about
    myAbout = document.createElement('section'),
    about = document.createElement('div'),
    iconAbout = document.createElement('img'),
    contAbout = document.createElement('div'),
    headingAbout = document.createElement('h3'),
    pAbout = document.createElement('p'),
    why = document.createElement('div'),
    iconWhy = document.createElement('img'),
    contWhy = document.createElement('div'),
    headingWhy = document.createElement('h3'),
    pWhy = document.createElement('p'),
    clearFixAbout = document.createElement('div');
// Apeend All Element To Section 
myBody.appendChild(myAbout);
myAbout.appendChild(about);
myAbout.appendChild(why);
myAbout.appendChild(clearFixAbout);
clearFixAbout.style.clear = "both";
myAbout.classList.add('about-me');

about.appendChild(iconAbout);
about.appendChild(contAbout);
contAbout.appendChild(headingAbout);
contAbout.appendChild(pAbout);
about.classList.add('about');

why.appendChild(iconWhy);
why.appendChild(contWhy);
contWhy.appendChild(headingWhy);
contWhy.appendChild(pWhy);
why.classList.add('why');

// Style Section About me
myAbout.style.width = "1150px";
myAbout.style.margin = "auto";

// style Div About
about.style.width = "50%";
about.style.float = "left";
about.style.overflow = "hidden";
about.style.paddingLeft = "20px";
about.style.paddingRight = "20px";
about.style.boxSizing = "border-box";

iconAbout.setAttribute('src', 'images/about/about.png');
iconAbout.style.float = "left";
iconAbout.style.width = "15%";
iconAbout.style.marginTop = "10px";

contAbout.style.width = "82%";
contAbout.style.marginLeft = "3%";
contAbout.style.float = "left";

headingAbout.textContent = "What about ISAMA";
headingAbout.style.marginBottom = "10px";
headingAbout.style.fontFamily = "arial";
headingAbout.style.color = "#6d6e71";

pAbout.textContent = "Reaching customer satisfaction through providing them with cutting-edge technologies that give clients access to a wide range of tools, ensuring efficient and results-oriented communication solutions, which grant them a special character that distinguishes them from the others in the business.";
pAbout.style.marginTop = "0";
pAbout.style.fontFamily = "verdana";
pAbout.style.lineHeight = "1.5";
pAbout.style.color = "#888";

// Style Div Why

why.style.width = "50%";
why.style.float = "left";
why.style.overflow = "hidden";
why.style.paddingLeft = "20px";
why.style.paddingRight = "20px";
why.style.boxSizing = "border-box";

iconWhy.setAttribute('src', 'images/about/why.png');
iconWhy.style.float = "left";
iconWhy.style.marginTop = "10px";
iconWhy.style.width = "15%";

contWhy.style.width = "82%";
contWhy.style.marginLeft = "3%";
contWhy.style.float = "left";

headingWhy.textContent = "Why we exist";
headingWhy.style.marginBottom = "10px";
headingWhy.style.fontFamily = "arial";
headingWhy.style.color = "#6d6e71";

pWhy.textContent = "Reaching customer satisfaction through providing them with cutting-edge technologies that give clients access to a wide range of tools, ensuring efficient and results-oriented communication solutions, which grant them a special character that distinguishes them from the others in the business.";
pWhy.style.marginTop = "0";
pWhy.style.fontFamily = "verdana";
pWhy.style.lineHeight = "1.5";
pWhy.style.color = "#888";

// Create Function Smooth Scroll To Section
myList.children[1].onclick = function () {"use strict"; myBody.scrollTop = myAbout.offsetTop - 45; };

// End Section About Me 

/*******************************************************************************************/

// Start Section Service

var // Create Element Section 
    myService = document.createElement('section'),
    headServ = document.createElement('div'),
    iconHeadServ = document.createElement('img'),
    contHeadServ = document.createElement('div'),
    h3ContHeadServ = document.createElement('h3'),
    pContHeadServ = document.createElement('p'),
    clearFixServ = document.createElement('div');
    
// Append Element To Section 
myBody.appendChild(myService);
myService.appendChild(headServ);
headServ.appendChild(iconHeadServ);
headServ.appendChild(contHeadServ);
contHeadServ.appendChild(h3ContHeadServ);
contHeadServ.appendChild(pContHeadServ);
myService.classList.add('service');
headServ.classList.add('title-service');

for (i = 1; i <= 6; i = i + 1) {
    var prodcServ = document.createElement('div'),
        iconprodcServ = document.createElement('img'),
        contprodcServ = document.createElement('div'),
        h3ContprodcServ = document.createElement('h3'),
        pContprodcServ = document.createElement('p');
    
    myService.appendChild(prodcServ);
    prodcServ.appendChild(iconprodcServ);
    prodcServ.appendChild(contprodcServ);
    contprodcServ.appendChild(h3ContprodcServ);
    contprodcServ.appendChild(pContprodcServ);
    
    prodcServ.classList.add('products');
    // Style All Product

    prodcServ.style.width = "50%";
    prodcServ.style.float = "left";
    prodcServ.style.boxSizing = "border-box";
    prodcServ.style.padding = "10px 50px";
    prodcServ.style.marginBottom = "30px";

    iconprodcServ.style.width = "13%";
    iconprodcServ.style.float = "left";
    iconprodcServ.style.marginTop = "18px";

    contprodcServ.style.overflow = "hidden";
    contprodcServ.style.width = "87%";
    contprodcServ.style.float = "left";
    contprodcServ.style.paddingLeft = "15px";
    contprodcServ.style.boxSizing = "border-box";

    h3ContprodcServ.style.margin = "11px 0";
    h3ContprodcServ.style.textAlign = "left";
    h3ContprodcServ.style.fontSize = "20px";
    h3ContprodcServ.style.color = "#555";

    pContprodcServ.style.margin = "0";
    pContprodcServ.style.fontSize = "14px";
    pContprodcServ.style.color = "#888";
    pContprodcServ.style.textAlign = "left";
    pContprodcServ.style.lineHeight = "1.5";
}
myService.appendChild(clearFixServ);
clearFixServ.style.clear = "both";


myService.style.textAlign = "center";
myService.style.padding = "100px 0 50px";
myService.style.margin = "auto";
myService.style.width = "1150px";
myService.style.fontFamily = "Arial";

// Style Head Service 
headServ.style.width = "40%";
headServ.style.height = "90px";
headServ.style.margin = "0 auto 30px";

iconHeadServ.setAttribute('src', 'images/service/iconhead.png');
iconHeadServ.style.width = "20%";
iconHeadServ.style.float = "left";

contHeadServ.style.overflow = "hidden";
contHeadServ.style.width = "80%";
contHeadServ.style.float = "left";
contHeadServ.style.paddingLeft = "15px";
contHeadServ.style.boxSizing = "border-box";

h3ContHeadServ.textContent = "What we do ?";
h3ContHeadServ.style.margin = "14px 0 8px";
h3ContHeadServ.style.textAlign = "left";
h3ContHeadServ.style.fontSize = "30px";
h3ContHeadServ.style.color = "#555";

pContHeadServ.textContent = "Everything you need to do business intelligence right.";
pContHeadServ.style.margin = "0";
pContHeadServ.style.fontSize = "15px";
pContHeadServ.style.color = "#888";
pContHeadServ.style.textAlign = "left";

// Set Src Icon 

myService.children[1].children[0].setAttribute('src', 'images/service/icondiv1.png');
myService.children[2].children[0].setAttribute('src', 'images/service/icondiv2.png');
myService.children[3].children[0].setAttribute('src', 'images/service/icondiv3.png');
myService.children[4].children[0].setAttribute('src', 'images/service/icondiv4.png');
myService.children[5].children[0].setAttribute('src', 'images/service/icondiv5.png');
myService.children[6].children[0].setAttribute('src', 'images/service/icondiv6.png');

// Set Text Content in All Items 

myService.children[1].children[1].children[0].textContent = "Web Design & Development";
myService.children[1].children[1].children[1].textContent = "ISAMA Pvt. Ltd. designs and develops creative websites utilizing the latest technologies.";
myService.children[2].children[1].children[0].textContent = "Mobile Applications";
myService.children[2].children[1].children[1].textContent = "Our Developers helps you to Design, Develop & Distribute Mobile Applications - Smarter & Faster.";
myService.children[3].children[1].children[0].textContent = "Software Solutions";
myService.children[3].children[1].children[1].textContent = "with our software for professional services and consulting firms. Grow your revenue and profit margins by assigning the right people to the right projects at the right time.";
myService.children[4].children[1].children[0].textContent = "Interior Design";
myService.children[4].children[1].children[1].textContent = "We offer a variety of design services ranging from Full Service Interior Design and Styling to our Design Concierge service, all of which are executed with beautiful, custom-tailored results.";
myService.children[5].children[1].children[0].textContent = "Branding";
myService.children[5].children[1].children[1].textContent = "We have our forte in advertising and Brand establishment. We create identities for the clients product and services in the target market.";
myService.children[6].children[1].children[0].textContent = "SEO & Web Marketing Services";
myService.children[6].children[1].children[1].textContent = "We offer a variety of design services ranging from Full Service Interior Design and Styling to our Design Concierge service, all of which are executed with beautiful, custom-tailored results.";

// Style Overight all Section 

myService.children[2].children[0].style.marginTop = "10px";
myService.children[6].children[0].style.marginTop = "10px";

// Create Function Smooth Scroll To Section
myList.children[2].onclick = function () {"use strict"; myBody.scrollTop = myService.offsetTop; };

// End Section Service

/*******************************************************************************************/

// Start Section Our Project

var // Create Element Section Our Project
    myProj = document.createElement('section'),
    containerProj = document.createElement('div'),
    headProj = document.createElement('div'),
    iconHeadProj = document.createElement('img'),
    contHeadProj = document.createElement('div'),
    h3ContHeadProj = document.createElement('h3'),
    pContHeadProj = document.createElement('p'),
    menuProj = document.createElement('ul'),
    itemsProj = document.createElement('div'),
    clearFixProj = document.createElement('div');

myProj.classList.add('our-projects');
headProj.classList.add('title-projects');
menuProj.classList.add('menu-projects');
itemsProj.classList.add('all-items-projects');
// Create All Products
for (i = 1; i <= 8; i = i + 1) {
    var itemProj = document.createElement('div'),
        divImgItemProj = document.createElement('div'),
        imgItemProj = document.createElement('img'),
        btnItemProjLeft = document.createElement('i'),
        btnItemProjRight = document.createElement('i');
        
    itemsProj.appendChild(itemProj);
    itemProj.appendChild(divImgItemProj);
    divImgItemProj.appendChild(imgItemProj);
    itemProj.appendChild(btnItemProjLeft);
    itemProj.appendChild(btnItemProjRight);
    
    btnItemProjLeft.classList.add('fa-chain', 'fa');
    btnItemProjRight.classList.add('fa-plus', 'fa');
    
    itemProj.classList.add('item-porjects');
    
    // Style All Products
    itemProj.style.boxSizing = "border-box";
    itemProj.style.padding = "10px";
    itemProj.style.width = "23%";
    itemProj.style.float = "left";
    itemProj.style.height = "260px";
    itemProj.style.backgroundColor = "#FFF";
    itemProj.style.boxShadow = "2px 2px 15px rgba(0, 0, 0, 0.5)";
    itemProj.style.borderRadius = "5px";
    itemProj.style.marginBottom = "28px";
    itemProj.style.marginRight = "2.6%";
    
    divImgItemProj.style.width = "100%";
    divImgItemProj.style.height = "200px";
    divImgItemProj.style.backgroundColor = "#F5F5F5";
    divImgItemProj.boxSizing = "border-box";
    divImgItemProj.style.outline = "2px solid #3498db";
    
    btnItemProjLeft.style.width = "50%";
    btnItemProjLeft.style.textAlign = "center";
    btnItemProjLeft.style.height = "50px";
    btnItemProjLeft.style.lineHeight = "50px";
    btnItemProjLeft.style.color = "#CCC";
    btnItemProjLeft.style.fontSize = "24px";
    btnItemProjLeft.style.borderRight = "1px solid #CCC";
    btnItemProjLeft.style.boxSizing = "border-box";
    btnItemProjLeft.style.cursor = "pointer";
    btnItemProjLeft.onmouseenter = function () {"use strict"; this.style.color = "#555"; };
    btnItemProjLeft.onmouseleave = function () {"use strict"; this.style.color = "#CCC"; };
    
    btnItemProjRight.style.width = "50%";
    btnItemProjRight.style.textAlign = "center";
    btnItemProjRight.style.height = "50px";
    btnItemProjRight.style.lineHeight = "50px";
    btnItemProjRight.style.color = "#c7c9ce";
    btnItemProjRight.style.fontSize = "24px";
    btnItemProjRight.style.borderLeft = "1px solid #CCC";
    btnItemProjRight.style.boxSizing = "border-box";
    btnItemProjRight.style.cursor = "pointer";
    btnItemProjRight.onmouseenter = function () {"use strict"; this.style.color = "#555"; };
    btnItemProjRight.onmouseleave = function () {"use strict"; this.style.color = "#CCC"; };
    
    imgItemProj.style.width = "220px";
    imgItemProj.style.height = "100%";
}

itemsProj.appendChild(clearFixProj);
clearFixProj.style.clear = "both";

itemsProj.children[3].style.marginRight = "0";
itemsProj.children[7].style.marginRight = "0";

// Set src all images 
itemsProj.children[0].children[0].children[0].setAttribute('src', 'images/project/item1.jpg');
itemsProj.children[1].children[0].children[0].setAttribute('src', 'images/project/item2.jpg');
itemsProj.children[2].children[0].children[0].setAttribute('src', 'images/project/item3.jpg');
itemsProj.children[3].children[0].children[0].setAttribute('src', 'images/project/item4.jpg');
itemsProj.children[4].children[0].children[0].setAttribute('src', 'images/project/item5.jpg');
itemsProj.children[5].children[0].children[0].setAttribute('src', 'images/project/item6.jpg');
itemsProj.children[6].children[0].children[0].setAttribute('src', 'images/project/item7.jpg');
itemsProj.children[7].children[0].children[0].setAttribute('src', 'images/project/item8.jpg');


// Create My List Item In The Section Our Projects
for (i = 1; i <= 5; i = i + 1) {
    var myLiProj = document.createElement('li');
    menuProj.appendChild(myLiProj);
    
    // Style All Li
    myLiProj.style.padding = "10px 20px";
    myLiProj.style.backgroundColor = "transparent";
    myLiProj.style.display = "inline-block";
    myLiProj.style.border = "2px solid #CCC";
    myLiProj.style.marginRight = "10px";
    myLiProj.style.marginBottom = "15px";
    myLiProj.style.borderRadius = "5px";
    myLiProj.style.cursor = "pointer";
    myLiProj.onmouseenter = function () {"use strict"; this.style.borderColor = "#777"; };
    myLiProj.onmouseleave = function () {"use strict"; this.style.borderColor = "#CCC"; };
}

menuProj.style.listStyleType = "none";
menuProj.style.padding = "0";
menuProj.style.overflow = "hidden";
menuProj.style.width = "100%";
menuProj.style.textAlign = "center";

// Style List Item 
menuProj.children[0].textContent = "All";
menuProj.children[0].style.backgroundColor = "#FFF";

menuProj.children[1].textContent = "Mobile App";
menuProj.children[2].textContent = "Identities";
menuProj.children[3].textContent = "Interior Design";

menuProj.children[4].textContent = "UI/UX";
menuProj.children[4].style.marginRight = "0";

// Apeend All Element To Section 
myBody.appendChild(myProj);
myProj.appendChild(headProj);
headProj.appendChild(iconHeadProj);
headProj.appendChild(contHeadProj);
contHeadProj.appendChild(h3ContHeadProj);
contHeadProj.appendChild(pContHeadProj);
myProj.appendChild(containerProj);
containerProj.appendChild(menuProj);
containerProj.appendChild(itemsProj);

containerProj.style.width = "1150px";
containerProj.style.margin = "auto";
containerProj.style.padding = "0 15px";
containerProj.style.boxSizing = "border-box";

myProj.style.textAlign = "center";
myProj.style.padding = "50px 0";
myProj.style.backgroundColor = "#efefef";
myProj.style.fontFamily = "Arial";

// style Head Project 
headProj.style.width = "30%";
headProj.style.height = "90px";
headProj.style.margin = "0 auto 50px";

iconHeadProj.setAttribute('src', 'images/project/iconproj.png');
iconHeadProj.style.width = "20%";
iconHeadProj.style.float = "left";

contHeadProj.style.overflow = "hidden";
contHeadProj.style.width = "80%";
contHeadProj.style.float = "left";
contHeadProj.style.paddingLeft = "15px";
contHeadProj.style.boxSizing = "border-box";

h3ContHeadProj.textContent = "Our Projects";
h3ContHeadProj.style.margin = "14px 0 8px";
h3ContHeadProj.style.textAlign = "left";
h3ContHeadProj.style.fontSize = "30px";
h3ContHeadProj.style.color = "#555";

pContHeadProj.textContent = "Some of our awesome work Proud of doing great works for our clients";
pContHeadProj.style.margin = "0";
pContHeadProj.style.fontSize = "15px";
pContHeadProj.style.color = "#888";
pContHeadProj.style.textAlign = "left";

///////////////////////////////////////////

// Create Function Suffle

menuProj.children[0].onclick = function () {
    "use strict";
    itemsProj.children[0].style.display = "block";
    itemsProj.children[1].style.display = "block";
    itemsProj.children[2].style.display = "block";
    itemsProj.children[3].style.display = "block";
    itemsProj.children[4].style.display = "block";
    itemsProj.children[5].style.display = "block";
    itemsProj.children[6].style.display = "block";
    itemsProj.children[7].style.display = "block";
    this.style.backgroundColor = "#FFF";
    this.style.borderColor = "#777";
    menuProj.children[1].style.backgroundColor = "transparent";
    menuProj.children[1].style.borderColor = "#CCC";
    menuProj.children[2].style.backgroundColor = "transparent";
    menuProj.children[2].style.borderColor = "#CCC";
    menuProj.children[3].style.backgroundColor = "transparent";
    menuProj.children[3].style.borderColor = "#CCC";
    menuProj.children[4].style.backgroundColor = "transparent";
    menuProj.children[4].style.borderColor = "#CCC";
};
menuProj.children[1].onclick = function () {
    "use strict";
    itemsProj.children[0].style.display = "block";
    itemsProj.children[1].style.display = "block";
    itemsProj.children[2].style.display = "none";
    itemsProj.children[3].style.display = "none";
    itemsProj.children[4].style.display = "none";
    itemsProj.children[5].style.display = "none";
    itemsProj.children[6].style.display = "none";
    itemsProj.children[7].style.display = "none";
    this.style.backgroundColor = "#FFF";
    this.style.borderColor = "#777";
    menuProj.children[0].style.backgroundColor = "transparent";
    menuProj.children[0].style.borderColor = "#CCC";
    menuProj.children[2].style.backgroundColor = "transparent";
    menuProj.children[2].style.borderColor = "#CCC";
    menuProj.children[3].style.backgroundColor = "transparent";
    menuProj.children[3].style.borderColor = "#CCC";
    menuProj.children[4].style.backgroundColor = "transparent";
    menuProj.children[4].style.borderColor = "#CCC";
};
menuProj.children[2].onclick = function () {
    "use strict";
    itemsProj.children[0].style.display = "none";
    itemsProj.children[1].style.display = "none";
    itemsProj.children[2].style.display = "none";
    itemsProj.children[3].style.display = "none";
    itemsProj.children[4].style.display = "none";
    itemsProj.children[5].style.display = "none";
    itemsProj.children[6].style.display = "block";
    itemsProj.children[7].style.display = "block";
    this.style.backgroundColor = "#FFF";
    this.style.borderColor = "#777";
    menuProj.children[1].style.backgroundColor = "transparent";
    menuProj.children[1].style.borderColor = "#CCC";
    menuProj.children[0].style.backgroundColor = "transparent";
    menuProj.children[0].style.borderColor = "#CCC";
    menuProj.children[3].style.backgroundColor = "transparent";
    menuProj.children[3].style.borderColor = "#CCC";
    menuProj.children[4].style.backgroundColor = "transparent";
    menuProj.children[4].style.borderColor = "#CCC";
};
menuProj.children[3].onclick = function () {
    "use strict";
    itemsProj.children[0].style.display = "none";
    itemsProj.children[1].style.display = "none";
    itemsProj.children[2].style.display = "none";
    itemsProj.children[3].style.display = "none";
    itemsProj.children[4].style.display = "block";
    itemsProj.children[5].style.display = "block";
    itemsProj.children[6].style.display = "none";
    itemsProj.children[7].style.display = "none";
    this.style.backgroundColor = "#FFF";
    this.style.borderColor = "#777";
    menuProj.children[1].style.backgroundColor = "transparent";
    menuProj.children[1].style.borderColor = "#CCC";
    menuProj.children[2].style.backgroundColor = "transparent";
    menuProj.children[2].style.borderColor = "#CCC";
    menuProj.children[0].style.backgroundColor = "transparent";
    menuProj.children[0].style.borderColor = "#CCC";
    menuProj.children[4].style.backgroundColor = "transparent";
    menuProj.children[4].style.borderColor = "#CCC";
};
menuProj.children[4].onclick = function () {
    "use strict";
    itemsProj.children[0].style.display = "none";
    itemsProj.children[1].style.display = "none";
    itemsProj.children[2].style.display = "block";
    itemsProj.children[3].style.display = "block";
    itemsProj.children[4].style.display = "none";
    itemsProj.children[5].style.display = "none";
    itemsProj.children[6].style.display = "none";
    itemsProj.children[7].style.display = "none";
    this.style.backgroundColor = "#FFF";
    this.style.borderColor = "#777";
    menuProj.children[1].style.backgroundColor = "transparent";
    menuProj.children[1].style.borderColor = "#CCC";
    menuProj.children[2].style.backgroundColor = "transparent";
    menuProj.children[2].style.borderColor = "#CCC";
    menuProj.children[3].style.backgroundColor = "transparent";
    menuProj.children[3].style.borderColor = "#CCC";
    menuProj.children[0].style.backgroundColor = "transparent";
    menuProj.children[0].style.borderColor = "#CCC";
    
};
// Create Function Smooth Scroll To Section
myList.children[3].onclick = function () {"use strict"; myBody.scrollTop = myProj.offsetTop - 45; };

// End Section Our Project

/*******************************************************************************************/

// Start Section Our Team

var // Create Element Section 
    myTeam = document.createElement('section'),
    containerTeam = document.createElement('div'),
    headTeam = document.createElement('div'),
    iconHeadTeam = document.createElement('img'),
    contHeadTeam = document.createElement('div'),
    h3ContHeadTeam = document.createElement('h3'),
    pContHeadTeam = document.createElement('p'),
    allTeam = document.createElement('div'),
    clearFixTeam = document.createElement('div');

// Apeend Element To Section 
myBody.appendChild(myTeam);
myTeam.appendChild(headTeam);
headTeam.appendChild(iconHeadTeam);
headTeam.appendChild(contHeadTeam);
contHeadTeam.appendChild(h3ContHeadTeam);
contHeadTeam.appendChild(pContHeadTeam);
myTeam.appendChild(containerTeam);
containerTeam.appendChild(allTeam);

myTeam.classList.add('our-team');
allTeam.classList.add('allmembers');
headTeam.classList.add('title-team');
containerTeam.classList.add('container-team');

// Style Section Our Team
myTeam.style.padding = "50px 0";
myTeam.style.fontFamily = "Arial";
myTeam.style.textAlign = "center";

// Style Container
containerTeam.style.width = "1150px";
containerTeam.style.margin = "auto";
containerTeam.style.padding = "0 30px";
containerTeam.style.boxSizing = "border-box";

// Style Head Service 
headTeam.style.width = "38%";
headTeam.style.height = "90px";
headTeam.style.margin = "0 auto 80px";

iconHeadTeam.setAttribute('src', 'images/team/iconhead.png');
iconHeadTeam.style.width = "17%";
iconHeadTeam.style.float = "left";

contHeadTeam.style.overflow = "hidden";
contHeadTeam.style.width = "83%";
contHeadTeam.style.float = "left";
contHeadTeam.style.paddingLeft = "20px";
contHeadTeam.style.boxSizing = "border-box";
contHeadTeam.style.marginTop = "10px";

h3ContHeadTeam.textContent = "Meet Our Team";
h3ContHeadTeam.style.margin = "14px 0 8px";
h3ContHeadTeam.style.textAlign = "left";
h3ContHeadTeam.style.fontSize = "30px";
h3ContHeadTeam.style.color = "#555";

pContHeadTeam.textContent = "We have highly qualified staff with distinguished significant experiences in their field who work under pressure.";
pContHeadTeam.style.margin = "0";
pContHeadTeam.style.fontSize = "15px";
pContHeadTeam.style.color = "#888";
pContHeadTeam.style.textAlign = "left";
pContHeadTeam.style.lineHeight = "1.3";
    
// Create Section Team for Loop
for (i = 1; i <= 4; i = i + 1) {
    var membersTeam = document.createElement('div'),
        contentTeam = document.createElement('div'),
        divIconTeam = document.createElement('div'),
        iconTeam = document.createElement('img'),
        h3ContTeam = document.createElement('h3'),
        pContTeam = document.createElement('p'),
        socialLinksTeam = document.createElement('div'),
        x,
        y;
    // Append Element To My Team
    allTeam.appendChild(membersTeam);
    membersTeam.appendChild(contentTeam);
    contentTeam.appendChild(divIconTeam);
    divIconTeam.appendChild(iconTeam);
    contentTeam.appendChild(h3ContTeam);
    contentTeam.appendChild(pContTeam);
    membersTeam.appendChild(socialLinksTeam);
    membersTeam.classList.add('member');
    contentTeam.classList.add('content');
    socialLinksTeam.classList.add('links');
    
    for (x = 1; x <= 4; x = x + 1) {
        var oneLinkTeam = document.createElement('i');
        socialLinksTeam.appendChild(oneLinkTeam);
        
        oneLinkTeam.style.width = "30px";
        oneLinkTeam.style.height = "30px";
        oneLinkTeam.style.boxSizing = "border-box";
        oneLinkTeam.style.padding = "5px";
        oneLinkTeam.style.margin = "10px 5px";
        oneLinkTeam.style.lineHeight = "18px";
        oneLinkTeam.style.border = "1px solid #AAA";
        oneLinkTeam.style.borderRadius = "3px";
        oneLinkTeam.style.cursor = "pointer";
        oneLinkTeam.style.color = "#444";
        oneLinkTeam.style.transition = "all 0.5s ease-in-out";
    }
    // Style Members Team 
    membersTeam.style.width = "23%";
    membersTeam.style.height = "300px";
    membersTeam.style.margin = "0 1% 25px 1%";
    membersTeam.style.float = "left";
    membersTeam.style.backgroundColor = "#F5F5F5";
    membersTeam.style.padding = "10px";
    membersTeam.style.boxSizing = "border-box";
    membersTeam.style.borderRadius = "8px";
    membersTeam.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.5)";
    membersTeam.style.transition = "all 0.5s ease-in-out";
    
    membersTeam.onmouseenter = function () {"use strict"; this.style.transform = "scale(1.1, 1.1)"; };
    membersTeam.onmouseleave = function () {"use strict"; this.style.transform = "scale(1, 1)"; };
    
    contentTeam.style.width = "100%";
    contentTeam.style.height = "230px";
    contentTeam.style.paddingTop = "40px";
    contentTeam.style.border = "2px solid #3498db";
    contentTeam.style.borderBottom = "0";
    contentTeam.style.borderRadius = "5px 5px 0 0";
    contentTeam.style.boxSizing = "border-box";
    
    divIconTeam.style.width = "110px";
    divIconTeam.style.height = "110px";
    divIconTeam.style.borderRadius = "50%";
    divIconTeam.style.border = "2px solid #FFF";
    divIconTeam.style.margin = "auto";
    
    iconTeam.style.width = "100%";
    iconTeam.style.height = "100%";
    
    h3ContTeam.style.margin = "20px 0 5px";
    h3ContTeam.style.color = "#444";
    pContTeam.style.margin = "0";
    pContTeam.style.color = "#777";
    
    socialLinksTeam.style.width = "100%";
    socialLinksTeam.style.height = "50px";
    socialLinksTeam.style.backgroundColor = "#FFF";
    socialLinksTeam.style.border = "2px solid #3498db";
    socialLinksTeam.style.borderTop = "0";
    socialLinksTeam.style.borderRadius = "0 0 5px 5px";
    socialLinksTeam.style.boxSizing = "border-box";
}
allTeam.appendChild(clearFixTeam);
clearFixTeam.style.clear = "both";

// Set Src Images 
allTeam.children[0].children[0].children[0].children[0].setAttribute('src', 'images/team/team1.png');
allTeam.children[1].children[0].children[0].children[0].setAttribute('src', 'images/team/team2.png');
allTeam.children[2].children[0].children[0].children[0].setAttribute('src', 'images/team/team3.png');
allTeam.children[3].children[0].children[0].children[0].setAttribute('src', 'images/team/team4.png');

// Set Text Content To H3 and Pragraph
allTeam.children[0].children[0].children[1].textContent = "Tamer";
allTeam.children[0].children[0].children[2].textContent = "Senior Software Engineer";
allTeam.children[1].children[0].children[1].textContent = "Haxem";
allTeam.children[1].children[0].children[2].textContent = "PHP Developer";
allTeam.children[2].children[0].children[1].textContent = "Mohammed";
allTeam.children[2].children[0].children[2].textContent = "PHP Developer";
allTeam.children[3].children[0].children[1].textContent = "Ahmed";
allTeam.children[3].children[0].children[2].textContent = "UI/UX Designer";

// Set Class Font Awe Some To Social Links
allTeam.children[0].children[1].children[0].classList.add('fa', 'fa-facebook');
allTeam.children[0].children[1].children[1].classList.add('fa', 'fa-twitter');
allTeam.children[0].children[1].children[2].classList.add('fa', 'fa-instagram');
allTeam.children[0].children[1].children[3].classList.add('fa', 'fa-linkedin');

allTeam.children[1].children[1].children[0].classList.add('fa', 'fa-facebook');
allTeam.children[1].children[1].children[1].classList.add('fa', 'fa-twitter');
allTeam.children[1].children[1].children[2].classList.add('fa', 'fa-instagram');
allTeam.children[1].children[1].children[3].classList.add('fa', 'fa-linkedin');

allTeam.children[2].children[1].children[0].classList.add('fa', 'fa-facebook');
allTeam.children[2].children[1].children[1].classList.add('fa', 'fa-twitter');
allTeam.children[2].children[1].children[2].classList.add('fa', 'fa-instagram');
allTeam.children[2].children[1].children[3].classList.add('fa', 'fa-linkedin');

allTeam.children[3].children[1].children[0].classList.add('fa', 'fa-facebook');
allTeam.children[3].children[1].children[1].classList.add('fa', 'fa-twitter');
allTeam.children[3].children[1].children[2].classList.add('fa', 'fa-instagram');
allTeam.children[3].children[1].children[3].classList.add('fa', 'fa-linkedin');

// Function Hover On Social Links 
allTeam.children[0].children[1].children[0].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#3b5998"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%"; this.style.border = "0"; };
allTeam.children[0].children[1].children[0].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[0].children[1].children[1].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#1da1f2"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[0].children[1].children[1].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[0].children[1].children[2].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#c13584"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[0].children[1].children[2].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[0].children[1].children[3].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#dd4b39"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[0].children[1].children[3].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };

allTeam.children[1].children[1].children[0].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#3b5998"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[1].children[1].children[0].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[1].children[1].children[1].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#1da1f2"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[1].children[1].children[1].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[1].children[1].children[2].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#c13584"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[1].children[1].children[2].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[1].children[1].children[3].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#dd4b39"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[1].children[1].children[3].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };

allTeam.children[2].children[1].children[0].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#3b5998"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[2].children[1].children[0].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[2].children[1].children[1].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#1da1f2"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[2].children[1].children[1].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[2].children[1].children[2].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#c13584"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[2].children[1].children[2].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[2].children[1].children[3].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#dd4b39"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[2].children[1].children[3].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };

allTeam.children[3].children[1].children[0].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#3b5998"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[3].children[1].children[0].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[3].children[1].children[1].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#1da1f2"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[3].children[1].children[1].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[3].children[1].children[2].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#c13584"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[3].children[1].children[2].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };
allTeam.children[3].children[1].children[3].onmouseenter = function () {"use strict"; this.style.backgroundColor = "#dd4b39"; this.style.color = "#FFF"; this.style.transform = "rotate(360deg)"; this.style.borderRadius = "50%";  this.style.border = "0"; };
allTeam.children[3].children[1].children[3].onmouseleave = function () {"use strict"; this.style.backgroundColor = "#FFF"; this.style.color = "#444"; this.style.transform = "rotate(-360deg)"; this.style.borderRadius = "3px"; this.style.border = "1px solid #AAA"; };

myList.children[4].onclick = function () {"use strict"; myBody.scrollTop = myTeam.offsetTop - 45; };

// End Section Our Team

/*******************************************************************************************/

// Start Section Map 

var // Create Element
    sectionMap = document.createElement('section'),
    myMap = document.createElement('div');

// Append To Body
myBody.appendChild(sectionMap);
sectionMap.appendChild(myMap);

sectionMap.classList.add('my-map');

sectionMap.style.width = "100%";
sectionMap.style.height = "400px";
sectionMap.style.borderTop = "5px dashed #999";
sectionMap.style.borderBottom = "5px dashed #999";

myMap.setAttribute('id', 'googleMap');
myMap.style.width = "100%";
myMap.style.height = "100%";

// End Section Map 

/*******************************************************************************************/

// Stsrt Section Footer

var // Create ELement Section 
    containerFooter = document.createElement('div'),
    footer = document.createElement('section'),
    footerTop = document.createElement('div'),
    footerLinks = document.createElement('div'),
    footerForm = document.createElement('form'),
    joinInp = document.createElement('input'),
    joinBtn = document.createElement('button'),
    footerBottom = document.createElement('div'),
    copyRight = document.createElement('p');

// Append To Section 
myBody.appendChild(footer);
footer.appendChild(containerFooter);
containerFooter.appendChild(footerTop);
containerFooter.appendChild(footerBottom);
footerTop.appendChild(footerLinks);
footerTop.appendChild(footerForm);
footerForm.appendChild(joinInp);
footerForm.appendChild(joinBtn);
footerBottom.appendChild(copyRight);

footer.classList.add('footer');
containerFooter.classList.add('container-footer');
footerTop.classList.add('footer-top');
footerBottom.classList.add('footer-bottom');

// Style Container
containerFooter.style.width = "1150px";
containerFooter.style.margin = "auto";
containerFooter.style.padding = "0 30px";
containerFooter.style.boxSizing = "border-box";

// Style Section Footer 
footer.style.padding = "40px 0 10px";
footer.style.boxSizing = "border-box";
footer.style.backgroundColor = "#333";
footer.style.fontFamily = "Arial";

// Style Footer Top 
footerTop.style.marginBottom = "50px";
footerLinks.classList.add('social-links-footer');
footerTop.style.overflow = "hidden";
footerLinks.style.float = "left";
footerLinks.style.marginTop = "10px";
footerForm.style.float = "right";
footerBottom.style.overflow = "hidden";

// Create Social Links 
for (i = 1; i <= 4; i = i + 1) {
    var oneLink = document.createElement('i');
    footerLinks.appendChild(oneLink);
    oneLink.style.width = "30px";
    oneLink.style.height = "30px";
    oneLink.style.border = "1px solid #555";
    oneLink.style.color = "#666";
    oneLink.style.lineHeight = "30px";
    oneLink.style.textAlign = "center";
    oneLink.style.marginRight = "10px";
    oneLink.style.cursor = "pointer";
}
footerLinks.children[0].classList.add('fa', "fa-facebook");
footerLinks.children[1].classList.add('fa', "fa-twitter");
footerLinks.children[2].classList.add('fa', "fa-instagram");
footerLinks.children[3].classList.add('fa', "fa-google-plus");

footerForm.classList.add('form');
footerForm.style.overflow = "hidden";
footerForm.style.padding = "10px";
footerForm.style.boxSizing = "border-box";
footerForm.style.backgroundColor = "#444";
footerForm.style.borderRadius = "6px";

joinInp.setAttribute('type', 'email');
joinInp.setAttribute('placeholder', 'Enter Your Email For Out Newsletter');
joinInp.setAttribute('required', 'required');
joinInp.style.padding = "5px";
joinInp.style.boxSizing = "border-box";
joinInp.style.width = "250px";
joinInp.style.height = "35px";
joinInp.style.borderRadius = "5px";
joinInp.style.marginRight = "40px";
joinInp.style.border = "0";
joinInp.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
joinInp.style.color = "#EEE";
joinInp.style.fontSize = "14px";

joinBtn.textContent = "Join";
joinBtn.setAttribute('type', 'submit');
joinBtn.style.width = "70px";
joinBtn.style.height = "35px";
joinBtn.style.backgroundColor = "#333";
joinBtn.style.color = "#999";
joinBtn.style.borderRadius = "5px";
joinBtn.style.border = "1px solid #666";
joinBtn.style.fontSize = "16px";
joinBtn.style.cursor = "pointer";
joinBtn.onmouseenter = function () {"use strict"; this.style.backgroundColor = "#222"; };
joinBtn.onmouseleave = function () {"use strict"; this.style.backgroundColor = "#333"; };

copyRight.innerHTML = "&copy; Copyright 2014 - ISAMA for Information Technology";
copyRight.style.margin = "0";
copyRight.style.textAlign = "center";
copyRight.style.fontSize = "14px";
copyRight.style.fontFamily = "Verdana";
copyRight.style.color = "#777";

myList.children[5].onclick = function () {"use strict"; myBody.scrollTop = sectionMap.offsetTop; };

// End Section Footer

/*******************************************************************************************/

// Start Button Scroll Up

var // Create Element 
    btnScrollUp = document.createElement('div'),
    iconScrollUp = document.createElement('i');

// Append To Body

myBody.appendChild(btnScrollUp);
btnScrollUp.appendChild(iconScrollUp);

// Style My Button
iconScrollUp.classList.add('fa', 'fa-arrow-up');
btnScrollUp.style.width = "45px";
btnScrollUp.style.height = "45px";
btnScrollUp.style.position = "fixed";
btnScrollUp.style.right = "10px";
btnScrollUp.style.bottom = "10px";
btnScrollUp.style.zIndex = "57";
btnScrollUp.style.borderRadius = "5px";
btnScrollUp.style.backgroundColor = "#3498db";
btnScrollUp.style.color = "#FFF";
btnScrollUp.style.cursor = "pointer";
btnScrollUp.style.textAlign = "center";
btnScrollUp.style.lineHeight = "45px";
btnScrollUp.style.fontSize = "29px";
btnScrollUp.style.display = "none";

// Create Function show Buttom when Scroll Window
function showSearchAndbtnScroll() {
    "use strict";
    var scwin = window.scrollY;
    if (scwin >= myAbout.offsetTop) {
        btnScrollUp.style.display = "block";
    } else {
        btnScrollUp.style.display = "none";
    }
    
    // Function Show Input Search when Scroll Window
    if (scwin >= 245) {
        divSearchFixed.style.display = "block";
    } else {
        divSearchFixed.style.display = "none";
    }
}

// Create Function Click To Button Make Scroll Up 0
function scrollUp() {
    "use strict";
    myBody.scrollTop = 0;
}

window.onscroll = showSearchAndbtnScroll;
btnScrollUp.onclick = scrollUp;

// End Button Scroll Up

/*******************************************************************************************/

// Start All Responsive 

var // All Screen Variable
    mql_1150 = window.matchMedia("(max-width: 1150px)"),
    mql_min_767 = window.matchMedia("(min-width: 767px)"),
    mql_1080 = window.matchMedia("(max-width: 1080px)"),
    mql_992 = window.matchMedia("(max-width: 992px)"),
    mql_768 = window.matchMedia("(max-width: 768px)"),
    mql_400 = window.matchMedia("(max-width: 400px)");

// Screen 1080px

if (mql_1080.matches) {
    // Navbar 
    myList.children[0].style.padding = "21px 15px";
    myList.children[1].style.padding = "21px 15px";
    myList.children[2].style.padding = "21px 15px";
    myList.children[3].style.padding = "21px 15px";
    myList.children[4].style.padding = "21px 15px";
    myList.children[5].style.padding = "21px 15px";
}
/*******************************************************************************************/
// Screen 1200px
if (mql_1150.matches) {
    container.style.width = "auto";
    myAbout.style.width = "90%";
    myService.style.width = "90%";
    divSearch.style.width = "250px";
    divSearch.style.marginLeft = "15px";
    inpSearch.style.width = "190px";
    inpSearch.style.fontSize = "13px";
    
    // Start Section Our Project
    containerProj.style.width = "auto";
    containerProj.style.padding = "0 30px";
    containerProj.style.boxSizing = "border-box";
    iconHeadProj.style.width = "25%";
    contHeadProj.style.width = "75%";
    
    // Style all images 
    itemsProj.children[0].children[0].children[0].style.width = "100%";
    itemsProj.children[1].children[0].children[0].style.width = "100%";
    itemsProj.children[2].children[0].children[0].style.width = "100%";
    itemsProj.children[3].children[0].children[0].style.width = "100%";
    itemsProj.children[4].children[0].children[0].style.width = "100%";
    itemsProj.children[5].children[0].children[0].style.width = "100%";
    itemsProj.children[6].children[0].children[0].style.width = "100%";
    itemsProj.children[7].children[0].children[0].style.width = "100%";
    
    // Section Our Team
    containerTeam.style.width = "auto";
    headTeam.style.width = "37%";
    iconHeadTeam.style.marginTop = "15px";
    iconHeadTeam.style.width = "20%";
    contHeadTeam.style.width = "80%";
    
    // Start Footer
    containerFooter.style.width = "auto";
    
}
/*******************************************************************************************/
// Screen 992px
if (mql_992.matches) {
    container.style.width = "auto";
    container.style.padding = "0 15px";
    sectionSignUp.style.marginLeft = "100px";
    links.style.marginRight = "100px";
    
    ///////////////////////////////////////////////////////
    
    // Start Header And Navbar  
    
    myContact.style.display = "none";
    divSearch.style.display = "none";
    
    ///////////////////////////////////////////////////////
    
    // Section About Me
    myAbout.style.width = "90%";
    about.style.width = "100%";
    about.style.float = "none";
    about.style.margin = "0 auto 20px";
    why.style.width = "100%";
    why.style.float = "none";
    why.style.margin = "auto";
    
    ///////////////////////////////////////////////////////
    
    // Start Section Service
    myService.style.width = "90%";
    
    myService.children[3].style.width = "51%";
    myService.children[4].style.width = "49%";
    
    ///////////////////////////////////////////////////////
    
    // Srtat Section Our Projcet
    containerProj.style.width = "auto";
    containerProj.style.padding = "0 30px";
    containerProj.style.boxSizing = "border-box";
    
    headProj.style.height = "auto";
    iconHeadProj.style.float = "none";
    iconHeadProj.style.margin = "0";
    iconHeadProj.style.width = "75px";
    contHeadProj.style.width = "auto";
    contHeadProj.style.float = "none";
    contHeadProj.style.paddingLeft = "0";
    h3ContHeadProj.style.textAlign = "center";
    h3ContHeadProj.style.fontSize = "24px";
    pContHeadProj.style.textAlign = "center";
    pContHeadProj.style.fontSize = "13px";
    
    // Start Products
    itemsProj.children[0].style.width = "48%";
    itemsProj.children[0].style.marginRight = "2%";
    itemsProj.children[1].style.width = "48%";
    itemsProj.children[1].style.marginLeft = "2%";
    itemsProj.children[1].style.marginRight = "0";
    
    itemsProj.children[2].style.width = "48%";
    itemsProj.children[2].style.marginRight = "2%";
    itemsProj.children[3].style.width = "48%";
    itemsProj.children[3].style.marginLeft = "2%";
    itemsProj.children[3].style.marginRight = "0";
    
    itemsProj.children[4].style.width = "48%";
    itemsProj.children[4].style.marginRight = "2%";
    itemsProj.children[5].style.width = "48%";
    itemsProj.children[5].style.marginLeft = "2%";
    itemsProj.children[5].style.marginRight = "0";
    
    itemsProj.children[6].style.width = "48%";
    itemsProj.children[6].style.marginRight = "2%";
    itemsProj.children[7].style.width = "48%";
    itemsProj.children[7].style.marginLeft = "2%";
    itemsProj.children[7].style.marginRight = "0";
    
    // Style all images 
    itemsProj.children[0].children[0].children[0].style.width = "220px";
    itemsProj.children[1].children[0].children[0].style.width = "220px";
    itemsProj.children[2].children[0].children[0].style.width = "220px";
    itemsProj.children[3].children[0].children[0].style.width = "220px";
    itemsProj.children[4].children[0].children[0].style.width = "220px";
    itemsProj.children[5].children[0].children[0].style.width = "220px";
    itemsProj.children[6].children[0].children[0].style.width = "220px";
    itemsProj.children[7].children[0].children[0].style.width = "220px";
    
    // Section Our Team
    containerTeam.style.width = "auto";
    
    headTeam.style.height = "120px";
    
    allTeam.children[0].style.width = "40%";
    allTeam.children[0].style.margin = "0 5% 25px 5%";
    allTeam.children[1].style.width = "40%";
    allTeam.children[1].style.margin = "0 5% 25px 5%";
    allTeam.children[2].style.width = "40%";
    allTeam.children[2].style.margin = "0 5% 25px 5%";
    allTeam.children[3].style.width = "40%";
    allTeam.children[3].style.margin = "0 5% 25px 5%";
    
    // Start Footer
    containerFooter.style.width = "auto";
}

/*******************************************************************************************/

// Screen Mobile And Tablet
if (mql_768.matches) {
    container.style.width = "auto";
    sectionSignUp.style.float = "none";
    sectionSignUp.style.margin = "auto";
    sectionSignUp.style.width = "137px";
    
    sectionSignUp.children[0].style.padding = "7px 10px";
    sectionSignUp.children[1].style.padding = "7px 13px";
    sectionSignUp.children[0].style.marginTop = "7px";
    sectionSignUp.children[1].style.marginTop = "7px";
    
    links.style.float = "none";
    links.style.position = "fixed";
    links.style.bottom = "0";
    links.style.left = "0";
    links.style.width = "100%";
    links.style.textAlign = "center";
    links.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    links.style.zIndex = "55";
    
    links.children[0].style.padding = "10px 15px";
    links.children[0].style.float = "none";
    links.children[1].style.padding = "10px 15px";
    links.children[1].style.float = "none";
    links.children[2].style.padding = "10px 15px";
    links.children[2].style.float = "none";
    links.children[3].style.padding = "10px 15px";
    links.children[3].style.float = "none";
    
    // Responsive Header 
    
    myHeader.style.height = "auto";
    myHeader.style.textAlign = "center";
    myLogo.style.width = "300px";
    myLogo.style.float = "none";
    myLogo.style.margin = "auto";
    myBrand.style.float = "none";
    myBrand.style.margin = "20px 0 0";
    
    myContact.style.display = "none";
    
    ///////////////////////////////////////////////////////
    
    // Start Navbar 
    divSearch.style.display = "block";
    divSearch.style.width = "300px";
    divSearch.style.float = "right";
    inpSearch.style.width = "240px";
    inpSearch.style.fontSize = "15px";
    inpSearch.style.marginRight = "20px";
    iconSearch.style.float = "left";
    iconSearch.style.marginTop = "15px";
    iconSearch.style.marginLeft = "10px";
    divSearchFixed.style.display = "none";
    
    // Remove Overlay In screen Moblie
    inpSearch.onfocus = function () {
        "use strict";
        if (this.placeholder === 'Type Your Search Words') { this.placeholder = ''; }
        overlay.style.display = "none";
    };
    inpSearch.onblur = function () {
        "use strict";
        if (this.placeholder === '') {this.placeholder = 'Type Your Search Words'; }
        overlay.style.display = "none";
    };
    
    myNav.style.position = "relative";
    
    btnShowMenu.style.display = "block";
    
    myList.style.padding = "0";
    myList.style.float = "none";
    myList.style.position = "absolute";
    myList.style.top = "61px";
    myList.style.left = "0";
    myList.style.borderBottom = "1px solid #AAA";
    myList.style.width = "100%";
    myList.style.opacity = "1";
    myList.style.transition = "all 1s ease-in-out";
    myList.classList.add("hidemenu");
    
    myList.children[0].style.float = "none";
    myList.children[0].style.padding = "20px 0 20px 20px";
    myList.children[0].style.borderRight = "0";
    
    myList.children[1].style.float = "none";
    myList.children[1].style.padding = "20px 0 20px 20px";
    myList.children[1].style.borderRight = "0";
    
    myList.children[2].style.float = "none";
    myList.children[2].style.padding = "20px 0 20px 20px";
    myList.children[2].style.borderRight = "0";
    
    myList.children[3].style.float = "none";
    myList.children[3].style.padding = "20px 0 20px 20px";
    myList.children[3].style.borderRight = "0";
    
    myList.children[4].style.float = "none";
    myList.children[4].style.padding = "20px 0 20px 20px";
    myList.children[4].style.borderRight = "0";
    
    myList.children[5].style.float = "none";
    myList.children[5].style.padding = "20px 0 20px 20px";
    myList.children[5].style.borderRight = "0";
    
    // Function Show Menu when Click To Icon
    btnShowMenu.onclick = function () {"use strict"; myList.classList.toggle("hidemenu"); };
    
    // Create Function Navbar Fixed
    window.onscroll = function () {
        "use strict";
        var scwin = document.body.scrollTop;
        if (scwin >= 245) {
            myNav.style.position = "fixed";
            myNav.style.top = "45px";
            myNav.style.left = "0";
            myNav.style.borderBottom = "2px solid #CCC";
        } else {
            myNav.style.position = "relative";
            myNav.style.top = "0";
            myNav.style.left = "0";
        }
    };
    
    ///////////////////////////////////////////////////////
    
    // Responsive Slider 
    headingSlider.style.fontSize = "25px";
    pSlider.style.fontSize = "18px";
    pSlider.style.textIndent = "0";
    spanSlider.style.display = "none";
    
    ///////////////////////////////////////////////////////
    
    // Start Section Service
    
    myService.style.width = "auto";
    headServ.style.height = "auto";
    
    iconHeadServ.style.float = "none";
    iconHeadServ.style.margin = "0";
    iconHeadServ.style.width = "75px";
    contHeadServ.style.float = "none";
    contHeadServ.style.width = "auto";
    contHeadServ.style.paddingLeft = "0";
    h3ContHeadServ.style.textAlign = "center";
    h3ContHeadServ.style.fontSize = "24px";
    pContHeadServ.style.textAlign = "center";
    pContHeadServ.style.fontSize = "13px";
    
    myService.children[1].children[1].children[0].style.fontSize = "18px";
    myService.children[2].children[1].children[0].style.fontSize = "18px";
    myService.children[3].children[1].children[0].style.fontSize = "18px";
    myService.children[4].children[1].children[0].style.fontSize = "18px";
    myService.children[5].children[1].children[0].style.fontSize = "18px";
    myService.children[6].children[1].children[0].style.fontSize = "18px";
    
    myService.children[1].children[1].children[1].style.fontSize = "13px";
    myService.children[2].children[1].children[1].style.fontSize = "13px";
    myService.children[3].children[1].children[1].style.fontSize = "13px";
    myService.children[4].children[1].children[1].style.fontSize = "13px";
    myService.children[5].children[1].children[1].style.fontSize = "13px";
    myService.children[6].children[1].children[1].style.fontSize = "13px";
    
    // Style All Div In Service
    
    myService.children[1].style.float = "none";
    myService.children[1].style.padding = "10px";
    myService.children[1].style.margin = "0 auto 20px";
    myService.children[1].style.height = "120px";
    myService.children[1].style.width = "80%";
    
    myService.children[2].style.float = "none";
    myService.children[2].style.padding = "10px";
    myService.children[2].style.margin = "0 auto 20px";
    myService.children[2].style.height = "120px";
    myService.children[2].style.width = "80%";
    
    myService.children[3].style.float = "none";
    myService.children[3].style.padding = "10px";
    myService.children[3].style.margin = "0 auto 20px";
    myService.children[3].style.height = "120px";
    myService.children[3].style.width = "80%";
    
    myService.children[4].style.float = "none";
    myService.children[4].style.padding = "10px";
    myService.children[4].style.margin = "0 auto 20px";
    myService.children[4].style.height = "120px";
    myService.children[4].style.width = "80%";
    
    myService.children[5].style.float = "none";
    myService.children[5].style.padding = "10px";
    myService.children[5].style.margin = "0 auto 20px";
    myService.children[5].style.height = "120px";
    myService.children[5].style.width = "80%";
    
    myService.children[6].style.float = "none";
    myService.children[6].style.padding = "10px";
    myService.children[6].style.margin = "0 auto 20px";
    myService.children[6].style.height = "120px";
    myService.children[6].style.width = "80%";
    
    // Strat Responsive Section Project
    
    containerProj.style.width = "auto";
    containerProj.style.padding = "0 15px";
    containerProj.style.boxSizing = "border-box";
    
    headProj.style.height = "auto";
    iconHeadProj.style.float = "none";
    iconHeadProj.style.margin = "0";
    iconHeadProj.style.width = "75px";
    contHeadProj.style.float = "none";
    contHeadProj.style.width = "auto";
    contHeadProj.style.paddingLeft = "0";
    h3ContHeadProj.style.textAlign = "center";
    h3ContHeadProj.style.fontSize = "24px";
    pContHeadProj.style.textAlign = "center";
    pContHeadProj.style.fontSize = "13px";
    
    menuProj.children[0].style.padding = "10px";
    menuProj.children[0].style.fontSize = "13px";
    menuProj.children[1].style.padding = "10px";
    menuProj.children[1].style.fontSize = "13px";
    menuProj.children[2].style.padding = "10px";
    menuProj.children[2].style.fontSize = "13px";
    menuProj.children[3].style.padding = "10px";
    menuProj.children[3].style.fontSize = "13px";
    menuProj.children[4].style.padding = "10px";
    menuProj.children[4].style.fontSize = "13px";
    
    // Start Products 
    itemsProj.children[0].style.width = "300px";
    itemsProj.children[0].style.margin = "0 auto 25px";
    itemsProj.children[0].style.float = "none";
    itemsProj.children[1].style.width = "300px";
    itemsProj.children[1].style.margin = "0 auto 25px";
    itemsProj.children[1].style.float = "none";
    itemsProj.children[2].style.width = "300px";
    itemsProj.children[2].style.margin = "0 auto 25px";
    itemsProj.children[2].style.float = "none";
    itemsProj.children[3].style.width = "300px";
    itemsProj.children[3].style.margin = "0 auto 25px";
    itemsProj.children[3].style.float = "none";
    itemsProj.children[4].style.width = "300px";
    itemsProj.children[4].style.margin = "0 auto 25px";
    itemsProj.children[4].style.float = "none";
    itemsProj.children[5].style.width = "300px";
    itemsProj.children[5].style.margin = "0 auto 25px";
    itemsProj.children[5].style.float = "none";
    itemsProj.children[6].style.width = "300px";
    itemsProj.children[6].style.margin = "0 auto 25px";
    itemsProj.children[6].style.float = "none";
    itemsProj.children[7].style.width = "300px";
    itemsProj.children[7].style.margin = "0 auto 25px";
    itemsProj.children[7].style.float = "none";
    
    //////////////////////////////////////////////////////////////////////////////////
    
    // Start Responsive Section Our Team 
    myTeam.style.height = "auto";
    containerTeam.style.width = "auto";
    
    headTeam.style.height = "180px";
    
    iconHeadTeam.style.float = "none";
    iconHeadTeam.style.margin = "0";
    iconHeadTeam.style.width = "75px";
    contHeadTeam.style.float = "none";
    contHeadTeam.style.width = "auto";
    contHeadTeam.style.paddingLeft = "0";
    h3ContHeadTeam.style.textAlign = "center";
    h3ContHeadTeam.style.fontSize = "24px";
    pContHeadTeam.style.textAlign = "center";
    pContHeadTeam.style.fontSize = "13px";
    
    allTeam.children[0].style.width = "90%";
    allTeam.children[0].style.float = "none";
    allTeam.children[0].style.margin = "0 5% 40px";
    allTeam.children[1].style.width = "90%";
    allTeam.children[1].style.float = "none";
    allTeam.children[1].style.margin = "0 5% 40px";
    allTeam.children[2].style.width = "90%";
    allTeam.children[2].style.float = "none";
    allTeam.children[2].style.margin = "0 5% 40px";
    allTeam.children[3].style.width = "90%";
    allTeam.children[3].style.float = "none";
    allTeam.children[3].style.margin = "0 5% 40px";
    
    
    // Start Footer
    footer.style.paddingBottom = "60px";
    containerFooter.style.width = "auto";
    footerTop.style.marginBottom = "30px";
    footerLinks.style.float = "none";
    footerLinks.style.textAlign = "center";
    footerLinks.style.margin = "0 0 30px";
    
    footerForm.style.float = "none";
    footerForm.style.width = "90%";
    footerForm.style.margin = "auto";
    
    joinInp.style.width = "70%";
    joinInp.style.fontSize = "13px";
    joinInp.style.marginRight = "10%";
    joinBtn.style.width = "20%";
    
    
    // Function Smooth Scroll
    myList.children[1].onclick = function () {"use strict"; myBody.scrollTop = myAbout.offsetTop - 108; };
    myList.children[2].onclick = function () {"use strict"; myBody.scrollTop = myService.offsetTop - 50; };
    myList.children[3].onclick = function () {"use strict"; myBody.scrollTop = myProj.offsetTop - 100; };
    myList.children[4].onclick = function () {"use strict"; myBody.scrollTop = myTeam.offsetTop - 100; };
    myList.children[5].onclick = function () {"use strict"; myBody.scrollTop = sectionMap.offsetTop - 110; };
    
} else {
    links.style.position = "static";
}

// End All Responsive

/*******************************************************************************************/

// Start Code google Map

var myCenter = new google.maps.LatLng(30.20, 31.19);
var marker;

function initialize()
{
var mapProp = {
    center:myCenter,
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
    position:myCenter,
    animation:google.maps.Animation.BOUNCE
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

/*******************************************************************************************/