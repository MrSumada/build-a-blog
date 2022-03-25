// Formats time and Date for Blog Posts and Comments

module.exports = {
    format_date: date => {

        const hour24 = new Date(date).getHours();
        let hour;
        let amPm = "am";

        // set 1:00 - 11:00 pm hours
        if (hour24 > 12) {
            hour = hour24 - 12;
            amPm = "pm";
        // set 12:00 pm hour
        } else if (hour24 === 12) {
            hour = hour24;
            amPm = "pm"
        // set 12:00 am hour
        } else if (hour24 === 0){
            hour = 12;
        // set 1:00 - 11:00 am hours
        } else {
            hour = hour24;
        }

        const minutes60 = new Date(date).getMinutes();
        let minutes;

        // set 00 - 09 minutes
        if (minutes60 < 10) {
            minutes = "0" + minutes60;
        } else {
        // set 10 - 59 minutes 
            minutes = minutes60
        }

        return `Posted at ${hour}:${minutes} ${amPm} on ${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
}