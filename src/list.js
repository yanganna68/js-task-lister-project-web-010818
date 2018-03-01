/*
list is responsible for creating a single list component
*/
const List = (() => {
  let id = 0
  return class List {
    constructor(title) {
      this.id = ++id
      this.title = title
      this.tasks = []
      //your code here
      ///How can we use the private id variable to auto increment list ids🤔?
    }

    showList(){
      let div = document.createElement('div')
      div.setAttribute("class","list")
      let h2 = document.createElement('h2')
      let button = document.createElement('button')
      button.setAttribute("data-id", this.id)
      button.setAttribute("class", "delete-list")
      button.innerText = "X"



      h2.innerText += this.title
      h2.appendChild(button)
      div.appendChild(h2)

      // button.addEventListener("click", (event) =>{
      //   div.parentNode.removeChild(div)
      // })

      let ul = document.createElement('ul')

      ul.setAttribute("id", this.id)
      div.appendChild(ul)

      ///iterate through all its tasks return it with li

      return div
    }










  }

})()
