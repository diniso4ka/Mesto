import '../style/index.css'

const darkTheme: HTMLDivElement = document.querySelector('.wrapper__dark')
const postList: HTMLDivElement = document.querySelector('.posts')


//Кнопки
const saveButtonProfile: HTMLButtonElement = document.querySelector('.module__save-profile')
const saveButtonPost: HTMLButtonElement = document.querySelector('.module__save-post')
const changeButton: HTMLButtonElement = document.querySelector('.info__change')
const addButton: HTMLButtonElement = document.querySelector('.profile__add')
const closeButtonProfile: HTMLButtonElement = document.querySelector('.close-modalProfile')
const closeButtonPost: HTMLButtonElement = document.querySelector('.close-modalPost')
const closeButtonFullImage: HTMLButtonElement = document.querySelector('.close-modalFullImage')

//Инпуты
const name: HTMLInputElement = document.querySelector('.inputName')
const desc: HTMLInputElement = document.querySelector('.inputDesc')
const image: HTMLInputElement = document.querySelector('.inputImgUrl')
const inputImage: HTMLInputElement = document.querySelector('.inputImage')
const inputCity: HTMLInputElement = document.querySelector('.inputCity')

//Элементы профиля
const nameText: HTMLDivElement = document.querySelector('.infoText__name-text')
const descText: HTMLDivElement = document.querySelector('.infoText__desc-text')
const imageText: HTMLImageElement = document.querySelector('.photo')


//Модалки
const modalProfile: HTMLDivElement = document.querySelector('.module-profile')
const modalPost: HTMLDivElement = document.querySelector('.module-post')
const modalFullImage: HTMLDivElement = document.querySelector('.modal-fullImage')




//ИЗМЕНЕНИЯ ПРОФИЛЯ

interface IData {
   name: string,
   desc: string,
   image: string,
}

interface IUser {
   name: string,
   desc: string,
   image: string,
   id: number,
   liked: boolean
}


//Сохраняем информацию о профиле в хранилище

const saveInfoProfile = () => {
   if (name && desc && image) {
      const user = {
         name: name.value || nameText.textContent,
         desc: desc.value || descText.textContent,
         image: image.value || imageText.src,
      }
      return user
   }

}


//Получаем информацию о профиле с хранилища.

const fetchProfile = (): void => {
   const user = saveInfoProfile()
   if (user) {
      localStorage.setItem('profile', JSON.stringify(user))
      renderProfile()
   }
}

//Отображаем профиль

const renderProfile = (): void => {
   const userStorage = localStorage.getItem('profile')
   if (userStorage) {
      const user = JSON.parse(userStorage)
      nameText.textContent = user.name
      descText.textContent = user.desc
      imageText.src = user.image
   }
}





//Очищаем поля ввода.
const clearInfoInput = () => {
   if (inputImage && inputCity) {
      inputImage.value = ''
      inputCity.value = ''
   }
}


//Шаблон постов

const postElement = (city: string, image: string, id: number, liked: boolean) => {
   const item = document.createElement('div')
   item.classList.add(`itemId${id}`)
   item.classList.add('post__item')

   const divClose = document.createElement('div')
   divClose.innerHTML
   item.innerHTML = `
   <svg  class='close-icon' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 28.8L19.2 16L32 3.2L28.8 0L16 12.8L3.2 0L0 3.2L12.8 16L0 28.8L3.2 32L16 19.2L28.8 32L32 28.8Z" fill="white"/>
</svg
   `
   item.append(divClose)


   const divPhoto = document.createElement('div')
   divPhoto.classList.add('item__photo')
   item.append(divPhoto)


   const photoImg = document.createElement('img')
   photoImg.classList.add('item__photo-img')
   photoImg.src = image
   photoImg.alt = 'photo'
   divPhoto.append(photoImg)


   const divDesc = document.createElement('div')
   divDesc.classList.add('item__desc')
   item.append(divDesc)


   const spanDesc = document.createElement('span')
   spanDesc.classList.add('desc__name')
   spanDesc.textContent = city
   divDesc.append(spanDesc)


   const buttonFav = document.createElement('button')
   buttonFav.classList.add('desc__favorite')
   buttonFav.innerHTML = `
   <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
   // <path class='like-icon' fill-rule="evenodd" clip-rule="evenodd" d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z" fill="black"/>
   // </svg>
   `
   divDesc.append(buttonFav)

   return item
}



//Добавляем пост в хранилище 

const setPost = () => {
   if (name && image) {
      const postsStorage = localStorage.getItem('posts')
      if (postsStorage) {
         const posts = JSON.parse(postsStorage)
         const id = new Date().getTime()
         posts.push({ id, name: inputCity.value, image: inputImage.value, liked: false })
         localStorage.setItem('posts', JSON.stringify(posts))
         addPost()
      } else {
         const posts = []
         const id = new Date().getTime()
         posts.push({ id, name: inputCity.value, image: inputImage.value, liked: false })
         localStorage.setItem('posts', JSON.stringify(posts))
         addPost()
      }
   }
}




