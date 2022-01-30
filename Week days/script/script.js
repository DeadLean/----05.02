
const week = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let dateNow = new Date().getDay();

const ul = document.createElement('ul');

document.body.appendChild(ul);

    for(let i = 0; i < week.length; i++){
        let li = document.createElement('li');
        if(i == dateNow){
            li.style.fontWeight = 'bold';
        }
        else{
            li.style.fontStyle = 'italic';
        }
        li.textContent = week[i];
        ul.append(li);
    }