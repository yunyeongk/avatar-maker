var face = document.getElementById("face-select");
var brows = document.getElementById("eyebrows-select");
var eyes = document.getElementById("eyes-select");
var nose = document.getElementById("nose-select");
var mouth = document.getElementById("mouth-select");

var hairFront = document.getElementById("hairfront-select");
var hairBack = document.getElementById("hairback-select");

var tabLabelFace = document.getElementById("tab-label-face");
var tabLabelHair = document.getElementById("tab-label-hair");
var tabLabelAcc = document.getElementById("tab-label-acc");
var tabLabelCloth = document.getElementById("tab-label-cloth");
var tabLabelBack = document.getElementById("tab-label-back");

var tabFace = document.getElementById("tab-face");
var tabHair = document.getElementById("tab-hair");
var tabAcc = document.getElementById("tab-acc");
var tabCloth = document.getElementById("tab-cloth");
var tabBack = document.getElementById("tab-back");

var itemFace1 = document.getElementById("item-face1");
var itemFace2 = document.getElementById("item-face2");
var itemFace3 = document.getElementById("item-face3");
var itemFace4 = document.getElementById("item-face4");
var itemFace5 = document.getElementById("item-face5");
var skin1 = document.getElementById("item-skin1");
var skin2 = document.getElementById("item-skin2");
var skin3 = document.getElementById("item-skin3");
var itemBrows1 = document.getElementById("item-eyebrows1");
var itemBrows2 = document.getElementById("item-eyebrows2");
var itemBrows3 = document.getElementById("item-eyebrows3");
var itemBrows4 = document.getElementById("item-eyebrows4");
var itemBrows5 = document.getElementById("item-eyebrows5");
var itemBrows6 = document.getElementById("item-eyebrows6");
var itemNose0 = document.getElementById("item-nose0");
var itemNose1 = document.getElementById("item-nose1");
var itemNose2 = document.getElementById("item-nose2");
var itemEyes1 = document.getElementById("item-eyes1");
var itemEyes2 = document.getElementById("item-eyes2");
var itemEyes3 = document.getElementById("item-eyes3");
var itemEyes4 = document.getElementById("item-eyes4");
var itemEyes5 = document.getElementById("item-eyes5");
var itemEyes6 = document.getElementById("item-eyes6");
var itemEyes7 = document.getElementById("item-eyes7");
var itemEyes8 = document.getElementById("item-eyes8");
var itemEyes9 = document.getElementById("item-eyes9");
var itemEyes10 = document.getElementById("item-eyes10");
var itemMouth1 = document.getElementById("item-mouth1");
var itemMouth2 = document.getElementById("item-mouth2");
var itemMouth3 = document.getElementById("item-mouth3");
var itemMouth4 = document.getElementById("item-mouth4");
var itemMouth5 = document.getElementById("item-mouth5");
var itemHairfront0 = document.getElementById("item-hairfront0");
var itemHairfront1 = document.getElementById("item-hairfront1");
var itemHairfront2 = document.getElementById("item-hairfront2");
var itemHairfront3 = document.getElementById("item-hairfront3");
var itemHairfront4 = document.getElementById("item-hairfront4");
var itemHairfront5 = document.getElementById("item-hairfront5");
var itemHairfront6 = document.getElementById("item-hairfront6");
var itemHairfront7 = document.getElementById("item-hairfront7");
var itemHairfront8 = document.getElementById("item-hairfront8");
var itemHairfront9 = document.getElementById("item-hairfront9");
var itemHairfront10 = document.getElementById("item-hairfront10");
var itemHairback0 = document.getElementById("item-hairback0");
var itemHairback1 = document.getElementById("item-hairback1");
var itemHairback2 = document.getElementById("item-hairback2");
var itemHairback3 = document.getElementById("item-hairback3");
var itemHairback4 = document.getElementById("item-hairback4");
var itemHairback5 = document.getElementById("item-hairback5");
var itemHairback6 = document.getElementById("item-hairback6");
var itemHairback7 = document.getElementById("item-hairback7");
var itemBackground1 = document.getElementById("item-background1");
var itemBackground2 = document.getElementById("item-background2");
var itemBackground3 = document.getElementById("item-background3");
var itemBackground4 = document.getElementById("item-background4");
var itemClothing1 = document.getElementById("item-clothing1");
var itemClothing2 = document.getElementById("item-clothing2");
var itemClothing3 = document.getElementById("item-clothing3");
var HairfrontColor1 = document.getElementById("item-hairfrontcolor1");
var HairfrontColor2 = document.getElementById("item-hairfrontcolor2");
var HairfrontColor3 = document.getElementById("item-hairfrontcolor3");
var HairfrontColor4 = document.getElementById("item-hairfrontcolor4");
var HairbackColor1 = document.getElementById("item-hairbackcolor1");
var HairbackColor2 = document.getElementById("item-hairbackcolor2");
var HairbackColor3 = document.getElementById("item-hairbackcolor3");
var HairbackColor4 = document.getElementById("item-hairbackcolor4");

var avatarFace1 = document.getElementById("avatar-face1");
var avatarFace2 = document.getElementById("avatar-face2");
var avatarFace3 = document.getElementById("avatar-face3");
var avatarFace4 = document.getElementById("avatar-face4");
var avatarFace5 = document.getElementById("avatar-face5");
var avatarEar1 = document.getElementById("avatar-ear1");
var avatarEar2 = document.getElementById("avatar-ear2");
var avatarEar3 = document.getElementById("avatar-ear3");
var avatarEar4 = document.getElementById("avatar-ear4");
var avatarEar5 = document.getElementById("avatar-ear5");
var avatarBrows1 = document.getElementById("avatar-eyebrows1");
var avatarBrows2 = document.getElementById("avatar-eyebrows2");
var avatarBrows3 = document.getElementById("avatar-eyebrows3");
var avatarBrows4 = document.getElementById("avatar-eyebrows4");
var avatarBrows5 = document.getElementById("avatar-eyebrows5");
var avatarBrows6 = document.getElementById("avatar-eyebrows6");
var avatarNose1 = document.getElementById("avatar-nose1");
var avatarNose2 = document.getElementById("avatar-nose2");
var avatarEyes1 = document.getElementById("avatar-eyes1");
var avatarEyes2 = document.getElementById("avatar-eyes2");
var avatarEyes3 = document.getElementById("avatar-eyes3");
var avatarEyes4 = document.getElementById("avatar-eyes4");
var avatarEyes5 = document.getElementById("avatar-eyes5");
var avatarEyes6 = document.getElementById("avatar-eyes6");
var avatarEyes7 = document.getElementById("avatar-eyes7");
var avatarEyes8 = document.getElementById("avatar-eyes8");
var avatarEyes9 = document.getElementById("avatar-eyes9");
var avatarEyes10 = document.getElementById("avatar-eyes10");
var avatarMouth1 = document.getElementById("avatar-mouth1");
var avatarMouth2 = document.getElementById("avatar-mouth2");
var avatarMouth3 = document.getElementById("avatar-mouth3");
var avatarMouth4 = document.getElementById("avatar-mouth4");
var avatarMouth5 = document.getElementById("avatar-mouth5");
var avatarHairfront1 = document.getElementById("avatar-hairfront1");
var avatarHairfront2 = document.getElementById("avatar-hairfront2");
var avatarHairfront3 = document.getElementById("avatar-hairfront3");
var avatarHairfront4 = document.getElementById("avatar-hairfront4");
var avatarHairfront5 = document.getElementById("avatar-hairfront5");
var avatarHairfront6 = document.getElementById("avatar-hairfront6");
var avatarHairfront7 = document.getElementById("avatar-hairfront7");
var avatarHairfront8 = document.getElementById("avatar-hairfront8");
var avatarHairfront9 = document.getElementById("avatar-hairfront9");
var avatarHairfront10 = document.getElementById("avatar-hairfront10");
var avatarHairback1 = document.getElementById("avatar-hairback1");
var avatarHairback2 = document.getElementById("avatar-hairback2");
var avatarHairback3 = document.getElementById("avatar-hairback3");
var avatarHairback4 = document.getElementById("avatar-hairback4");
var avatarHairback5 = document.getElementById("avatar-hairback5");
var avatarHairback6 = document.getElementById("avatar-hairback6");
var avatarHairback7 = document.getElementById("avatar-hairback7");
var avatarClothing1 = document.getElementById("avatar-clothing1");
var avatarClothing2 = document.getElementById("avatar-clothing2");
var avatarClothing3 = document.getElementById("avatar-clothing3");

