const darkTheme: HTMLDivElement | null = document.querySelector('.wrapper__dark')



const saveButtonProfile: HTMLButtonElement | null = document.querySelector('.module__save-profile')
const saveButtonPost: HTMLButtonElement | null = document.querySelector('.module__save-post')
const changeButton: HTMLButtonElement | null = document.querySelector('.info__change')
const addButton: HTMLButtonElement | null = document.querySelector('.profile__add')




//ИЗМЕНЕНИЯ ПРОФИЛЯ

interface IData {
   name: string,
   desc: string,
   img: string,
}

interface IUser {
   name: string,
   desc: string,
   image: string,
   id: number
}






//Получаем информацию о профиле с хранилища.
const fetchData = async (): Promise<IData> => {
   const data: IData = {
      name: localStorage.name || 'Denis',
      desc: localStorage.desc || 'Genuis',
      img: localStorage.image || 'https://libertycity.ru/uploads/posts/2021-08/1629114930_67dd333696cf3b13702f83e97e16167d.jpg',
   }
   return data
}


//Изменяем элементы профиля.
const changeProfileInfo = (name: Element, desc: Element, image: any, data: IData) => {
   name.textContent = data.name
   desc.textContent = data.desc
   image.src = data.img
}

//Отображаем элементы профиля.
const renderProfileInfo = async () => {
   const name = document.querySelector('.infoText__name-text')
   const desc = document.querySelector('.infoText__desc-text')
   const image = document.querySelector('.photo')
   console.log(image);

   if (name && desc && image) {
      const data: IData = await fetchData()
      changeProfileInfo(name, desc, image, data)
      console.log(localStorage)
   }
}

//Очищаем поля ввода.
const clearInfoInput = () => {
   const moduleInput: HTMLInputElement | null = document.querySelector('.module__input')
   if (moduleInput) {
      moduleInput.value = ''
   }
}

//Получаем информацию о пользователе .

const getProfileInfo = (): IUser | void => {

   const name: HTMLInputElement | null = document.querySelector('.inputName')
   const desc: HTMLInputElement | null = document.querySelector('.inputDesc')
   const image: HTMLInputElement | null = document.querySelector('.inputImgUrl')
   if (name && desc && image) {
      return {
         name: name.value || 'Denis',
         desc: desc.value || 'Genius',
         image: image.value || 'https://m-chu.ru/wp-content/uploads/2019/04/s1200-7.jpg',
         id: 1
      }
   }
}

//Сохраняем данные в хранилище и отображаем их.
const postNewInfo = async () => {
   const user = getProfileInfo()
   if (user) {
      localStorage.setItem('name', user.name)
      localStorage.setItem('desc', user.desc)
      localStorage.setItem('image', user.image)
   }
   console.log(localStorage)
   renderProfileInfo()
}


//Изменения постов

const postElement = (city: string, image: string, id: number) => {
   const item = document.createElement('div')
   item.classList.add(`itemId${id}`)
   item.classList.add('post__item')
   item.innerHTML = ` 
      <img src='./src/assets/img/Close.png' class="close-icon">
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
   `

   return item
}





const setPost = () => {
   const name: HTMLInputElement | null = document.querySelector('.inputCity')
   const image: HTMLInputElement | null = document.querySelector('.inputImage')
   if (name && image && name.value && image.value) {
      const postsStorage = localStorage.getItem('posts')
      if (postsStorage) {
         const posts = JSON.parse(postsStorage)
         const id = new Date().getTime()
         posts.push({ id, name: name.value, image: image.value })
         localStorage.setItem('posts', JSON.stringify(posts))
         addPost()
      } else {
         const posts = []
         const id = new Date().getTime()
         posts.push({ id, name: name.value, image: image.value })
         localStorage.setItem('posts', JSON.stringify(posts))
         addPost()
      }
   }
}


const addPost = () => {
   const postList: HTMLDivElement | null = document.querySelector('.posts')
   const postsStorage = localStorage.getItem('posts')
   if (postList && postsStorage) {
      postList.innerHTML = ''
      const posts = JSON.parse(postsStorage)
      if (posts) {
         posts.forEach((el: IUser) => {
            render(postList, postElement(el.name, el.image, el.id))
            const deleteButton: HTMLButtonElement | null = document.querySelector(`.itemId${el.id} .close-icon`)
            if (deleteButton) {
               deleteButton.addEventListener('click', () => deletePost(el.id))
            }
         })

      }

   }
}





const deletePost = (id: number) => {
   const postsStorage = localStorage.getItem('posts')
   if (postsStorage) {
      const posts = JSON.parse(postsStorage).filter((el: IUser) => id !== el.id)
      localStorage.setItem('posts', JSON.stringify(posts))
      addPost()
   }
}

console.log(localStorage.getItem('posts'));














//Модальные окна

const openProfileModule = () => {
   const module: HTMLDivElement | null = document.querySelector('.module-profile')
   if (module) {
      module.style.display = 'block'
   }
}
const closeProfileModule = () => {
   const module: HTMLDivElement | null = document.querySelector('.module-profile')
   if (module) {
      module.style.display = 'none'
   }
}


const openPostModule = () => {
   const module: HTMLDivElement | null = document.querySelector('.module-post')
   if (module) {
      module.style.display = 'block'
   }
}
const closePostModule = () => {
   const module: HTMLDivElement | null = document.querySelector('.module-post')
   if (module) {
      module.style.display = 'none'
   }
}



const render = (container: HTMLDivElement, item: HTMLDivElement) => {
   container.append(item)
}








const onClickChange = () => {
   if (darkTheme) {
      darkTheme.style.display = 'block'
      openProfileModule()
   }
}

const onClickSaveProfile = () => {
   if (darkTheme) {
      darkTheme.style.display = 'none'
      closeProfileModule()
      postNewInfo()
      clearInfoInput()
   }
}

const onClickSavePost = () => {
   if (darkTheme) {
      darkTheme.style.display = 'none'
      setPost()
      closePostModule()
      clearInfoInput()
   }
}

const onClickAdd = () => {
   if (darkTheme) {
      darkTheme.style.display = 'block'
      openPostModule()
   }
}




const renderPage = () => {
   renderProfileInfo()
   addPost()
}


if (addButton) {
   addButton.addEventListener('click', onClickAdd)
}
if (saveButtonPost) {
   saveButtonPost.addEventListener('click', onClickSavePost)
}
if (saveButtonProfile) {
   saveButtonProfile.addEventListener('click', onClickSaveProfile)
}
if (changeButton) {
   changeButton.addEventListener('click', onClickChange)
}

window.onload = () => {
   renderPage()
}