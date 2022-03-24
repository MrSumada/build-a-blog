module.exports = {
    format_date: date => {

        const hour24 = new Date(date).getHours();
        let hour;
        let amPm = "am";

        if (hour24 > 12) {
            hour = hour24 - 12;
            amPm = "pm";
        } else if (hour24 === 12) {
            hour = hour24;
            amPm = "pm"
        } else if (hour24 === 0){
            hour = 12;
        } else {
            hour = hour24;
        }

        const minutes60 = new Date(date).getMinutes();
        let minutes;

        if (minutes60 < 10) {
            minutes = "0" + minutes60;
        } else {
            minutes = minutes60
        }

        return `Posted at ${hour}:${minutes} ${amPm} on ${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
            date
        ).getFullYear()}`;
    },
}