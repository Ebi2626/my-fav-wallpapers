export function getTime() {
    let time = new Date();
    let hour = time.getHours();
    if (hour < 5 || hour > 18) {
        return "night";
    } else if (hour >= 5 && hour < 11) {
        return "moringn";
    } else if (hour >= 11 && hour < 15) {
        return "midday";
    } else {
        return "afternoon";
    }
  }
 export function getSeason() {
    let time = new Date();
    let month = time.getMonth();
    if (month < 3 || month === 12) {
        return "winter";
    } else if (month < 6) {
        return "spring";
    } else if (month < 9) {
        return "summer";
    } else if (month < 12) {
        return "autumn"
    } else {
        return "winter";
    }
  }
  