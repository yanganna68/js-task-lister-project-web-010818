/*
task is responsible for creating a single task object
*/
const Task = (() => {
  let id = 0
  return class Task {
    constructor(description, priority) {
      this.id = ++id
      this.description = description
      this.priority = priority
    }

    showTask(){
      let li = document.createElement('li')
      li.setAttribute("data-id", this.id)
      li.innerHTML = `Task: ${this.description} <br>Priority: ${this.priority}`

      return li
    }




  }

})()
