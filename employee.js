// In the __employee.js__ file, use the class keyword to define an `Employee`
// class with a constructor method that sets an `Employee`'s `name`, `salary`,
// `title`, and `manager` properties. Make sure the `manager` property will be set
// to `null` if no manager argument is passed in.
class Employee {
    constructor(name, salary, title, manager=null) {
        this.name = name;
        this.salary = salary;
        this.title = title
        if (manager) {
            manager.addEmployee(this)
        }
        this.manager = manager
    }
    calculateBonus (multiplier) {
        return (this.salary) * multiplier
    }
}
const raph = new Employee('Raphael', 90000, 'Ninja');
const donny = new Employee('Donatello', 85000, 'Grasshopper');

console.log(raph.calculateBonus(0.25)); // => 22500
console.log(donny.calculateBonus(0.15)); // => 12750
module.exports = Employee;
