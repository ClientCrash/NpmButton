//BY CLIENTCRASH https://github.com/clientcrash/
isJSRepo = false;
reponame = reponame_e = document.querySelector("strong[itemprop=name]").children[0].innerText
langs =  Array.from(document.querySelectorAll("span.color-fg-default.text-bold"))
for(i=0;i<langs.length;i++){
	e=langs[i]
	console.log(e.innerText)
	if(e.innerText=="JavaScript" || e.innerText=="TypeScript"){
		isJSRepo=true
	}
}
if(isJSRepo && onlyLetters(reponame)){
	addBTN()
	console.log("Adding search on npm Button!")
}
function onlyLetters(str) {
	return str.match("^[A-Za-z0-9]+$");
}
function addBTN(){
var i_html = '<a id="npmsrchbtn" class="btn ml-2" href="https://www.npmjs.com/search?q='+reponame+'">Search <b style="color:#F7DF1E;">'+reponame+'</b> on NPM</a>'
i_target = document.getElementsByClassName("file-navigation")[0]
elem = document.createElement("div")
elem.innerHTML = i_html
i_target.appendChild(elem)
}