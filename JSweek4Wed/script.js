const p1Text = `When you want to buy any application from the Apple iTunes
store you have more choices than you can handle. Most of the users
scroll past the application description completely avoiding
it like ads displayed on the right column of your webpage.
Their choice is dependent on three important factors price,
screenshot and reviews.
`;
const p2Text = `Last month Apple released the anticipated WatchKit Framework for
developers in the form of iOS 8.2 beta SDK release.
The WatchKit framework enable the developers to create Apple
Watch applications. In this article we are going to focus on
the basics of getting started with the WatchKit framework
and developing apps for the Apple Watch`;

const p3Text = `Swift is a modern programming language developed
by Apple to create generation of iOS and OSX applications.
Swift is a fairly new language and still in development
but it clearly reflects the intentions and the future
direction. This article will revolve around the basic concepts
in the Swift language and how you can get started`

function htmlCreator(elementName, height, width, text, elementAppendedTo,ID,CLASSES){
    var newElement = document.createElement(elementName);
    newElement.style.width = width;
    newElement.style.height = height;
    newElement.innerText = text;
    newElement.id = ID;
    newElement.classList.add(...CLASSES);
    document.querySelector(elementAppendedTo).appendChild(newElement);

}


// htmlCreator("h1","","", "Hello World",document.body);
//FIRST ROW
htmlCreator("div","100px","100%","",".container","div1",["row","d-flex","bgBlue","align-content-center"]);
htmlCreator("div","","","HighOnCoding","#div1","headerText",["h2","col-4"]);
htmlCreator("div","","","Home","#div1","two",["col-2"]);
htmlCreator("div","","","Categories","#div1","two",["col-2"]);

// SECOND ROW
htmlCreator("div","150px","100%","",".container","row2",["bgGrey","row","overflow-hidden"]);
htmlCreator("h3","","","Curse of the Current Reviews","#row2","row2Header",["text-white"]);
htmlCreator("p","","",p1Text,"#row2","row2P",["text-white"]);

// THIRD ROW
htmlCreator("div","150px","100%","",".container","row3",["bg-white","row","overflow-hidden"]);
htmlCreator("h3","","","Hello WatchKit","#row3","row3Header",["text-dark","col-12"]);
htmlCreator("p","","",p2Text,"#row3","row3P",["text-dark","col-12"]);

// FOURTH elementName, height, width, text, elementAppendedTo,ID,CLASSES
htmlCreator("div","20px","100%","",".container","row4",["bgOrange","row"]);
htmlCreator("div","","","12 comments","#row4","row4c",["col-3"]);
htmlCreator("div","","","124 Likes","#row4","row4l",["col-3"]);

// FITFH ROW
htmlCreator("div","150px","100%","",".container","row5",["bg-white","row","overflow-hidden"]);
htmlCreator("h3","","","Introduction to Swift","#row5","row5Header",["text-dark","col-12"]);
htmlCreator("p","","",p3Text,"#row5","row5P",["text-dark","col-12"]);

// SIXTH ROW elementName, height, width, text, elementAppendedTo,ID,CLASSES
htmlCreator("div","20px","100%","",".container","row6",["bgOrange","row"]);
htmlCreator("div","","","15 comments","#row6","row6c",["col-3"]);
htmlCreator("div","","","45 Likes","#row6","row6l",["col-3"]);



