
function titleSlide()
{
    var titleVar =document.getElementById("title");
    var subtitleVar=titleVar.getElementsByTagName("p");
    console.log(whiteVar)
    if(window.pageYOffset<600)
    {
        titleVar.style.marginTop=window.pageYOffset+220+'px';
    }
    if(window.pageYOffset>300&&window.pageYOffset<600)
    {
        subtitleVar[0].innerHTML="欢迎来到我的世界";
    }
    else if(window.pageYOffset<300)
    {
        subtitleVar[0].innerHTML="";
    }
}
