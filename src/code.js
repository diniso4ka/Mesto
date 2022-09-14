const darkTheme = document.querySelector('.wrapper__dark')
const postList = document.querySelector('.posts')


const saveButtonProfile = document.querySelector('.module__save-profile')
const saveButtonPost = document.querySelector('.module__save-post')
const changeButton = document.querySelector('.info__change')
const addButton = document.querySelector('.profile__add')


// const post = [JSON.parse(localStorage.getItem('posts'))]
// console.log(post)
//ИЗМЕНЕНИЯ ПРОФИЛЯ



//Получаем информацию о профиле с хранилища.
const fetchData = async () => {
   const data = {
      name: localStorage.name || 'Denis',
      desc: localStorage.desc || 'Genuis',
      img: localStorage.image || 'https://m-chu.ru/wp-content/uploads/2019/04/s1200-7.jpg'
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
   console.log(localStorage)
}

//Очищаем поля ввода.
const clearInfoInput = () => {
   const moduleInput = document.querySelector('.module__input')
   moduleInput.value = ''
}

//Получаем информацию о пользователе .

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

//Сохраняем данные в хранилище и отображаем их.
const postNewInfo = async () => {
   const user = getProfileInfo()
   localStorage.setItem('name', user.name)
   localStorage.setItem('desc', user.desc)
   localStorage.setItem('image', user.image)
   console.log(localStorage)
   renderProfileInfo()
}


//Изменения постов


const postElement = (city, image) => {
   const item = document.createElement('div')
   item.innerHTML = `
   <div class="posts__container container">
               <div class="post__item">
                  <div class="item__photo">
                     <img
                        src=${image}
                        alt="photo" class="item__photo-img">
                  </div>
                  <div class="item__desc">
                     <span class="desc__name">${city}</span>
                     <button class="desc__favorite">
                        <img src="./src/assets/img/favorite.png" alt="favorite icon">
                     </button>
                  </div>
               </div>
            </div>
   `
   return item
}





//Добавление поста в хранилище 

const addPost = () => {
   const name = document.querySelector('.inputCity')
   const image = document.querySelector('.inputImage')
   const postsData = localStorage.getItem('posts')
   if (name.value && image.value) {
      if (postsData) {
         const posts = JSON.parse(localStorage.getItem('posts'))
         const id = new Date()
         posts.push({ id, name: name.value, image: image.value })
         localStorage.setItem('posts', JSON.stringify(posts))
         console.log(localStorage.getItem('posts'));
      } else {
         const id = new Date()
         const posts = []
         posts.push({ id, name: name.value, image: image.value })
         localStorage.setItem('posts', JSON.stringify(posts))
         console.log(localStorage.getItem('posts'));
      }
   }
   setPost()
}

const setPost = () => {
   postList.innerHTML = ''
   const posts = JSON.parse(localStorage.getItem('posts'))
   if (posts) {
      posts.forEach(item => render(postList, postElement(item.name, item.image)))
   }
}














//Модальные окна

const openProfileModule = () => {
   const module = document.querySelector('.module-profile')
   module.style.display = 'block'
}
const closeProfileModule = () => {
   const module = document.querySelector('.module-profile')
   module.style.display = 'none'
}


const openPostModule = () => {
   const module = document.querySelector('.module-post')
   module.style.display = 'block'
}
const closePostModule = () => {
   const module = document.querySelector('.module-post')
   module.style.display = 'none'
}


const render = (container, item) => {
   container.append(item)
}








const onClickChange = () => {
   darkTheme.style.display = 'block'
   openProfileModule()
}

const onClickSaveProfile = () => {
   darkTheme.style.display = 'none'
   closeProfileModule()
   postNewInfo()
   clearInfoInput()
}
const onClickSavePost = () => {
   darkTheme.style.display = 'none'
   addPost()
   closePostModule()
   clearInfoInput()
}

const onClickAdd = () => {
   darkTheme.style.display = 'block'
   openPostModule()
}

addButton.addEventListener('click', onClickAdd)
saveButtonProfile.addEventListener('click', onClickSaveProfile)
saveButtonPost.addEventListener('click', onClickSavePost)
changeButton.addEventListener('click', onClickChange)


window.onload = renderProfileInfo(), addPost()