var icClose = document.getElementById("ic-close");
var contact = document.getElementById("contact-container");
var naviContact = document.getElementById("navi-contact");

naviContact.onclick = function(){
    contact.style.display="block"
}

icClose.onclick = function(){
    contact.style.display="none"
}


itemFace1.onclick = function() {
    avatarFace1.style.display="block"
    avatarEar1.style.display="block"
    avatarFace2.style.display="none"
    avatarEar2.style.display="none"
    avatarFace3.style.display="none"
    avatarEar3.style.display="none"
    avatarFace4.style.display="none"
    avatarEar4.style.display="none"
    avatarFace5.style.display="none"
    avatarEar5.style.display="none"
    itemFace1.className = "item-selected item-card-square elevation2"
    itemFace2.className = "item-card-square elevation3"
    itemFace3.className = "item-card-square elevation3"
    itemFace4.className = "item-card-square elevation3"
    itemFace5.className = "item-card-square elevation3"
};
itemFace2.onclick = function() {
    avatarFace1.style.display="none"
    avatarEar1.style.display="none"
    avatarFace2.style.display="block"
    avatarEar2.style.display="block"
    avatarFace3.style.display="none"
    avatarEar3.style.display="none"
    avatarFace4.style.display="none"
    avatarEar4.style.display="none"
    avatarFace5.style.display="none"
    avatarEar5.style.display="none"
    itemFace1.className = "item-card-square elevation3"
    itemFace2.className = "item-selected item-card-square elevation2"
    itemFace3.className = "item-card-square elevation3"
    itemFace4.className = "item-card-square elevation3"
    itemFace5.className = "item-card-square elevation3"
};
itemFace3.onclick = function() {
    avatarFace1.style.display="none"
    avatarEar1.style.display="none"
    avatarFace2.style.display="none"
    avatarEar2.style.display="none"
    avatarFace3.style.display="block"
    avatarEar3.style.display="block"
    avatarFace4.style.display="none"
    avatarEar4.style.display="none"
    avatarFace5.style.display="none"
    avatarEar5.style.display="none"
    itemFace1.className = "item-card-square elevation3"
    itemFace2.className = "item-card-square elevation3"
    itemFace3.className = "item-selected item-card-square elevation2"
    itemFace4.className = "item-card-square elevation3"
    itemFace5.className = "item-card-square elevation3"
};
itemFace4.onclick = function() {
    avatarFace1.style.display="none"
    avatarEar1.style.display="none"
    avatarFace2.style.display="none"
    avatarEar2.style.display="none"
    avatarFace3.style.display="none"
    avatarEar3.style.display="none"
    avatarFace4.style.display="block"
    avatarEar4.style.display="block"
    avatarFace5.style.display="none"
    avatarEar5.style.display="none"
    itemFace1.className = "item-card-square elevation3"
    itemFace2.className = "item-card-square elevation3"
    itemFace3.className = "item-card-square elevation3"
    itemFace4.className = "item-selected item-card-square elevation2"
    itemFace5.className = "item-card-square elevation3"
};
itemFace5.onclick = function() {
    avatarFace1.style.display="none"
    avatarEar1.style.display="none"
    avatarFace2.style.display="none"
    avatarEar2.style.display="none"
    avatarFace3.style.display="none"
    avatarEar3.style.display="none"
    avatarFace4.style.display="none"
    avatarEar4.style.display="none"
    avatarFace5.style.display="block"
    avatarEar5.style.display="block"
    itemFace1.className = "item-card-square elevation3"
    itemFace2.className = "item-card-square elevation3"
    itemFace3.className = "item-card-square elevation3"
    itemFace4.className = "item-card-square elevation3"
    itemFace5.className = "item-selected item-card-square elevation2"
};

skin1.onclick = function() {
    skin1.className = "item-selected item-card-circle elevation2"
    skin2.className = "item-card-circle elevation3"
    skin3.className = "item-card-circle elevation3"
    avatarFace1.classList.add("skin1-bright")
    avatarFace2.classList.add("skin1-bright")
    avatarFace3.classList.add("skin1-bright")
    avatarFace4.classList.add("skin1-bright")
    avatarFace5.classList.add("skin1-bright")
    avatarEar1.classList.add("skin1-dark")
    avatarEar2.classList.add("skin1-dark")
    avatarEar3.classList.add("skin1-dark")
    avatarEar4.classList.add("skin1-dark")
    avatarEar5.classList.add("skin1-dark")
    avatarFace1.classList.remove("skin3-bright")
    avatarFace2.classList.remove("skin3-bright")
    avatarFace3.classList.remove("skin3-bright")
    avatarFace4.classList.remove("skin3-bright")
    avatarFace5.classList.remove("skin3-bright")
    avatarEar1.classList.remove("skin3-dark")
    avatarEar2.classList.remove("skin3-dark")
    avatarEar3.classList.remove("skin3-dark")
    avatarEar4.classList.remove("skin3-dark")
    avatarEar5.classList.remove("skin3-dark")
};
skin2.onclick = function() {
    skin1.className = "item-card-circle elevation3"
    skin2.className = "item-selected item-card-circle elevation2"
    skin3.className = "item-card-circle elevation3"
    avatarFace1.classList.remove("skin3-bright")
    avatarFace2.classList.remove("skin3-bright")
    avatarFace3.classList.remove("skin3-bright")
    avatarFace4.classList.remove("skin3-bright")
    avatarFace5.classList.remove("skin3-bright")
    avatarEar1.classList.remove("skin3-dark")
    avatarEar2.classList.remove("skin3-dark")
    avatarEar3.classList.remove("skin3-dark")
    avatarEar4.classList.remove("skin3-dark")
    avatarEar5.classList.remove("skin3-dark")
    avatarFace1.classList.remove("skin1-bright")
    avatarFace2.classList.remove("skin1-bright")
    avatarFace3.classList.remove("skin1-bright")
    avatarFace4.classList.remove("skin1-bright")
    avatarFace5.classList.remove("skin1-bright")
    avatarEar1.classList.remove("skin1-dark")
    avatarEar2.classList.remove("skin1-dark")
    avatarEar3.classList.remove("skin1-dark")
    avatarEar4.classList.remove("skin1-dark")
    avatarEar5.classList.remove("skin1-dark")
};
skin3.onclick = function() {
    skin1.className = "item-card-circle elevation3"
    skin2.className = "item-card-circle elevation3"
    skin3.className = "item-selected item-card-circle elevation2"
    avatarFace1.classList.add("skin3-bright")
    avatarFace2.classList.add("skin3-bright")
    avatarFace3.classList.add("skin3-bright")
    avatarFace4.classList.add("skin3-bright")
    avatarFace5.classList.add("skin3-bright")
    avatarEar1.classList.add("skin3-dark")
    avatarEar2.classList.add("skin3-dark")
    avatarEar3.classList.add("skin3-dark")
    avatarEar4.classList.add("skin3-dark")
    avatarEar5.classList.add("skin3-dark")
};

