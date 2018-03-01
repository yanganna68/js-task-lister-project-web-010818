class App{
  constructor(){
    this.lists = []
    this.listForm = document.getElementById("create-list-form")
    this.taskForm = document.getElementById("create-task-form")
    this.listSection = document.getElementById("lists")
    this.parentList = document.getElementById("parent-list")
    this.newListTitle = document.getElementById("new-list-title")
    this.deleteButton = document.getElementsByClassName("delete-list")

  }

  addEventListeners(){
    if (this.lists.length === 0){
      this.taskForm.setAttribute("style","display: none;")
    }
    this.listForm.addEventListener("submit", (event) =>{
      event.preventDefault();
      let title = event.target.children[1].value
      let list = new List(title)

      this.lists.push(list)
      let listItem = list.showList()


      this.parentList.innerHTML = ""
      this.renderOption();
      // this.lists.forEach((item) => {
      //   let option = document.createElement('option')
      //   option.setAttribute("data-id",item.id)
      //   option.innerText = item.title
      //   this.parentList.appendChild(option)
      // })
      this.taskForm.setAttribute("style","display: block;")
      this.listSection.appendChild(listItem)
      this.newListTitle.value = ""

    })

    this.taskForm.addEventListener("submit", (event) =>{
      event.preventDefault();
      let listTitle = event.target.children[1].value;


      let foundList;
      this.lists.forEach((list) => {
        if (list.title === listTitle){
          foundList = list
        }
      })


      let description = event.target.children[3].value;
      let priority = event.target.children[5].value;
      let task = new Task(description, priority)
      foundList.tasks.push(task)

      // this.listSection.appendChild(listTasks)xs
        let li = task.showTask()
        let ul = document.getElementById(foundList.id)
        ul.appendChild(li)

    })

    this.listSection.addEventListener("click", (event) => {
      if(event.target.className === "delete-list"){
        const listId = parseInt(event.target.dataset.id)
        this.lists = this.lists.filter(list => list.id !== listId)
        let ul = document.getElementById(listId)
        ul.parentNode.parentNode.removeChild(ul.parentNode)
        this.renderOption();
        if (this.lists.length === 0){
          this.taskForm.setAttribute("style","display: none;")
        }
      }
    })


  }

  renderOption(){
    this.parentList.innerHTML = ""
    this.lists.forEach((item) => {
      let option = document.createElement('option')
      option.setAttribute("data-id",item.id)
      option.innerText = item.title
      this.parentList.appendChild(option)
    })
  }






}
