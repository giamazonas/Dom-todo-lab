console.log('sanity check')

const input = document.getElementById('all-lista') 

const btn = document.getElementById('submit-button')

const ul  = document.getElementById('todo-list')

btn.addEventListener('click', function(evt){
  const newLi = document.createElement('li')
  newLi.textContent = input.value 
  if (input.value !== ''){
    document.querySelector('ul').appendChild(newLi)
    input.value = ''
  }
})

const resetBtn = document.getElementById('reset')

btn.addEventListener('click', function(evt){

})

function logReset(resetBtn){
  reset.textContent = `It's a new day! Time to make a new list.`}


console.log()