itemBrows1.onclick = function() {
    avatarBrows1.style.display="block"
    avatarBrows2.style.display="none"
    avatarBrows3.style.display="none"
    avatarBrows4.style.display="none"
    avatarBrows5.style.display="none"
    avatarBrows6.style.display="none"
    itemBrows1.className = "item-selected item-card-square elevation2"
    itemBrows2.className = "item-card-square elevation3"
    itemBrows3.className = "item-card-square elevation3"
    itemBrows4.className = "item-card-square elevation3"
    itemBrows5.className = "item-card-square elevation3"
    itemBrows6.className = "item-card-square elevation3"
};
itemBrows2.onclick = function() {
    avatarBrows1.style.display="none"
    avatarBrows2.style.display="block"
    avatarBrows3.style.display="none"
    avatarBrows4.style.display="none"
    avatarBrows5.style.display="none"
    avatarBrows6.style.display="none"
    itemBrows1.className = "item-card-square elevation3"
    itemBrows2.className = "item-selected item-card-square elevation2"
    itemBrows3.className = "item-card-square elevation3"
    itemBrows4.className = "item-card-square elevation3"
    itemBrows5.className = "item-card-square elevation3"
    itemBrows6.className = "item-card-square elevation3"
};
itemBrows3.onclick = function() {
    avatarBrows1.style.display="none"
    avatarBrows2.style.display="none"
    avatarBrows3.style.display="block"
    avatarBrows4.style.display="none"
    avatarBrows5.style.display="none"
    avatarBrows6.style.display="none"
    itemBrows1.className = "item-card-square elevation3"
    itemBrows2.className = "item-card-square elevation3"
    itemBrows3.className = "item-selected item-card-square elevation2"
    itemBrows4.className = "item-card-square elevation3"
    itemBrows5.className = "item-card-square elevation3"
    itemBrows6.className = "item-card-square elevation3"
};
itemBrows4.onclick = function() {
    avatarBrows1.style.display="none"
    avatarBrows2.style.display="none"
    avatarBrows3.style.display="none"
    avatarBrows4.style.display="block"
    avatarBrows5.style.display="none"
    avatarBrows6.style.display="none"
    itemBrows1.className = "item-card-square elevation3"
    itemBrows2.className = "item-card-square elevation3"
    itemBrows3.className = "item-card-square elevation3"
    itemBrows4.className = "item-selected item-card-square elevation2"
    itemBrows5.className = "item-card-square elevation3"
    itemBrows6.className = "item-card-square elevation3"
};
itemBrows5.onclick = function() {
    avatarBrows1.style.display="none"
    avatarBrows2.style.display="none"
    avatarBrows3.style.display="none"
    avatarBrows4.style.display="none"
    avatarBrows5.style.display="block"
    avatarBrows6.style.display="none"
    itemBrows1.className = "item-card-square elevation3"
    itemBrows2.className = "item-card-square elevation3"
    itemBrows3.className = "item-card-square elevation3"
    itemBrows4.className = "item-card-square elevation3"
    itemBrows5.className = "item-selected item-card-square elevation2"
    itemBrows6.className = "item-card-square elevation3"
};
itemBrows6.onclick = function() {
    avatarBrows1.style.display="none"
    avatarBrows2.style.display="none"
    avatarBrows3.style.display="none"
    avatarBrows4.style.display="none"
    avatarBrows5.style.display="none"
    avatarBrows6.style.display="block"
    itemBrows1.className = 
    itemBrows2.className = "item-card-square elevation3"
    itemBrows3.className = "item-card-square elevation3"
    itemBrows4.className = "item-card-square elevation3"
    itemBrows5.className = "item-card-square elevation3"
    itemBrows6.className = "item-selected item-card-square elevation2"
};

itemNose0.onclick = function() {
    avatarNose1.style.display="none"
    avatarNose2.style.display="none"
    itemNose0.className = "item-selected item-card-square elevation2"
    itemNose1.className = "item-card-square elevation3"
    itemNose2.className = "item-card-square elevation3"
};
itemNose1.onclick = function() {
    avatarNose1.style.display="block"
    avatarNose2.style.display="none"
    itemNose0.className = "item-card-square elevation3"
    itemNose1.className = "item-selected item-card-square elevation2"
    itemNose2.className = "item-card-square elevation3"
};
itemNose2.onclick = function() {
    avatarNose1.style.display="none"
    avatarNose2.style.display="block"
    itemNose0.className = "item-card-square elevation3"
    itemNose1.className = "item-card-square elevation3"
    itemNose2.className = "item-selected item-card-square elevation2"
};

itemEyes1.onclick = function() {
    avatarEyes1.style.display="block"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-selected item-card-square elevation2"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes2.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="block"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-selected item-card-square elevation2"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes3.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="block"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-selected item-card-square elevation2"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes4.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="block"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-selected item-card-square elevation2"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes5.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="block"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-selected item-card-square elevation2"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes6.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="block"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-selected item-card-square elevation2"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes7.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="block"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-selected item-card-square elevation2"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes8.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="block"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-selected item-card-square elevation2"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes9.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="block"
    avatarEyes10.style.display="none"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-selected item-card-square elevation2"
    itemEyes10.className = "item-card-square elevation3"
};
itemEyes10.onclick = function() {
    avatarEyes1.style.display="none"
    avatarEyes2.style.display="none"
    avatarEyes3.style.display="none"
    avatarEyes4.style.display="none"
    avatarEyes5.style.display="none"
    avatarEyes6.style.display="none"
    avatarEyes7.style.display="none"
    avatarEyes8.style.display="none"
    avatarEyes9.style.display="none"
    avatarEyes10.style.display="block"
    itemEyes1.className = "item-card-square elevation3"
    itemEyes2.className = "item-card-square elevation3"
    itemEyes3.className = "item-card-square elevation3"
    itemEyes4.className = "item-card-square elevation3"
    itemEyes5.className = "item-card-square elevation3"
    itemEyes6.className = "item-card-square elevation3"
    itemEyes7.className = "item-card-square elevation3"
    itemEyes8.className = "item-card-square elevation3"
    itemEyes9.className = "item-card-square elevation3"
    itemEyes10.className = "item-selected item-card-square elevation2"
};

