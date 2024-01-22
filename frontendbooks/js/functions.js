const functions = {
    createElement : (tag, classs = [], content = false, source = false, id = false, href = false) => {
        const element = document.createElement(tag)
        for (const clas of classs) {
          element.classList.add(clas)
        }
        if (content) {
          element.textContent = content
        }
        if (source) {
          element.src = source
        }
        if (id) {
          element.id = id
        }
        if (href) {
          element.href = href
        }
        return element
      }
}

export default functions