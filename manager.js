// In this phase you will create a `Manager` class that inherits from the
// `Employee` class you just made. Run the test specs using
// `npm test test/02-create-manager-spec.js`. Once the specs pass, use the local
// tests provided below to see your app in action.

// Begin by creating a __manager.js__ file and requiring your `Employee` module.
// Next, you will define your `Manager` class as a child of the `Employee` class
// that inherits all of the same properties.

// > **Note**: A `Manager` may be under another `Manager` because
// >`Manager`s might report to higher-level `Manager`s.

// You will need an additional `employees` property that holds an array of all
// `Employee`s assigned to the `Manager`.

const employee = require('./employee')

class Manager extends employee {
    constructor(name, salary, title, manager, employees) {
        super(name, salary, title, manager)
        this.employees = []
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }
    // calculateBonus(multiplier) {
    //     return this._totalSubSalary(this.employees) * multiplier
    // }
    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier
    }
// calculate bonus by summing all salaries of employees in .employees
// if employee is manager, sum the salaries of all of that manager's .employees as well
// _totalSubSalary(arr=[]) {
//     if (arr.length === 0) return 0
//     return arr[0].salary += this._totalSubSalary(arr.slice(1))
// }
// }

 _totalSubSalary() {
    let sum = 0
    this.employees.forEach(el => {
        sum += el.salary
        if (el instanceof Manager) sum += el._totalSubSalary()

    })
    return sum
}
}
//
//  }}
module.exports = Manager
