const changeButton = document.querySelector('.info__change')
const darkTheme = document.querySelector('.wrapper__dark')
const saveButton = document.querySelector('.module__save')


//ИЗМЕНЕНИЯ ПРОФИЛЯ



//Получаем информацию о профиле с хранилища.
const fetchData = async () => {
   const data = {
      name: localStorage.name || 'Denis',
      desc: localStorage.desc || 'Genuis',
      image: localStorage.image || 'https://m-chu.ru/wp-content/uploads/2019/04/s1200-7.jpg'
   }
   return data
}


//Изменяем элементы профиля.
const changeProfileInfo = (name, desc, image, data) => {
   name.textContent = data.name
   desc.textContent = data.desc
   image.src = data.img
}

//Отображаем элементы профиля.
const renderProfileInfo = async () => {
   const name = document.querySelector('.infoText__name-text')
   const desc = document.querySelector('.infoText__desc-text')
   const image = document.querySelector('.photo')
   const data = await fetchData()
   changeProfileInfo(name, desc, image, data)
}

//Очищаем поля ввода
const clearInfoInput = () => {
   const moduleInput = document.querySelector('.module__input')
   moduleInput.value = ''
}

//Получаем информацию о пользователе 

const getProfileInfo = () => {
   const name = document.querySelector('.inputName')
   const desc = document.querySelector('.inputDesc')
   const image = document.querySelector('.inputImgUrl')
   return user = {
      name: name.value || 'Denis',
      desc: desc.value || 'Genius',
      image: image.value || 'https://m-chu.ru/wp-content/uploads/2019/04/s1200-7.jpg',
      id: 1
   }
}

//Отправляем изменения профиля на апи 
const postNewInfo = async () => {
   const user = getProfileInfo()
   localStorage.setItem('name', user.name)
   localStorage.setItem('desc', user.desc)
   localStorage.setItem('image', user.image)
   console.log(localStorage)
   // await fetch('https://6321d51dfd698dfa290049b6.mockapi.io/profile/1', {
   //    method: "DELETE"
   // })
   // const user = getProfileInfo()
   // await fetch('https://6321d51dfd698dfa290049b6.mockapi.io/profile', {
   //    method: "POST",
   //    body: JSON.stringify({
   //       name: user.name,
   //       desc: user.desc,
   //       image: user.image,
   //       id: 1
   //    })
   // })
   renderProfileInfo()
}









const onClickButton = () => {
   darkTheme.style.display = 'block'
}

const onClickSave = () => {
   darkTheme.style.display = 'none'
   postNewInfo()
   clearInfoInput()
}


saveButton.addEventListener('click', onClickSave)
changeButton.addEventListener('click', onClickButton)


window.onload = renderProfileInfo()