const header = document.querySelector('.nav-bar__brand');
const baseUrl = document.querySelector('.nav-bar__link');
const getArticle = document.getElementsByClassName('nav-bar__link__inner')[0];
const addArticle = document.getElementsByClassName('nav-bar__link__inner')[1];
const editArticle = document.getElementsByClassName('nav-bar__link__inner')[2];
const deleteArticle = document.getElementsByClassName('nav-bar__link__inner')[3];

const addActive = (target) => {
  target.classList.add('active');
}

const removeActive = (target) => {
  target.classList.remove('active');
}

window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;
  if (scroll < 91) {
    addActive(header);
    removeActive(baseUrl)
    removeActive(getArticle)
    removeActive(addArticle)
    removeActive(editArticle)
    removeActive(deleteArticle)
  }

  if (scroll >= 62) {
    removeActive(header);
    addActive(baseUrl)
    removeActive(getArticle)
    removeActive(addArticle)
    removeActive(editArticle)
    removeActive(deleteArticle)
  }

  if (scroll >= 225) {
    removeActive(header);
    removeActive(baseUrl)
    addActive(getArticle)
    removeActive(addArticle)
    removeActive(editArticle)
    removeActive(deleteArticle)
  }

  if (scroll >= 390) {
    removeActive(header);
    removeActive(baseUrl)
    removeActive(getArticle)
    addActive(addArticle)
    removeActive(editArticle)
    removeActive(deleteArticle)
  }

  if (scroll >= 836) {
    removeActive(header);
    removeActive(baseUrl)
    removeActive(getArticle)
    removeActive(addArticle)
    removeActive(editArticle)
    addActive(deleteArticle)
  }
})


