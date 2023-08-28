
function load(){
    alert( 'active');
    
    let butclick = document.getElementById('submit');
    butclick.addEventListener('click', () => {
    document.body.style.backgroundColor = 'fuchsia';
    let textvalue = document.getElementById("entertext").value;
    console.log('textbox value',textvalue);

   
  });

}

function buttonClick(){
    alert("10");

}


// butclick.addEventListener('contextmenu', () =>{
//     document.body.style.backgroundColor = 'yellow';
// });
// butclick.addEventListener('mouseover', () => {
//     document.body.style.backgroundColor = 'blue';
// });


