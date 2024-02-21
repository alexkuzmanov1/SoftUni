window.addEventListener("load", solve);

function solve() {

  
  const inputs = {
    snowmanName: document.getElementById('snowman-name'),
    snowmanHeight: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creatorName: document.getElementById('creator-name'),
    specialAttribute: document.getElementById('special-attribute')
  }

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', onAddClick);

const infoList = document.querySelector('.snowman-preview'); //ot form do purvoto
const infoList2 = document.querySelector('.snow-list')
const endPage = document.querySelector('.body');

function onAddClick(event){
  event.preventDefault();
  if(
    inputs.snowmanName.value == '' ||
    inputs.snowmanHeight.value == '' ||
    inputs.location.value == '' ||
    inputs.creatorName.value == '' ||
    inputs.specialAttribute.value == ''
  ) {
   return
  
}


const snowmanName = inputs.snowmanName.value;
const snowmanHeight = Number(inputs.snowmanHeight.value);
const location = inputs.location.value;
const creatorName = inputs.creatorName.value;
const specialAttribute = inputs.specialAttribute.value


  
  inputs.snowmanName.value = ''
  inputs.snowmanHeight.value = ''
  inputs.location.value = ''
  inputs.creatorName.value = ''
  inputs.specialAttribute.value = ''

  addBtn.disabled = true
  const result = createPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute)
  infoList.appendChild(result)
  
}
  //form to list
  function createPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute){
    let element = e('li')
    element.className = 'snowman-info'

    let article = e('article')
    article.appendChild(e('p', `Name: ${snowmanName}`));
    article.appendChild(e('p', `Height: ${snowmanHeight}`));
    article.appendChild(e('p', `Location: ${location}`));
    article.appendChild(e('p', `Creator: ${creatorName}`));
    article.appendChild(e('p', `Attribute: ${specialAttribute}`));

    element.appendChild(article)

    const editBtn = e(`button`, `Edit`)
    editBtn.className = 'edit-btn'
    editBtn.addEventListener('click', () => onEditClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute))

    const nextBtn = e(`button`, `Next`)
    nextBtn.className = 'next-btn'
    nextBtn.addEventListener('click', () => nextButton(snowmanName, snowmanHeight, location, creatorName, specialAttribute))

    article.appendChild(editBtn);
    article.appendChild(nextBtn);

    return element

   

  }

function createSmallPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute){
  let element2 = f("li");
  element2.className = 'snowman-content';

  let article = f('article');
  article.appendChild(f('p', `Name: ${snowmanName}`));
  article.appendChild(f('p', `Height: ${snowmanHeight}`));
  article.appendChild(f('p', `Location: ${location}`));
  article.appendChild(f('p', `Creator: ${creatorName}`));
  article.appendChild(f('p', `Attribute: ${specialAttribute}`));

  element2.appendChild(article)

  const sendBtn = f(`button`, `Send`)
    sendBtn.className = 'send-btn'
    sendBtn.addEventListener('click', () => sendButton(snowmanName, snowmanHeight, location, creatorName, specialAttribute))

    article.appendChild(sendBtn)


  return element2

}

function f(type, content){
  const element2 = document.createElement(type)

  if(content){
    element2.textContent = content
  }

  return element2
}

function sendButton(){
      const e = document.querySelector('main');
      e.style.display = 'none';

      const bakcBtn = g('button', 'Back');
      bakcBtn.className = 'back-btn';
      bakcBtn.addEventListener('click', () => refreshPage())

      const body = document.querySelector('body')
      body.appendChild(bakcBtn)

      
      let img = document.getElementById('back-img')
      img.removeAttribute('hidden')
      document.img.appendChild(img)
      
}

function refreshPage(){
  location.reload()
}



function g(type, content){
  const element3 = document.createElement(type)

  if(content){
    element3.textContent = content
  }

  return element3
}



  function nextButton(snowmanName, snowmanHeight, location, creatorName, specialAttribute){
      infoList.replaceChildren();
      const result2 = createSmallPreview(snowmanName, snowmanHeight, location, creatorName, specialAttribute)
  infoList2.appendChild(result2);
    }



  // edit button
  function onEditClick(snowmanName, snowmanHeight, location, creatorName, specialAttribute){
inputs.snowmanName.value = snowmanName
inputs.snowmanHeight.value = snowmanHeight
inputs.location.value = location
inputs.creatorName.value = creatorName 
inputs.specialAttribute.value = specialAttribute
  
    infoList.replaceChildren()
    addBtn.disabled = false
}

  function e(type, content){
    const element = document.createElement(type)
    
    if(content){
      element.textContent = content
    }
    return element
  }
}