itemMouth1.onclick = function() {
    avatarMouth1.style.display="block"
    avatarMouth2.style.display="none"
    avatarMouth3.style.display="none"
    avatarMouth4.style.display="none"
    avatarMouth5.style.display="none"
    itemMouth1.className = "item-selected item-card-square elevation2"
    itemMouth2.className = "item-card-square elevation3"
    itemMouth3.className = "item-card-square elevation3"
    itemMouth4.className = "item-card-square elevation3"
    itemMouth5.className = "item-card-square elevation3"
};
itemMouth2.onclick = function() {
    avatarMouth1.style.display="none"
    avatarMouth2.style.display="block"
    avatarMouth3.style.display="none"
    avatarMouth4.style.display="none"
    avatarMouth5.style.display="none"
    itemMouth1.className = "item-card-square elevation3"
    itemMouth2.className = "item-selected item-card-square elevation2"
    itemMouth3.className = "item-card-square elevation3"
    itemMouth4.className = "item-card-square elevation3"
    itemMouth5.className = "item-card-square elevation3"
};
itemMouth3.onclick = function() {
    avatarMouth1.style.display="none"
    avatarMouth2.style.display="none"
    avatarMouth3.style.display="block"
    avatarMouth4.style.display="none"
    avatarMouth5.style.display="none"
    itemMouth1.className = "item-card-square elevation3"
    itemMouth2.className = "item-card-square elevation3"
    itemMouth3.className = "item-selected item-card-square elevation2"
    itemMouth4.className = "item-card-square elevation3"
    itemMouth5.className = "item-card-square elevation3"
};
itemMouth4.onclick = function() {
    avatarMouth1.style.display="none"
    avatarMouth2.style.display="none"
    avatarMouth3.style.display="none"
    avatarMouth4.style.display="block"
    avatarMouth5.style.display="none"
    itemMouth1.className = "item-card-square elevation3"
    itemMouth2.className = "item-card-square elevation3"
    itemMouth3.className = "item-card-square elevation3"
    itemMouth4.className = "item-selected item-card-square elevation2"
    itemMouth5.className = "item-card-square elevation3"
};
itemMouth5.onclick = function() {
    avatarMouth1.style.display="none"
    avatarMouth2.style.display="none"
    avatarMouth3.style.display="none"
    avatarMouth4.style.display="none"
    avatarMouth5.style.display="block"
    itemMouth1.className = "item-card-square elevation3"
    itemMouth2.className = "item-card-square elevation3"
    itemMouth3.className = "item-card-square elevation3"
    itemMouth4.className = "item-card-square elevation3"
    itemMouth5.className = "item-selected item-card-square elevation2"
};

itemHairfront0.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-selected item-card-square elevation2"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront1.onclick = function() {
    avatarHairfront1.style.display="block"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-selected item-card-square elevation2"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront2.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="block"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-selected item-card-square elevation2"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront3.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="block"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-selected item-card-square elevation2"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront4.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="block"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-selected item-card-square elevation2"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront5.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="block"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-selected item-card-square elevation2"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront6.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="block"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-selected item-card-square elevation2"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront7.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="block"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-selected item-card-square elevation2"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront8.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="block"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-selected item-card-square elevation2"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront9.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="block"
    avatarHairfront10.style.display="none"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-selected item-card-square elevation2"
    itemHairfront10.className = "item-card-square elevation3"
};
itemHairfront10.onclick = function() {
    avatarHairfront1.style.display="none"
    avatarHairfront2.style.display="none"
    avatarHairfront3.style.display="none"
    avatarHairfront4.style.display="none"
    avatarHairfront5.style.display="none"
    avatarHairfront6.style.display="none"
    avatarHairfront7.style.display="none"
    avatarHairfront8.style.display="none"
    avatarHairfront9.style.display="none"
    avatarHairfront10.style.display="block"
    itemHairfront0.className = "item-card-square elevation3"
    itemHairfront1.className = "item-card-square elevation3"
    itemHairfront2.className = "item-card-square elevation3"
    itemHairfront3.className = "item-card-square elevation3"
    itemHairfront4.className = "item-card-square elevation3"
    itemHairfront5.className = "item-card-square elevation3"
    itemHairfront6.className = "item-card-square elevation3"
    itemHairfront7.className = "item-card-square elevation3"
    itemHairfront8.className = "item-card-square elevation3"
    itemHairfront9.className = "item-card-square elevation3"
    itemHairfront10.className = "item-selected item-card-square elevation2"
};