// Рендер поста

const addPost = () => {
   const postsStorage = localStorage.getItem('posts')
   if (postList && postsStorage) {
      postList.innerHTML = ''
      const posts = JSON.parse(postsStorage)
      if (posts) {
         posts.forEach((el: IUser) => {
            render(postList, postElement(el.name, el.image, el.id, el.liked))
            const deleteButton: HTMLButtonElement | null = document.querySelector(`.itemId${el.id} .close-icon`)
            if (deleteButton) {
               deleteButton.addEventListener('click', () => deletePost(el.id))
            }

            const likeButton: HTMLButtonElement | null = document.querySelector(`.itemId${el.id} .desc__favorite`)
            if (likeButton) {
               likeButton.addEventListener('click', () => likePost(el.id))
               if (el.liked) {
                  likeButton.innerHTML = `
<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841 9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841 1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806 1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z" fill="black"/>
</svg>
`
               } else {
                  likeButton.innerHTML = `
                  <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2991 9.78586C22.567 7.54338 22.567 3.90213 20.2991 1.68186C18.0311 -0.560619 14.3486 -0.560619 12.0806 1.68186L10.9804 2.792L9.88007 1.70406C7.61215 -0.560619 3.92957 -0.560619 1.6841 1.68186C0.583822 2.76979 0 4.21297 0 5.74496C0 7.27695 0.606277 8.72013 1.6841 9.80806L10.9804 19L20.2991 9.78586ZM1.4371 5.74496C1.4371 4.59042 1.8862 3.52469 2.71702 2.72539C3.5703 1.88168 4.67058 1.45983 5.77086 1.45983C6.87114 1.45983 7.97142 1.88168 8.8247 2.72539L10.9804 4.83465L13.136 2.70318C14.8201 1.03798 17.582 1.03798 19.2437 2.70318C20.0521 3.50248 20.5236 4.56821 20.5236 5.72276C20.5236 6.8773 20.0745 7.94303 19.2437 8.74233L10.9804 16.9351L2.71702 8.76453C1.90865 7.94303 1.4371 6.8773 1.4371 5.74496Z" fill="black"/>
</svg>
`
               }
            }

            const itemPhoto: HTMLDivElement | null = document.querySelector(`.itemId${el.id} .item__photo`)
            if (itemPhoto) {
               itemPhoto.addEventListener('click', () => openImage(el.id))
            }




         })

      } else {
         postList.innerHTML = 'Загрузите свою первую фотографию.'
      }

   }
}



//Удаление поста

const deletePost = (id: number) => {
   const postsStorage = localStorage.getItem('posts')
   if (postsStorage) {
      const posts = JSON.parse(postsStorage).filter((el: IUser) => id !== el.id)
      localStorage.setItem('posts', JSON.stringify(posts))
      addPost()
   }
}

// Лайк поста

const likePost = (id: number) => {
   const postsStorage = localStorage.getItem('posts')
   if (postsStorage) {
      const posts = JSON.parse(postsStorage).map((el: IUser) => {
         if (id === el.id) {
            return {
               ...el,
               liked: !el.liked
            }
         } else {
            return el
         }
      })
      localStorage.setItem('posts', JSON.stringify(posts))
      addPost()
   }
}

// Добавляем изображение в модальное окно

const openImage = (id: number) => {
   const postsStorage = localStorage.getItem('posts')
   const modalElement: HTMLImageElement | null = document.querySelector('.modal-image')
   if (postsStorage && modalElement) {
      const posts = JSON.parse(postsStorage)
      posts.filter((el: IUser) => {
         if (el.id === id) {
            modalElement.src = el.image
         }
      })
      openFullImageModule()
   }
}





//Модальные окна


const openFullImageModule = () => {
   if (modalFullImage && darkTheme) {
      modalFullImage.style.display = 'block'
      darkTheme.style.display = 'block'
   }
}


const onClickCloseModal = () => {
   if (modalPost && modalProfile && modalFullImage && darkTheme) {
      modalProfile.style.display = 'none'
      modalPost.style.display = 'none'
      modalFullImage.style.display = 'none'
      darkTheme.style.display = 'none'
   }
}

const openProfileModule = () => {
   if (modalProfile) {
      modalProfile.style.display = 'block'
   }
}


const openPostModule = () => {
   if (modalPost) {
      modalPost.style.display = 'block'
   }
}


// Рендер 

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
      fetchProfile()
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
   addPost()
   renderProfile()
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