console.log('sanity check Thursday')
//**    constants   */
//__________________________________________\

//*** VARIABLES   
//___________________________________________


//**      CACHED ELEMENTS  */
//____________________________________________

const input = document.getElementById('all-lista') 
const btn = document.getElementById('submit-button')
const ul  = document.getElementById('todo-list')
const resetBtn = document.getElementById('reset')


//** EVENT LISTENERS  */
//____________________________________________

btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  newLi.textContent = input.value 
  if (input.value !== ''){
    document.querySelector('ul').appendChild(newLi)
    input.value = ''
  }
  }
)


    //**   FUNCTIONS    */







//________________________________________
// ** I AM STILL WORKING ON THIS **

// add event listener to existing cached element reference
//manipulate the DOM to remove individual items to do when clicked on 


//______________________
//reset

// resetBtn.addEventListener('click', function(){
//     // function logReset(resetBtn){ 
//     return 
// })

// ul.addEventListener('click', true){
//   input.value = ''
// }