itemHairback0.onclick = function() {
    avatarHairback1.style.display="none"
    avatarHairback2.style.display="none"
    avatarHairback3.style.display="none"
    avatarHairback4.style.display="none"
    avatarHairback5.style.display="none"
    avatarHairback6.style.display="none"
    avatarHairback7.style.display="none"
    itemHairback0.className = "item-selected item-card-square elevation2"
    itemHairback1.className = "item-card-square elevation3"
    itemHairback2.className = "item-card-square elevation3"
    itemHairback3.className = "item-card-square elevation3"
    itemHairback4.className = "item-card-square elevation3"
    itemHairback5.className = "item-card-square elevation3"
    itemHairback6.className = "item-card-square elevation3"
    itemHairback7.className = "item-card-square elevation3"
};
itemHairback1.onclick = function() {
    avatarHairback1.style.display="block"
    avatarHairback2.style.display="none"
    avatarHairback3.style.display="none"
    avatarHairback4.style.display="none"
    avatarHairback5.style.display="none"
    avatarHairback6.style.display="none"
    avatarHairback7.style.display="none"
    itemHairback0.className = "item-card-square elevation3"
    itemHairback1.className = "item-selected item-card-square elevation2"
    itemHairback2.className = "item-card-square elevation3"
    itemHairback3.className = "item-card-square elevation3"
    itemHairback4.className = "item-card-square elevation3"
    itemHairback5.className = "item-card-square elevation3"
    itemHairback6.className = "item-card-square elevation3"
    itemHairback7.className = "item-card-square elevation3"
};
itemHairback2.onclick = function() {
    avatarHairback1.style.display="none"
    avatarHairback2.style.display="block"
    avatarHairback3.style.display="none"
    avatarHairback4.style.display="none"
    avatarHairback5.style.display="none"
    avatarHairback6.style.display="none"
    avatarHairback7.style.display="none"
    itemHairback0.className = "item-card-square elevation3"
    itemHairback1.className = "item-card-square elevation3"
    itemHairback2.className = "item-selected item-card-square elevation2"
    itemHairback3.className = "item-card-square elevation3"
    itemHairback4.className = "item-card-square elevation3"
    itemHairback5.className = "item-card-square elevation3"
    itemHairback6.className = "item-card-square elevation3"
    itemHairback7.className = "item-card-square elevation3"
};
itemHairback3.onclick = function() {
    avatarHairback1.style.display="none"
    avatarHairback2.style.display="none"
    avatarHairback3.style.display="block"
    avatarHairback4.style.display="none"
    avatarHairback5.style.display="none"
    avatarHairback6.style.display="none"
    avatarHairback7.style.display="none"
    itemHairback0.className = "item-card-square elevation3"
    itemHairback1.className = "item-card-square elevation3"
    itemHairback2.className = "item-card-square elevation3"
    itemHairback3.className = "item-selected item-card-square elevation2"
    itemHairback4.className = "item-card-square elevation3"
    itemHairback5.className = "item-card-square elevation3"
    itemHairback6.className = "item-card-square elevation3"
    itemHairback7.className = "item-card-square elevation3"
};
itemHairback4.onclick = function() {
    avatarHairback1.style.display="none"
    avatarHairback2.style.display="none"
    avatarHairback3.style.display="none"
    avatarHairback4.style.display="block"
    avatarHairback5.style.display="none"
    avatarHairback6.style.display="none"
    avatarHairback7.style.display="none"
    itemHairback0.className = "item-card-square elevation3"
    itemHairback1.className = "item-card-square elevation3"
    itemHairback2.className = "item-card-square elevation3"
    itemHairback3.className = "item-card-square elevation3"
    itemHairback4.className = "item-selected item-card-square elevation2"
    itemHairback5.className = "item-card-square elevation3"
    itemHairback6.className = "item-card-square elevation3"
    itemHairback7.className = "item-card-square elevation3"
};
itemHairback5.onclick = function() {
    avatarHairback1.style.display="none"
    avatarHairback2.style.display="none"
    avatarHairback3.style.display="none"
    avatarHairback4.style.display="none"
    avatarHairback5.style.display="block"
    avatarHairback6.style.display="none"
    avatarHairback7.style.display="none"
    itemHairback0.className = "item-card-square elevation3"
    itemHairback1.className = "item-card-square elevation3"
    itemHairback2.className = "item-card-square elevation3"
    itemHairback3.className = "item-card-square elevation3"
    itemHairback4.className = "item-card-square elevation3"
    itemHairback5.className = "item-selected item-card-square elevation2"
    itemHairback6.className = "item-card-square elevation3"
    itemHairback7.className = "item-card-square elevation3"
};
itemHairback6.onclick = function() {
    avatarHairback1.style.display="none"
    avatarHairback2.style.display="none"
    avatarHairback3.style.display="none"
    avatarHairback4.style.display="none"
    avatarHairback5.style.display="none"
    avatarHairback6.style.display="block"
    avatarHairback7.style.display="none"
    itemHairback0.className = "item-card-square elevation3"
    itemHairback1.className = "item-card-square elevation3"
    itemHairback2.className = "item-card-square elevation3"
    itemHairback3.className = "item-card-square elevation3"
    itemHairback4.className = "item-card-square elevation3"
    itemHairback5.className = "item-card-square elevation3"
    itemHairback6.className = "item-selected item-card-square elevation2"
    itemHairback7.className = "item-card-square elevation3"
};
itemHairback7.onclick = function() {
    avatarHairback1.style.display="none"
    avatarHairback2.style.display="none"
    avatarHairback3.style.display="none"
    avatarHairback4.style.display="none"
    avatarHairback5.style.display="none"
    avatarHairback6.style.display="none"
    avatarHairback7.style.display="block"
    itemHairback0.className = "item-card-square elevation3"
    itemHairback1.className = "item-card-square elevation3"
    itemHairback2.className = "item-card-square elevation3"
    itemHairback3.className = "item-card-square elevation3"
    itemHairback4.className = "item-card-square elevation3"
    itemHairback5.className = "item-card-square elevation3"
    itemHairback6.className = "item-card-square elevation3"
    itemHairback7.className = "item-selected item-card-square elevation2"
};

