function calcular() {
 var birth = Number(document.getElementById('ano').value)
 var resulttxt = document.querySelector('p#restxt')
 var data = new Date()
 var currentyear = data.getFullYear()
 var age = currentyear - birth
 var sex = document.getElementsByName('sex')
 var gender = ''
 var img = document.querySelector('img#imagem')

//Verifica se o usuário n faz macacada e digita número paia
 if (birth <= 0 || birth >= currentyear) {
   window.alert('Qual foi burrão, coloca uma data que faça sentido')
 } 
 else if (birth <= 1920) { 
   window.alert('Dúvido que tu estaria vivo se isso fosse verdade')
 }

//Verifica se nasceu com pika ou xereca
if (sex[0].checked) {
 var gender = 'um homem'
}
else {
 var gender = 'uma mulher'
}

resulttxt.innerHTML = `Detectamos ${gender} com ${age} anos de idade`

//Calcula a idade da pessoa e bota na tela a imagem que representa
if (age <= 14 && gender=='um homem') {
  img.src = 'Imagens/Criança homem.jpg'
 }
 else if (age <= 14 && gender=='uma mulher' ) {
  img.src = 'Imagens/Criança mulher.jpg'
 }
 else if (age <= 25 && gender=='um homem') {
  img.src = 'Imagens/jovem homem.jpg'
}
 else if (age <=25 && gender=='uma mulher') {
  img.src = 'Imagens/jovem mulher.jpg'
}
else if (age <=50 && gender=='um homem') {
  img.src = 'Imagens/Adulto homem.jpg'
}
else if (age <=50 && gender=='uma mulher'){
  img.src = 'Imagens/Adulto mulher.jpg'
}
else if (age >=51 && gender=='um homem') {
img.src = 'Imagens/Idoso homem.jpg'
} 
else if (age >=51 && gender=='uma mulher') 
  img.src = 'Imagens/Idoso mulher.jpg'
}

