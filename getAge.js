class Person {
    getAge(age) {
        let countDownDate = new Date(age)
        countDownDate = countDownDate.getFullYear()

        if (Number.isNaN(countDownDate)) {
            return false
        } else {
            // Get todays date and time
            let now = new Date().getFullYear()
            let year = Math.floor(now - countDownDate)
            return year
        }
    }
}
module.exports = new Person()