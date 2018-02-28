class App{
  constructor(){
    this.lists = []
    this.listForm = document.getElementById("create-list-form")
    this.taskForm = document.getElementById("create-task-form")
    this.listSection = document.getElementById("lists")
    this.parentList = document.getElementById("parent-list")
    this.newListTitle = document.getElementById("new-list-title")

  }

  addEventListeners(){
    this.taskForm.setAttribute("style","display: none;")
    this.listForm.addEventListener("submit", (event) =>{
      event.preventDefault();
      let title = event.target.children[1].value
      let list = new List(title)

      this.lists.push(list)
      let listItem = list.showList()

      this.parentList.innerHTML = ""
      this.lists.forEach((item) => {
        let option = document.createElement('option')
        option.setAttribute("data-id",item.id)
        option.innerText = item.title
        this.parentList.appendChild(option)
      })
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

      let listTasks = foundList.showList()
      this.listSection.appendChild(listTasks)


    })


  }






}
