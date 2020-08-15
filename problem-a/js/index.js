"use strict";

/* your code goes here! */
class Task {
  constructor(description, complete) {
    this.description = description;
    this.complete = complete;
  }

  render() {
    const li = document.createElement("li");
    li.textContent = this.description;
    if (this.complete) {
      li.classList.add("font-strike");
    }
    li.addEventListener("click", () => {
      this.toggleFinished();
      li.classList.toggle("font-strike");
    });
    return li;
  }

  toggleFinished() {
    this.complete = !this.complete;
  }
}

class TaskList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(description) {
    this.tasks.push(new Task(description, false));
  }

  render() {
    const ol = document.createElement("ol");
    this.tasks.forEach((task) => {
      ol.appendChild(task.render());
    });
    return ol;
  }
}

class NewTaskForm {
  constructor(submitCallback) {
    this.submitCallback = submitCallback;
  }

  render() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.classList.add("form-control");
    input.classList.add("mb-3");
    input.setAttribute("placeholder", "What else do you have to do?");
    const button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.textContent = "Add task to list";
    button.addEventListener("click", () => {
      this.submitCallback(input.value);
    });
    form.appendChild(input);
    form.appendChild(button);
    return form;
  }
}

class App {
  constructor(parentElement, taskList) {
    this.parentElement = parentElement;
    this.taskList = taskList;
  }

  render() {
    this.parentElement.innerHTML = "";
    this.parentElement.appendChild(this.taskList.render());
    this.parentElement.appendChild(
      new NewTaskForm((description) => {
        this.addTaskToList(description);
      }).render()
    );
  }

  addTaskToList(description) {
    this.taskList.addTask(description);
    this.render();
  }
}

const app = new App(
  document.getElementById("app"),
  new TaskList([
    new Task("Make some classes", true),
    new Task("Arrow some functions", false),
  ])
);
app.render();

//Make functions and variables available to tester. DO NOT MODIFY THIS.
if (typeof module !== "undefined" && module.exports) {
  /* eslint-disable */
  if (typeof Task !== "undefined") module.exports.Task = Task;
  if (typeof TaskList !== "undefined") module.exports.TaskList = TaskList;
  if (typeof NewTaskForm !== "undefined")
    module.exports.NewTaskForm = NewTaskForm;
  if (typeof App !== "undefined") module.exports.App = App;
}
