function clockTimer(){
    let date = new Date()

    let time = [date.getHours(), date.getMinutes(), date.getSeconds()]

    if(time[0] < 10){
        time[0] = "0" + time[0];
    };
    if(time[1] < 10){
        time[1] = "0" + time[1];
    };
    if(time[2] < 10){
        time[2] = "0" + time[2];
    };

    let current_time = time[0] + ":" + time[1] + ":" + time[2];


    let today = [date.getDate(), date.getMonth()+1, date.getFullYear()];

    if(today[0] < 10){
        today[0] = "0" + today[0];
    };
    if(today[1] < 10){
        today[1] = "0" + today[1];
    };
    if(today[2] < 10){
        today[2] = "0" + today[2];
    };
    let current_today = document.getElementById("clockAndToday");
    current_today.innerHTML = today + " - " + current_time



    setTimeout("clockTimer()", 1000)
}
clockTimer();

function fullClockTimer(){
    let date = new Date()

    
    let dayOfWeek = date.getDay();
    let daysOfWeek = ["Понедельник", "Вторник", "Среда","Четверг","Пятница","Суббота", "Воскресенье"];
    let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    let today = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(dayOfWeek)
    if(dayOfWeek == 0){
        dayOfWeek = daysOfWeek[daysOfWeek.length-1]
    }
    if(dayOfWeek == 1){
        dayOfWeek = daysOfWeek[0]
    }
    if(dayOfWeek == 2){
        dayOfWeek = daysOfWeek[1]
    }
    if(dayOfWeek == 3){
        dayOfWeek = daysOfWeek[2]
    }
    if(dayOfWeek == 4){
        dayOfWeek = daysOfWeek[3]
    }
    if(dayOfWeek == 5){
        dayOfWeek = daysOfWeek[4]
    }
    if(dayOfWeek == 6){
        dayOfWeek = daysOfWeek[5]
    }
    for(let i = 0; i< months.length; i++){
        if(month == i+1){
            month = months[i]
        };
    }



    let current_today = "Сегодня, " + dayOfWeek + " " + today + " " + month + " " + year + " года, " + hours + " часов " + minutes + " минут " + seconds + " секунд";
    let fullTimer = document.getElementById("fullTimer");
    fullTimer.innerHTML = current_today
}
fullClockTimer()

