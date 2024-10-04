const today = new Date();
const currentHour = today.getHours();
let message = "Hello";
// if it's morning, show "Good morning" message
if (currentHour <= 12) {
    message = "Good morning, beautiful world!";
    } else if (currentHour > 12 && currentHour <= 17){
        message = "Hello Beautiful world!";
    } else if (currentHour > 17){
        message = "Good Evening!";
    }
    const handleClick = () => {
        alert(message);
    }
//if it's midday, show "Hello" message
// if it's evening, show "Good evening" message