//Add an action that the painter can perform.
//Have her take that action by execucting the method you created.
//BONUS: Add a method that allows us to add new tools for the painter.


const painter = {
    tools: ["brush", "roller", "caulk", "sandpaper", "dropcloth"],
    uniform: "white overalls",
    cost_per_hour: 25.00,
    insured: true,
    action: function () {
        alert("no mistakes, just happy accidents");
    },
    paid: function () {
        let hours = prompt("how many hours did he work");
        console.log("painter", painter);
        let pay = hours * this.cost_per_hour;
        alert(`the painter made ${pay} for ${hours} hours of work`);
    }
  }

  painter.action();
  painter.action(12);

  painter.sellService = () => {
      console.log("this is painter", this);
      return `hi i am painter an I will paint your house for ${painter.cost_per_hour} per hour `
  }

  console.log(painter.sellService());



 


