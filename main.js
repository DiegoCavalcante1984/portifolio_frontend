const itens = document.querySelector('#itens')
const burger = document.querySelector('.box-burger')

burger.addEventListener('click',()=>{
  if(itens.style.display == 'none'){
  itens.style.display = 'block'
  
  }
  else{
    itens.style.display = 'none'
  } 
})

