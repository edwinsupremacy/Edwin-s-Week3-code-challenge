//got stuck using fetch hence used this long approach which works perfectly
let ul = document.getElementById("films")

let movie1 = document.createElement('li');
movie1.textContent = 'The Giant Gila Monster';
// let remainingTicket= 44;
   movie1.addEventListener('click', function () {
    
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='108 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='4.00 PM';

  ticket1=27
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket1}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket1>0){
         ticket1--
         ticketNum.textContent= `${ticket1}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});   

 ul.appendChild(movie1);

let movie2 = document.createElement('li');
movie2.textContent = 'Manos: The Hands Of Fate';
movie2.addEventListener('click', function () {

    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie2.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='118 minutes';

    let showTime = document.getElementById('showtime');
    showTime.textContent='06:45PM';

    ticket2=44
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket1}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket1>0){
         ticket1--
         ticketNum.textContent= `${ticket1}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie2);

let movie3 = document.createElement('li');
movie3.textContent = 'Time Chasers';
movie3.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='93 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='09.30 PM'

    ticket3=31;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket3}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket3>0){
         ticket3--
         ticketNum.textContent= `${ticket3}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie3);

let movie4 = document.createElement('li');
movie4.textContent = 'The Touch Of Satan';
movie4.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/43468/p43468_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A young man meets a farm girl who is actually a witch.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='101 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='09.00 PM'

    ticket4=31;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket4}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket4>0){
         ticket4--
         ticketNum.textContent= `${ticket4}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie4);

let movie5 = document.createElement('li');
movie5.textContent = 'Santa Claus Conquers The Martians';
movie5.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/4232/p4232_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'The Martians kidnap Santa Claus because there is nobody on Mars to give their children presents';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='96 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='03.30 PM'

    ticket5=45;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket5}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket5>0){
         ticket5--
         ticketNum.textContent= `${ticket5}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie5);

let movie6 = document.createElement('li');
movie6.textContent = 'Track Of The Moon Beast';
movie6.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/39804/p39804_v_v8_ab.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A young man is transformed into a hideous "moon beast" due to a meteor fragment lodged in his body.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='112 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='10.30 PM'

    ticket6=16;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket6}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket6>0){
         ticket6--
         ticketNum.textContent= `${ticket6}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie6);

let movie7 = document.createElement('li');
movie7.textContent = 'The Skydivers';
movie7.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/40518/p40518_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A woman seeks revenge on her former lover, who owns a skydiving business.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='94 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='7.30 PM'

    ticket7=22;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket7}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket7>0){
         ticket7--
         ticketNum.textContent= `${ticket7}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie7);

let movie8 = document.createElement('li');
movie8.textContent = 'The Killer Shrews';
movie8.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'On an isolated island, a small group of people are terrorized by giant voracious shrews in the midst of a hurricane.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='115 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='08.30 PM'

    ticket8=32;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket8}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket8>0){
         ticket8--
         ticketNum.textContent= `${ticket8}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie8);

let movie9 = document.createElement('li');
movie9.textContent = 'Project Moon Base';
movie9.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/46755/p46755_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A saboteur posing as a scientist strives to destroy the world`s first space station.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='99 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='07.30 PM';

    ticket9=22
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket9}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket9>0){
         ticket9--
         ticketNum.textContent= `${ticket9}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie9);

let movie10 = document.createElement('li');
movie10.textContent = 'The Giant Spider Invasion';
movie10.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/42171/p42171_v_v8_ab.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'Giant spiders from another dimension invade Wisconsin.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='122 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='10.00 PM';

    ticket10=44;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket10}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket10>0){
         ticket10--
         ticketNum.textContent= `${ticket10}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie10);

let movie11 = document.createElement('li');
movie11.textContent = 'Catalina Caper';
movie11.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/58122/p58122_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A group of swingin teens take time out from having fun in the sun to try to foil a group of crooks searching for a stolen scroll.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='104 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='06.00 PM';

    ticket11=12;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket11}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket11>0){
         ticket11--
         ticketNum.textContent= `${ticket11}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie11);

let movie12 = document.createElement('li');
movie12.textContent = 'Secret Agent Super Dragon';
movie12.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/93417/p93417_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A series of murders in Michigan lead an American secret agent to Amsterdam, where he uncovers a plot to imperil the world with a potent new drug.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='104 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='07.00 PM';

    ticket12=20;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket12}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket12>0){
         ticket12--
         ticketNum.textContent= `${ticket12}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie12);

let movie13 = document.createElement('li');
movie13.textContent = 'Wild Rebels';
movie13.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/45367/p45367_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'A stock car driver goes undercover as the wheel man for a motorcycle gang';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='100 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='09.00 PM';

    ticket13=31;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket13}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket13>0){
         ticket13--
         ticketNum.textContent= `${ticket13}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie13);

let movie14 = document.createElement('li');
movie14.textContent = 'Danger: Diabolik';
movie14.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/11850/p11850_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'International man of mystery Diabolik and his lover pull off heist after heist, all while European cops led by Inspector Ginko and envious mobsters led by Ralph Valmont are closing in on them.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='111 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='08.00 PM';

    ticket14=40;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket14}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket14>0){
         ticket14--
         ticketNum.textContent= `${ticket14}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie14);

let movie15 = document.createElement('li');
movie15.textContent = 'Village Of The Giants';
movie15.addEventListener('click', function () {
    let image = document.getElementById('poster');
    image.src = "https://www.gstatic.com/tv/thumb/v22vodart/37991/p37991_v_v8_aa.jpg";

    let description = document.getElementById('film-info')
    description.textContent = 'Delinquent teen-agers ingest a substance and grow thirty feet tall, then proceed to take over a small town.';
     
    let movieTitle=document.getElementById('title');
    movieTitle.textContent=movie1.textContent;

    let runTime = document.getElementById('runtime')
    runTime.textContent='98 minutes';

    let showTime = document.getElementById('showtime')
    showTime.textContent='04.45 PM';

    ticket15=33;
     let buyTicket =document.getElementById('buy-ticket');
     let ticketNum =document.getElementById('ticket-num');
        ticketNum.textContent= `${ticket15}remaining tickets`;
    buyTicket.addEventListener('click',function(){
       
        if(ticket15>0){
         ticket15--
         ticketNum.textContent= `${ticket15}remaining ticket`;

        }
        else { ticketNum.textContent= 'Sold out'; }
        })
});
ul.appendChild(movie15);

// const movieTitle=document.getElementById("movie-items");
// const getTitles=function(){
//     fetch("http://localhost:3000/")
//     .then(res=>res.json())
//     .then(movies=>{
//         console.log(movies);
//         movies.forEach(movie => {
//             const titleElement= document.createElement('div');
//             titleElement.textContent=movie.title;
//             movieTitle.appendChild(titleElement);
//         });
            
//         })
//     .catch(error => {
//         console.error('Error fetching data:',error);
//     });
// }
// getTitles()

