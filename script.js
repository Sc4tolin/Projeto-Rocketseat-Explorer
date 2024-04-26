function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')
    //pegar a tag IMG
    const img = document.querySelector("#profile img")   

    if (html.classList.contains('light')) {
        img.setAttribute("src","./assets/avatar-light.png")
        

   } else { 
    img.setAttribute("src","./assets/avatar.png")
       

    }

   


   //depois substituir a imagem 
   // se tiver light mode, adicionar a imagem, se tiver sem lightmode deixar a imagem normal 

}