HairbackColor1.onclick = function() {
    HairbackColor1.className = "item-selected item-card-circle elevation2"
    HairbackColor2.className = "item-card-circle elevation3"
    HairbackColor3.className = "item-card-circle elevation3"
    HairbackColor4.className = "item-card-circle elevation3"
    avatarHairback1.classList.remove("haircolor2")
    avatarHairback2.classList.remove("haircolor2")
    avatarHairback3.classList.remove("haircolor2")
    avatarHairback4.classList.remove("haircolor2")
    avatarHairback5.classList.remove("haircolor2")
    avatarHairback6.classList.remove("haircolor2")
    avatarHairback7.classList.remove("haircolor2")
    avatarHairback1.classList.remove("haircolor3")
    avatarHairback2.classList.remove("haircolor3")
    avatarHairback3.classList.remove("haircolor3")
    avatarHairback4.classList.remove("haircolor3")
    avatarHairback5.classList.remove("haircolor3")
    avatarHairback6.classList.remove("haircolor3")
    avatarHairback7.classList.remove("haircolor3")
    avatarHairback1.classList.remove("haircolor4")
    avatarHairback2.classList.remove("haircolor4")
    avatarHairback3.classList.remove("haircolor4")
    avatarHairback4.classList.remove("haircolor4")
    avatarHairback5.classList.remove("haircolor4")
    avatarHairback6.classList.remove("haircolor4")
    avatarHairback7.classList.remove("haircolor4")
};
HairbackColor2.onclick = function() {
    HairbackColor1.className = "item-card-circle elevation3"
    HairbackColor2.className = "item-selected item-card-circle elevation2"
    HairbackColor3.className = "item-card-circle elevation3"
    HairbackColor4.className = "item-card-circle elevation3"
    avatarHairback1.classList.add("haircolor2")
    avatarHairback2.classList.add("haircolor2")
    avatarHairback3.classList.add("haircolor2")
    avatarHairback4.classList.add("haircolor2")
    avatarHairback5.classList.add("haircolor2")
    avatarHairback6.classList.add("haircolor2")
    avatarHairback7.classList.add("haircolor2")
    avatarHairback1.classList.remove("haircolor1")
    avatarHairback2.classList.remove("haircolor1")
    avatarHairback3.classList.remove("haircolor1")
    avatarHairback4.classList.remove("haircolor1")
    avatarHairback5.classList.remove("haircolor1")
    avatarHairback6.classList.remove("haircolor1")
    avatarHairback7.classList.remove("haircolor1")
    avatarHairback1.classList.remove("haircolor3")
    avatarHairback2.classList.remove("haircolor3")
    avatarHairback3.classList.remove("haircolor3")
    avatarHairback4.classList.remove("haircolor3")
    avatarHairback5.classList.remove("haircolor3")
    avatarHairback6.classList.remove("haircolor3")
    avatarHairback7.classList.remove("haircolor3")
    avatarHairback1.classList.remove("haircolor4")
    avatarHairback2.classList.remove("haircolor4")
    avatarHairback3.classList.remove("haircolor4")
    avatarHairback4.classList.remove("haircolor4")
    avatarHairback5.classList.remove("haircolor4")
    avatarHairback6.classList.remove("haircolor4")
    avatarHairback7.classList.remove("haircolor4")
};
HairbackColor3.onclick = function() {
    HairbackColor1.className = "item-card-circle elevation3"
    HairbackColor2.className = "item-card-circle elevation3"
    HairbackColor3.className = "item-selected item-card-circle elevation2"
    HairbackColor4.className = "item-card-circle elevation3"
    avatarHairback1.classList.add("haircolor3")
    avatarHairback2.classList.add("haircolor3")
    avatarHairback3.classList.add("haircolor3")
    avatarHairback4.classList.add("haircolor3")
    avatarHairback5.classList.add("haircolor3")
    avatarHairback6.classList.add("haircolor3")
    avatarHairback7.classList.add("haircolor3")
    avatarHairback1.classList.remove("haircolor2")
    avatarHairback2.classList.remove("haircolor2")
    avatarHairback3.classList.remove("haircolor2")
    avatarHairback4.classList.remove("haircolor2")
    avatarHairback5.classList.remove("haircolor2")
    avatarHairback6.classList.remove("haircolor2")
    avatarHairback7.classList.remove("haircolor2")
    avatarHairback1.classList.remove("haircolor1")
    avatarHairback2.classList.remove("haircolor1")
    avatarHairback3.classList.remove("haircolor1")
    avatarHairback4.classList.remove("haircolor1")
    avatarHairback5.classList.remove("haircolor1")
    avatarHairback6.classList.remove("haircolor1")
    avatarHairback7.classList.remove("haircolor1")
    avatarHairback1.classList.remove("haircolor4")
    avatarHairback2.classList.remove("haircolor4")
    avatarHairback3.classList.remove("haircolor4")
    avatarHairback4.classList.remove("haircolor4")
    avatarHairback5.classList.remove("haircolor4")
    avatarHairback6.classList.remove("haircolor4")
    avatarHairback7.classList.remove("haircolor4")
};
HairbackColor4.onclick = function() {
    HairbackColor1.className = "item-card-circle elevation3"
    HairbackColor2.className = "item-card-circle elevation3"
    HairbackColor3.className = "item-card-circle elevation3"
    HairbackColor4.className = "item-selected item-card-circle elevation2"
    avatarHairback1.classList.add("haircolor4")
    avatarHairback2.classList.add("haircolor4")
    avatarHairback3.classList.add("haircolor4")
    avatarHairback4.classList.add("haircolor4")
    avatarHairback5.classList.add("haircolor4")
    avatarHairback6.classList.add("haircolor4")
    avatarHairback7.classList.add("haircolor4")
    avatarHairback1.classList.remove("haircolor2")
    avatarHairback2.classList.remove("haircolor2")
    avatarHairback3.classList.remove("haircolor2")
    avatarHairback4.classList.remove("haircolor2")
    avatarHairback5.classList.remove("haircolor2")
    avatarHairback6.classList.remove("haircolor2")
    avatarHairback7.classList.remove("haircolor2")
    avatarHairback1.classList.remove("haircolor3")
    avatarHairback2.classList.remove("haircolor3")
    avatarHairback3.classList.remove("haircolor3")
    avatarHairback4.classList.remove("haircolor3")
    avatarHairback5.classList.remove("haircolor3")
    avatarHairback6.classList.remove("haircolor3")
    avatarHairback7.classList.remove("haircolor3")
    avatarHairback1.classList.remove("haircolor1")
    avatarHairback2.classList.remove("haircolor1")
    avatarHairback3.classList.remove("haircolor1")
    avatarHairback4.classList.remove("haircolor1")
    avatarHairback5.classList.remove("haircolor1")
    avatarHairback6.classList.remove("haircolor1")
    avatarHairback7.classList.remove("haircolor1")
};

