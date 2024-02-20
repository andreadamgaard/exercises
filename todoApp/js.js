//Skift til let når der kommer problemer
let task_array = [];

document.querySelector("#makeNewToDo").addEventListener("click", newTask);

function newTask(evt) {
  console.log("klikket", evt.currentTarget.querySelector("#todoInput"));
  if (evt.target.type === "button") {
    makeNewTask(evt.currentTarget.querySelector("#todoInput").value);
    //Her laver vi den til en tom string når vi har lavet input
    evt.currentTarget.querySelector("#todoInput").value = "";
  }
}

function makeNewTask(name) {
  const task = { taskName: name, done: false, id: self.crypto.randomUUID() };
  //Her pusher den den nye task op til array
  task_array.push(task);
  console.log("task", task_array);
  filterSortList();
}

function filterSortList() {
  //indsæt filter og sortering her til done eller to do

  let listToShow;

  //Sortereing of filtering

  listToShow = task_array;
  showList();
}

function showList() {
  //Få vores liste vist i DOM'en
  const tbodyToDo = document.querySelector("#todoListen");
  const tbodyDone = document.querySelector("#doneListen");
  //Husk at tømme den
  tbodyToDo.innerHTML = "";
  tbodyDone.innerHTML = "";

  task_array.forEach((task) => {
    const clone = document.querySelector("template").content.cloneNode(true);
    //Vitager fat i vores textfelt
    const tf = clone.querySelector("#textInput");
    tf.textContent = task.taskName;
    if (task.done) {
      //Når vores task er true er den under done.
      clone.querySelector("#toDoBtn").textContent = "Done";
    } else {
      //Når vores task er false er den under to do.
      clone.querySelector("#toDoBtn").textContent = "To do";
    }

    clone.querySelector("#toDoBtn").addEventListener("click", () => {
      task.done = !task.done;
      //toggle vores valg
      //   task.taskName = tf.value;
      filterSortList();
    });

    //clone.querySelector("header").textContent = task.name;
    if (task.done) {
      tbodyDone.appendChild(clone);
    } else {
      tbodyToDo.appendChild(clone);
    }
  });
}
