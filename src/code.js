const changeButton = document.querySelector('.info__change')
const darkTheme = document.querySelector('.wrapper__dark')


const onClickButton = () => {
   darkTheme.setAttribute('display', 'block')
   console.log(darkTheme)
}

changeButton.addEventListener('click', onClickButton)