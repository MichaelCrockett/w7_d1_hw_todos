import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {name: "Wash dishes", priority: "Low", isCompleted: false},
        {name: "Iron shirts", priority: "High", isCompleted: true},
        {name: "Beans", priority: "Low", isCompleted: false}
      ],
      newTask: {name: "", priority: "Low", isCompleted: false}
    },
    methods: {
      saveNewTask: function(){
        this.tasks.push(this.newTask);
        this.newTask = {name: "", priority: "Low", isCompleted: false};
      },
      completeTask: function(index){
        this.tasks[index].isCompleted = true;
      }
    }
  });
});
