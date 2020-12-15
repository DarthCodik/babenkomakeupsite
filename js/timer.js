
// PRO

let visazhist = document.getElementById('visazhist-timer');
let creative = document.getElementById('creative-timer');
let browmaker = document.getElementById('browmaker-timer');

// Mini

let formeBase = document.getElementById('forme-base-timer');
let formeMini = document.getElementById('forme-mini-timer');

// Master-classes

let ukladki = document.getElementById('ukladki-timer');
let fresh = document.getElementById('fresh-timer');
let teenage = document.getElementById('teenage-timer');
let lifting = document.getElementById('lifting-timer');
let party = document.getElementById('party-timer');
let strelki = document.getElementById('strelki-timer');
let smoky = document.getElementById('smoky-timer');



// Timer

function Timer (id, day, month, year, hour, minute, setted = true) {
  if (id != null) {
    this.isSetted = setted;

    this.id = id;
    this.day = day;
    this.month = month;
    this.year = year;
    this.hour = hour;
    this.minute = minute;

    this.setTimer = () =>{
      this.isSetted = true;

      let time = new Date(this.year, this.month-1, this.day, this.hour, this.minute);

      let today = new Date().getTime();

      let diff = time.getTime() - today;

      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);


      if (minute == 0) {this.minute = '00'};

      id.innerHTML = "> Ближайший курс будет:  " + this.day+'.'+ this.month +'.'+this.year + " в "+this.hour+":"+this.minute + "</br>\
        <div class=\"time-in\"><div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>дней</div> \
    <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>часов</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>минут</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>секунд</div> \
    </div></div>";

      let time_setted;

      if (diff <= 0 && this.isSetted != false) {
        this.isSetted = false;
        this.id.innerHTML = '> Дату и время уточняйте по телефону';
        clearTimeout(time_setted);
      }else{
        time_setted = setTimeout(function(){
          new Timer(id, day, month, year, hour, minute, setted = false).setTimer();
        }, 1000);
      }

    }
  };
  
}

let buttons = document.getElementsByTagName('button');
let timer = document.getElementsByClassName('timer');


function timerSet (id, day, month, year, hour = 0, minute = 0) {

  for (var i = 1; i < timer.length; i++) {
    if (timer[i-1] === id) {
      let cour_time = new Timer(id, day, month, year, hour, minute);
      cour_time.setTimer();
      if (cour_time.isSetted == true) {
        buttons[i].className = 'formBot';
        buttons[i].innerHTML = 'Записаться';
      };
      if (cour_time.isSetted == false) {
        buttons[i].className = 'muteBot';
        buttons[i].innerHTML = 'Пока нет записи';
        id = null;
      };
    }
  };

}



timerSet(browmaker, 1, 12, 2020, 10);

timerSet(fresh, 1, 11, 2020, 10);

timerSet(party, 13, 12, 2020, 12);
timerSet(strelki, 6, 12, 2020, 12);






