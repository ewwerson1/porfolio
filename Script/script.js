$(function(){
    //Abrir Menu
    $('.menu-icon').on('click',()=>{
        $('.mobile-menu-list ul').slideToggle()
    })
    //Abrir Dropdown
    let dropdownTarget = ''
    $('.dropdown-button').on('click',function(){
        dropdownTarget = $(this).attr('target')
        $(`.${dropdownTarget}`).slideToggle()
    })
    //Animar o Menu de acordo com a sessão presente
    
    //PopUp
    let popUp = ''
    let popUpActivated = false
        //Ativa o PopUp
        $('.single-popup').on('click',function(){
            popUpActivated = true
            if(popUpActivated){
                popUp = $(this).attr('popup')
                $(`.${popUp}`).fadeIn()
                $('body').css('overflow-y','hidden')
            }
        })
        //Desativa o PopUp
        $('.exit').on('click',function(){
            popUpActivated = false
            $(`.${popUp}`).fadeOut()
            $('body').css('overflow-y','scroll')
        })
})

