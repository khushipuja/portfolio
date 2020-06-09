var anchorTags=document.querySelectorAll('.nav-menu a');
console.log(anchorTags);
for(var i=0;i<anchorTags.length;i++)
{
anchorTags[i].addEventListener('click',function(event){
  event.preventDefault();
var sectionTarget=this.textContent.trim().toLowerCase();
console.log(sectionTarget);
var section=document.getElementById(sectionTarget);
console.log(section);
var ycordinate=section.getBoundingClientRect();
var interval=setInterval(function(){
  var ycordinate=section.getBoundingClientRect();
  console.log(ycordinate.top);
  window.scrollBy(0,50);
  if(sectionTarget=="contact")
  {
    if(ycordinate.top<=170)
    {
      clearInterval(interval);
      return;
    }
  }

if(ycordinate.top-50<=0)
{
  clearInterval(interval);
  return;
}


},20);

});


}



// Animating skill-section
var innerdiv=document.querySelectorAll('.skill-progress>div');
console.log(innerdiv);
var scrolledDist=document.body.getBoundingClientRect().top;
window.addEventListener('scroll',checkScroll);
function updatedist(){
  for(var i=0;i<innerdiv.length;i++)
  {innerdiv[i].style.width=0+"%";
  console.log(i);
  }
}
updatedist();

var animationdone=false;

function checkScroll()
{
  var scrolledDist=document.body.getBoundingClientRect().top;
  console.log(scrolledDist);

if(!animationdone&&scrolledDist<=-527)
{
  console.log("yes");

  fillbar();
  animationdone=true;
}
else if(animationdone&&scrolledDist>-527){
  fillbar();
  animationdone=false;
}


}

function fillbar()
{
  for(let i=0;i<innerdiv.length;i++)
  {
    console.log(innerdiv[i]);
    let targetwidth=innerdiv[i].getAttribute('data-width');
    // console.log(targetwidth);
    let initialwidth=0;
    let interval=setInterval(function(){


      if(initialwidth>=targetwidth)
      {
        clearInterval(interval);
        return;
      }
      initialwidth++;
      innerdiv[i].style.width=initialwidth+"%";
    },5);
  }
}
