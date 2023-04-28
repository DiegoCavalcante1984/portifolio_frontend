const itens = document.querySelector('#itens')
const burger = document.querySelector('.box-burger')
const tela = document.querySelector('.tela')

tela.addEventListener('click',()=>{
  itens.style.display = 'none'
    
})

burger.addEventListener('click',()=>{
  if(itens.style.display == 'none'){
  itens.style.display = 'block'
  
  }
  else{
    
    itens.style.display = 'none'
  } 
})