HairfrontColor1.onclick = function() {
    HairfrontColor1.className = "item-selected item-card-circle elevation2"
    HairfrontColor2.className = "item-card-circle elevation3"
    HairfrontColor3.className = "item-card-circle elevation3"
    HairfrontColor4.className = "item-card-circle elevation3"
    avatarHairfront1.classList.remove("haircolor2")
    avatarHairfront2.classList.remove("haircolor2")
    avatarHairfront3.classList.remove("haircolor2")
    avatarHairfront4.classList.remove("haircolor2")
    avatarHairfront5.classList.remove("haircolor2")
    avatarHairfront6.classList.remove("haircolor2")
    avatarHairfront7.classList.remove("haircolor2")
    avatarHairfront8.classList.remove("haircolor2")
    avatarHairfront9.classList.remove("haircolor2")
    avatarHairfront10.classList.remove("haircolor2")
    avatarHairfront1.classList.remove("haircolor3")
    avatarHairfront2.classList.remove("haircolor3")
    avatarHairfront3.classList.remove("haircolor3")
    avatarHairfront4.classList.remove("haircolor3")
    avatarHairfront5.classList.remove("haircolor3")
    avatarHairfront6.classList.remove("haircolor3")
    avatarHairfront7.classList.remove("haircolor3")
    avatarHairfront8.classList.remove("haircolor3")
    avatarHairfront9.classList.remove("haircolor3")
    avatarHairfront10.classList.remove("haircolor3")
    avatarHairfront1.classList.remove("haircolor4")
    avatarHairfront2.classList.remove("haircolor4")
    avatarHairfront3.classList.remove("haircolor4")
    avatarHairfront4.classList.remove("haircolor4")
    avatarHairfront5.classList.remove("haircolor4")
    avatarHairfront6.classList.remove("haircolor4")
    avatarHairfront7.classList.remove("haircolor4")
    avatarHairfront8.classList.remove("haircolor4")
    avatarHairfront9.classList.remove("haircolor4")
    avatarHairfront10.classList.remove("haircolor4")
};
HairfrontColor2.onclick = function() {
    HairfrontColor1.className = "item-card-circle elevation3"
    HairfrontColor2.className = "item-selected item-card-circle elevation2"
    HairfrontColor3.className = "item-card-circle elevation3"
    HairfrontColor4.className = "item-card-circle elevation3"
    avatarHairfront1.classList.add("haircolor2")
    avatarHairfront2.classList.add("haircolor2")
    avatarHairfront3.classList.add("haircolor2")
    avatarHairfront4.classList.add("haircolor2")
    avatarHairfront5.classList.add("haircolor2")
    avatarHairfront6.classList.add("haircolor2")
    avatarHairfront7.classList.add("haircolor2")
    avatarHairfront8.classList.add("haircolor2")
    avatarHairfront9.classList.add("haircolor2")
    avatarHairfront10.classList.add("haircolor2")
    avatarHairfront1.classList.remove("haircolor1")
    avatarHairfront2.classList.remove("haircolor1")
    avatarHairfront3.classList.remove("haircolor1")
    avatarHairfront4.classList.remove("haircolor1")
    avatarHairfront5.classList.remove("haircolor1")
    avatarHairfront6.classList.remove("haircolor1")
    avatarHairfront7.classList.remove("haircolor1")
    avatarHairfront8.classList.remove("haircolor1")
    avatarHairfront9.classList.remove("haircolor1")
    avatarHairfront10.classList.remove("haircolor1")
    avatarHairfront1.classList.remove("haircolor3")
    avatarHairfront2.classList.remove("haircolor3")
    avatarHairfront3.classList.remove("haircolor3")
    avatarHairfront4.classList.remove("haircolor3")
    avatarHairfront5.classList.remove("haircolor3")
    avatarHairfront6.classList.remove("haircolor3")
    avatarHairfront7.classList.remove("haircolor3")
    avatarHairfront8.classList.remove("haircolor3")
    avatarHairfront9.classList.remove("haircolor3")
    avatarHairfront10.classList.remove("haircolor3")
    avatarHairfront1.classList.remove("haircolor4")
    avatarHairfront2.classList.remove("haircolor4")
    avatarHairfront3.classList.remove("haircolor4")
    avatarHairfront4.classList.remove("haircolor4")
    avatarHairfront5.classList.remove("haircolor4")
    avatarHairfront6.classList.remove("haircolor4")
    avatarHairfront7.classList.remove("haircolor4")
    avatarHairfront8.classList.remove("haircolor4")
    avatarHairfront9.classList.remove("haircolor4")
    avatarHairfront10.classList.remove("haircolor4")
};
HairfrontColor3.onclick = function() {
    HairfrontColor1.className = "item-card-circle elevation3"
    HairfrontColor2.className = "item-card-circle elevation3"
    HairfrontColor3.className = "item-selected item-card-circle elevation2"
    HairfrontColor4.className = "item-card-circle elevation3"
    avatarHairfront1.classList.add("haircolor3")
    avatarHairfront2.classList.add("haircolor3")
    avatarHairfront3.classList.add("haircolor3")
    avatarHairfront4.classList.add("haircolor3")
    avatarHairfront5.classList.add("haircolor3")
    avatarHairfront6.classList.add("haircolor3")
    avatarHairfront7.classList.add("haircolor3")
    avatarHairfront8.classList.add("haircolor3")
    avatarHairfront9.classList.add("haircolor3")
    avatarHairfront10.classList.add("haircolor3")
    avatarHairfront1.classList.remove("haircolor1")
    avatarHairfront2.classList.remove("haircolor1")
    avatarHairfront3.classList.remove("haircolor1")
    avatarHairfront4.classList.remove("haircolor1")
    avatarHairfront5.classList.remove("haircolor1")
    avatarHairfront6.classList.remove("haircolor1")
    avatarHairfront7.classList.remove("haircolor1")
    avatarHairfront8.classList.remove("haircolor1")
    avatarHairfront9.classList.remove("haircolor1")
    avatarHairfront10.classList.remove("haircolor1")
    avatarHairfront1.classList.remove("haircolor2")
    avatarHairfront2.classList.remove("haircolor2")
    avatarHairfront3.classList.remove("haircolor2")
    avatarHairfront4.classList.remove("haircolor2")
    avatarHairfront5.classList.remove("haircolor2")
    avatarHairfront6.classList.remove("haircolor2")
    avatarHairfront7.classList.remove("haircolor2")
    avatarHairfront8.classList.remove("haircolor2")
    avatarHairfront9.classList.remove("haircolor2")
    avatarHairfront10.classList.remove("haircolor2")
    avatarHairfront1.classList.remove("haircolor4")
    avatarHairfront2.classList.remove("haircolor4")
    avatarHairfront3.classList.remove("haircolor4")
    avatarHairfront4.classList.remove("haircolor4")
    avatarHairfront5.classList.remove("haircolor4")
    avatarHairfront6.classList.remove("haircolor4")
    avatarHairfront7.classList.remove("haircolor4")
    avatarHairfront8.classList.remove("haircolor4")
    avatarHairfront9.classList.remove("haircolor4")
    avatarHairfront10.classList.remove("haircolor4")
};
HairfrontColor4.onclick = function() {
    HairfrontColor1.className = "item-card-circle elevation3"
    HairfrontColor2.className = "item-card-circle elevation3"
    HairfrontColor3.className = "item-card-circle elevation3"
    HairfrontColor4.className = "item-selected item-card-circle elevation2"
    avatarHairfront1.classList.add("haircolor4")
    avatarHairfront2.classList.add("haircolor4")
    avatarHairfront3.classList.add("haircolor4")
    avatarHairfront4.classList.add("haircolor4")
    avatarHairfront5.classList.add("haircolor4")
    avatarHairfront6.classList.add("haircolor4")
    avatarHairfront7.classList.add("haircolor4")
    avatarHairfront8.classList.add("haircolor4")
    avatarHairfront9.classList.add("haircolor4")
    avatarHairfront10.classList.add("haircolor4")
    avatarHairfront1.classList.remove("haircolor1")
    avatarHairfront2.classList.remove("haircolor1")
    avatarHairfront3.classList.remove("haircolor1")
    avatarHairfront4.classList.remove("haircolor1")
    avatarHairfront5.classList.remove("haircolor1")
    avatarHairfront6.classList.remove("haircolor1")
    avatarHairfront7.classList.remove("haircolor1")
    avatarHairfront8.classList.remove("haircolor1")
    avatarHairfront9.classList.remove("haircolor1")
    avatarHairfront10.classList.remove("haircolor1")
    avatarHairfront1.classList.remove("haircolor3")
    avatarHairfront2.classList.remove("haircolor3")
    avatarHairfront3.classList.remove("haircolor3")
    avatarHairfront4.classList.remove("haircolor3")
    avatarHairfront5.classList.remove("haircolor3")
    avatarHairfront6.classList.remove("haircolor3")
    avatarHairfront7.classList.remove("haircolor3")
    avatarHairfront8.classList.remove("haircolor3")
    avatarHairfront9.classList.remove("haircolor3")
    avatarHairfront10.classList.remove("haircolor3")
    avatarHairfront1.classList.remove("haircolor2")
    avatarHairfront2.classList.remove("haircolor2")
    avatarHairfront3.classList.remove("haircolor2")
    avatarHairfront4.classList.remove("haircolor2")
    avatarHairfront5.classList.remove("haircolor2")
    avatarHairfront6.classList.remove("haircolor2")
    avatarHairfront7.classList.remove("haircolor2")
    avatarHairfront8.classList.remove("haircolor2")
    avatarHairfront9.classList.remove("haircolor2")
    avatarHairfront10.classList.remove("haircolor2")
};

