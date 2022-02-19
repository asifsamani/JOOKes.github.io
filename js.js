// {/* <div id="joke" class="joke">Ruko jara sabar karo...</div>
//         <button id="jokebtn" class="button">NEXT JOKE</button> */}

 
// GET https://icanhazdadjoke.com/ 
const jokes=document.querySelector('#joke');
const jokebtn=document.querySelector('#jokebtn');

const generatejokes= ()=>{
     const setHeader={
         headers:{
             Accept :  "application/json"
         }
     }

    fetch('https://icanhazdadjoke.com',setHeader)
    .then((res)=>res.json() )
    .then( (data) => {
        jokes.innerHTML=data.joke;

    }).catch((error)=>{
        console.log(error);
    })
}



jokebtn.addEventListener('click', generatejokes);
generatejokes();