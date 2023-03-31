///SIDEBAR///pp
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');

const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const thememodel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

//remove active class
function changeActiveItem() {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications  .notifications-count').style.display = 'none';
        }
    })
})

/*===============MESSAGES=======*/

// searches chat

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }else{
            chat.style.display = 'none';
        }
    })
}
    

//search chat

messageSearch.addEventListener('keyup', searchMessage);


//highlight message box
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow  = 'none';
    }, 3000);
})

// theme customization

const openthemeModel = () =>{
    thememodel.style.display = 'grid';
}

const closethemeModel = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        thememodel.style.display = 'none';
    }
}

thememodel.addEventListener('click', closethemeModel);


theme.addEventListener('click', openthemeModel);



/*-----------------------FONTS------*/
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    
    
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

      if(size.classList.contains('font-size1')){
          fontSize = '10px';
          root.style.setProperty('----sticky-top-left', '5.4rem');
          root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size2')){
          fontSize = '13px';
          root.style.setProperty('----sticky-top-left', '5.4rem');
          root.style.setProperty('----sticky-top-right', '-7rem');
        }else if(size.classList.contains('font-size3')){
          fontSize = '16px';
          root.style.setProperty('----sticky-top-left', '-2rem');
          root.style.setProperty('----sticky-top-right', '-17rem');
        }else if(size.classList.contains('font-size4')){
          fontSize = '19px';
          root.style.setProperty('----sticky-top-left', '-5rem');
          root.style.setProperty('----sticky-top-right', '-25rem');
        }else if(size.classList.contains('font-size5')){
          fontSize = '22px';
          root.style.setProperty('----sticky-top-left', '-12rem');
          root.style.setProperty('----sticky-top-right', '-35rem');
        }
    document.querySelector('html').style.fontSize = fontSize;
    })
  
  
  })


  const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
  }

  //     change primary colors */
  colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 294;
        }else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    }) 
 })

 /*--------------theme color change ---*/


 let lightColorLightness;
 let whiteColorLightness;
 let darkColorLightness;

 const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
 }

 Bg1.addEventListener('click', () => {

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();

 });

 Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

 });

 Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

 });