itemBackground1.onclick = function() {
    itemBackground1.className = "item-selected item-card-circle elevation2"
    itemBackground2.className = "item-card-circle elevation3"
    itemBackground3.className = "item-card-circle elevation3"
    itemBackground4.className = "item-card-circle elevation3"
    document.body.style.backgroundColor="#8FD1ED"
};
itemBackground2.onclick = function() {
    itemBackground1.className = "item-card-circle elevation3"
    itemBackground2.className = "item-selected item-card-circle elevation2"
    itemBackground3.className = "item-card-circle elevation3"
    itemBackground4.className = "item-card-circle elevation3"
    document.body.style.backgroundColor="#FF80AB"
};
itemBackground3.onclick = function() {
    itemBackground1.className = "item-card-circle elevation3"
    itemBackground2.className = "item-card-circle elevation3"
    itemBackground3.className = "item-selected item-card-circle elevation2"
    itemBackground4.className = "item-card-circle elevation3"
    document.body.style.backgroundColor="#FFCA63"
};
itemBackground4.onclick = function() {
    itemBackground1.className = "item-card-circle elevation3"
    itemBackground2.className = "item-card-circle elevation3"
    itemBackground3.className = "item-card-circle elevation3"
    itemBackground4.className = "item-selected item-card-circle elevation2"
    document.body.style.backgroundColor="#93B44E"
};

itemClothing1.onclick = function() {
    avatarClothing1.style.display="block"
    avatarClothing2.style.display="none"
    avatarClothing3.style.display="none"
    itemClothing1.className = "item-selected item-card-square elevation2"
    itemClothing2.className = "item-card-square elevation3"
    itemClothing3.className = "item-card-square elevation3"
};
itemClothing2.onclick = function() {
    avatarClothing1.style.display="none"
    avatarClothing2.style.display="block"
    avatarClothing3.style.display="none"
    itemClothing1.className = "item-card-square elevation3"
    itemClothing2.className = "item-selected item-card-square elevation2"
    itemClothing3.className = "item-card-square elevation3"
};
itemClothing3.onclick = function() {
    avatarClothing1.style.display="none"
    avatarClothing2.style.display="none"
    avatarClothing3.style.display="block"
    itemClothing1.className = "item-card-square elevation3"
    itemClothing2.className = "item-card-square elevation3"
    itemClothing3.className = "item-selected item-card-square elevation2"
};

face.onclick = function() {
    document.getElementById("face").style.display="block";
    document.getElementById("brows").style.display="none"
    document.getElementById("eyes").style.display="none"
    document.getElementById("nose").style.display="none";
    document.getElementById("mouth").style.display="none";
    face.style.color="#AD1457";
    brows.style.color="#000";
    eyes.style.color="#000";
    nose.style.color="#000";
    mouth.style.color="#000";
}
brows.onclick = function() {
    document.getElementById("face").style.display="none";
    document.getElementById("brows").style.display="block";
    document.getElementById("eyes").style.display="none"
    document.getElementById("nose").style.display="none";
    document.getElementById("mouth").style.display="none";
    face.style.color="#000";
    brows.style.color="#AD1457";
    eyes.style.color="#000";
    nose.style.color="#000";
    mouth.style.color="#000";
}
eyes.onclick = function() {
    document.getElementById("face").style.display="none";
    document.getElementById("brows").style.display="none";
    document.getElementById("eyes").style.display="block";
    document.getElementById("nose").style.display="none";
    document.getElementById("mouth").style.display="none";
    face.style.color="#000";
    brows.style.color="#000";
    eyes.style.color="#AD1457";
    nose.style.color="#000";
    mouth.style.color="#000";
}
nose.onclick = function() {
    document.getElementById("face").style.display="none";
    document.getElementById("brows").style.display="none";
    document.getElementById("eyes").style.display="none";
    document.getElementById("nose").style.display="block";
    document.getElementById("mouth").style.display="none";
    face.style.color="#000";
    brows.style.color="#000";
    eyes.style.color="#000";
    nose.style.color="#AD1457";
    mouth.style.color="#000";
}
mouth.onclick = function() {
    document.getElementById("face").style.display="none";
    document.getElementById("brows").style.display="none";
    document.getElementById("eyes").style.display="none";
    document.getElementById("nose").style.display="none";
    document.getElementById("mouth").style.display="block";
    face.style.color="#000";
    brows.style.color="#000";
    eyes.style.color="#000";
    nose.style.color="#000";
    mouth.style.color="#AD1457";
}

hairFront.onclick = function() {
    document.getElementById("hairfront").style.display="block";
    document.getElementById("hairback").style.display="none";
    hairFront.style.color="#AD1457";
    hairBack.style.color="#000";
}
hairBack.onclick = function() {
    document.getElementById("hairfront").style.display="none";
    document.getElementById("hairback").style.display="block";
    hairFront.style.color="#000";
    hairBack.style.color="#AD1457";
}

tabLabelFace.onclick = function() {
    tabFace.style.display="block";
    tabHair.style.display="none";
    tabAcc.style.display="none";
    tabCloth.style.display="none";
    tabBack.style.display="none";
    tabLabelFace.className="tab-label-selected elevation1";
    tabLabelHair.className="tab-label";
    tabLabelAcc.className="tab-label";
    tabLabelCloth.className="tab-label";
    tabLabelBack.className="tab-label";
}
tabLabelHair.onclick = function() {
    tabFace.style.display="none";
    tabHair.style.display="block";
    tabAcc.style.display="none";
    tabCloth.style.display="none";
    tabBack.style.display="none";
    tabLabelFace.className="tab-label";
    tabLabelHair.className="tab-label-selected elevation1";
    tabLabelAcc.className="tab-label";
    tabLabelCloth.className="tab-label";
    tabLabelBack.className="tab-label";
}
tabLabelAcc.onclick = function() {
    tabFace.style.display="none";
    tabHair.style.display="none";
    tabAcc.style.display="block";
    tabCloth.style.display="none";
    tabBack.style.display="none";
    tabLabelFace.className="tab-label";
    tabLabelHair.className="tab-label";
    tabLabelAcc.className="tab-label-selected elevation1";
    tabLabelCloth.className="tab-label";
    tabLabelBack.className="tab-label";
}
tabLabelCloth.onclick = function() {
    tabFace.style.display="none";
    tabHair.style.display="none";
    tabAcc.style.display="none";
    tabCloth.style.display="block";
    tabBack.style.display="none";
    tabLabelFace.className="tab-label";
    tabLabelHair.className="tab-label";
    tabLabelAcc.className="tab-label";
    tabLabelCloth.className="tab-label-selected elevation1";
    tabLabelBack.className="tab-label";
}
tabLabelBack.onclick = function() {
    tabFace.style.display="none";
    tabHair.style.display="none";
    tabAcc.style.display="none";
    tabCloth.style.display="none";
    tabBack.style.display="block";
    tabLabelFace.className="tab-label";
    tabLabelHair.className="tab-label";
    tabLabelAcc.className="tab-label";
    tabLabelCloth.className="tab-label";
    tabLabelBack.className="tab-label-selected elevation1";
}
