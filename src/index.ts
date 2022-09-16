

const darkTheme: HTMLDivElement | null = document.querySelector('.wrapper__dark')



const saveButtonProfile: HTMLButtonElement | null = document.querySelector('.module__save-profile')
const saveButtonPost: HTMLButtonElement | null = document.querySelector('.module__save-post')
const changeButton: HTMLButtonElement | null = document.querySelector('.info__change')
const addButton: HTMLButtonElement | null = document.querySelector('.profile__add')
const closeButtonProfile: HTMLButtonElement | null = document.querySelector('.close-modalProfile')
const closeButtonPost: HTMLButtonElement | null = document.querySelector('.close-modalPost')
const closeButtonFullImage: HTMLButtonElement | null = document.querySelector('.close-modalFullImage')






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
   <svg  class='close-icon' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 28.8L19.2 16L32 3.2L28.8 0L16 12.8L3.2 0L0 3.2L12.8 16L0 28.8L3.2 32L16 19.2L28.8 32L32 28.8Z" fill="white"/>
</svg>
            <div class="item__photo">
               <img
                  src=${image}
                  alt="photo" class="item__photo-img">
            </div>
            <div class="item__desc">
               <span class="desc__name">${city}</span>
               <button class="desc__favorite">
               <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z" fill="black"/>
</svg>
          
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

            const itemPhoto: HTMLDivElement | null = document.querySelector(`.itemId${el.id} .item__photo`)
            if (itemPhoto) {
               itemPhoto.addEventListener('click', () => openImage(el.id))
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

const openImage = (id: number) => {
   console.log(id)
   const postsStorage = localStorage.getItem('posts')
   console.log(postsStorage)
   const modalElement: HTMLImageElement | null = document.querySelector('.modal-image')
   if (postsStorage && modalElement) {
      const posts = JSON.parse(postsStorage)
      const fullImage = posts.filter((el: IUser) => {
         el.id === id;
      })
      modalElement.src = fullImage[0].image
      openFullImageModule()
      console.log(posts)

   }
}


const openFullImageModule = () => {
   const module: HTMLDivElement | null = document.querySelector('.modal-fullImage')
   if (module && darkTheme) {
      module.style.display = 'block'
      darkTheme.style.display = 'block'
   }
}
















//Модальные окна

const onClickCloseModal = () => {
   const modalProfile: HTMLDivElement | null = document.querySelector('.module-profile')
   const modalPost: HTMLDivElement | null = document.querySelector('.module-post')
   const modalFullImage: HTMLDivElement | null = document.querySelector('.modal-fullImage')
   if (modalPost && modalProfile && modalFullImage && darkTheme) {
      modalProfile.style.display = 'none'
      modalPost.style.display = 'none'
      modalFullImage.style.display = 'none'
      darkTheme.style.display = 'none'
   }
}

const openProfileModule = () => {
   const module: HTMLDivElement | null = document.querySelector('.module-profile')
   if (module) {
      module.style.display = 'block'
   }
}


const openPostModule = () => {
   const module: HTMLDivElement | null = document.querySelector('.module-post')
   if (module) {
      module.style.display = 'block'
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
      onClickCloseModal()
      postNewInfo()
      clearInfoInput()
   }
}

const onClickSavePost = () => {
   if (darkTheme) {
      darkTheme.style.display = 'none'
      setPost()
      onClickCloseModal()
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
if (closeButtonProfile) {
   closeButtonProfile.addEventListener('click', onClickCloseModal)
}
if (closeButtonPost) {
   closeButtonPost.addEventListener('click', onClickCloseModal)
}
if (closeButtonFullImage) {
   closeButtonFullImage.addEventListener('click', onClickCloseModal)
}





window.onload = () => {
   renderPage()
}