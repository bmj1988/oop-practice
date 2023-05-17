// In the __employee.js__ file, use the class keyword to define an `Employee`
// class with a constructor method that sets an `Employee`'s `name`, `salary`,
// `title`, and `manager` properties. Make sure the `manager` property will be set
// to `null` if no manager argument is passed in.

class Employee {
    constructor(name, salary, title, manager) {
        this.name = name;
        this.salary = salary;
        this.title = title
        if (manager) {
            this.manager = manager
        }
        else {
            this.manager = null
        }
    }
}
module.exports = Employee;
