//caching the DOM
window.onload = function () {
    let userscore = 0;
    let compscore = 0;
    const userscore_span = document.getElementById('playerscore');
    const compscore_span = document.getElementById('compscore');
    const message = document.querySelector('.result > p');
    const r = document.getElementById('rock');
    const p = document.getElementById('paper');
    const s = document.getElementById('scissors');
    const reset = document.querySelector('.reset_btn');
    const scoreboard = document.querySelector('.scoreboard');
    const spandiv = document.getElementById('spanscore');

    //letter converter

    function letter_converter(letter) {
        if (letter === r) return 'rock';
        if (letter === p) return 'paper';
        if (letter === s) return 'scissors';
    }

    function scoreSize() {

        if (userscore > 99 || compscore > 99) {

            spandiv.classList.add('over100');
        } else {
            spandiv.classList.remove('over100');

        }

    }




    //adding color on the scoreboard 
    function addGlow() {
        scoreboard.classList.remove('dark', 'draw');
        scoreboard.classList.add('glow');
    }

    function addDark() {
        scoreboard.classList.remove('glow', 'draw');
        scoreboard.classList.add('dark');
    }

    function addDraw() {
        scoreboard.classList.remove('glow', 'draw');
        scoreboard.classList.add('draw');
    }


    //Getting the computer choice
    function compchoice() {

        const options = ['r', 'p', 's'];
        const random_num = Math.floor(Math.random() * 3);
        return options[random_num];
    }


    //This will run if player beats computer
    function win(user, comp) {
        userscore++;
        userscore_span.innerHTML = userscore;
        userchoice = letter_converter(user);

        message.innerHTML = 'gr8 u won...';

        addGlow();
    }

    //This will run if computer beats player
    function lose(user, comp) {
        compscore++;
        compscore_span.innerHTML = compscore;
        message.innerHTML = 'loser.....';

        addDark();
    }

    //this will run if player and computer have the same choice
    function draw(user, comp) {

        message.innerHTML = 'well lets move on... it is a draw';

        addDraw();

    }

    //this function will compare selection and depending on that comparison run either the win lose or draw function
    //it will also run the add color functions depending on what the result of the game was
    function game(user) {
        const comp = compchoice();

        switch (user + comp) {
            case 'rs':
            case 'sp':
            case 'pr':

                win(user, comp);
                break;
            case 'sr':
            case 'ps':
            case 'rp':

                lose(user, comp);
                break;
            case 'rr':
            case 'ss':
            case 'pp':

                draw(user, comp);
                break;


        }

        scoreSize();
    }

    //this will listen for input(selection) from the player and run the game function with the player selection as the argument
    function main() {
        r.addEventListener('click', function () {

            game('r');


        });

        p.addEventListener('click', function () {

            game('p');

        });

        s.addEventListener('click', function () {

            game('s');

        });

    }

    //this will reset the game
    function reset_game() {
        userscore = 0;
        compscore = 0;
        userscore_span.innerHTML = userscore;
        compscore_span.innerHTML = compscore;
        message.innerHTML = ('lets tango');

        spandiv.classList.remove('over100');

        scoreboard.classList.remove('draw', 'dark', 'glow');
    }


    //this will listen to the reset button and if it is clicked it will rum the reset_game function
    reset.addEventListener('click', function () {

        reset_game();

    });

    main();
};