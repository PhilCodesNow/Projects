
////////// create our hero choices
class wizards{
    constructor(name, health, staffAttack){
        this.name = name;
        this.health = health;
        this.staffAttack = staffAttack;
    }
    attack = (enemy)=>{
        console.log(`${this.name}: I am attacking you, ${enemy.name}`)
        enemy.health = enemy.health - this.staffAttack;
        console.log(`${enemy.name}: AHHHHH my health went from ${enemy.health + this.staffAttack} to ${enemy.health}`)
    }
}
class evilWizards{
    constructor(name, health, staffAttack){
        this.name = name;
        this.health = health;
        this.staffAttack = staffAttack;
    }
    attack = (enemy)=>{
        console.log(`${this.name}: I am attacking you, ${enemy.name}`)
        enemy.health = enemy.health - this.staffAttack;
        console.log(`${enemy.name}: AHHHHH my health went from ${enemy.health + this.staffAttack} to ${enemy.health}`)
    }
}

let alatar = new wizards('Alatar', 1100, 3);
let ganandor = new wizards('Ganandor', 15, 5);
let radagast = new wizards('Radagast', 18, 4);


let drakius = new evilWizards('Drakius', 15, 3);
let vatrix = new evilWizards('Vatrix', 20, 4);
let ador = new evilWizards('Ador', 25, 6);

let baddies = [drakius, vatrix, ador];





////////// SET QUESTION OBJECT with easy array of question arrays, medium, and hard. note different sizes of the key's arrays, will have to specify when we make random number wether the mode is easy, med, hard

const questions = {easy: [
["What's 1 x 1?" , "What's 1 x 2?", "What's 1 x 3?", "What's 1 x 4","What's 1 x 5?", "What's 1 x 6?", "What's 1 x 7?", "What's 1 x 8?","What's 1 x 9?", "What's 1 x 10?"],
["What's 2 x 1?" , "What's 2 x 2?", "What's 2 x 3?", "What's 2 x 4", "What's 2 x 5?", "What's 2 x 6?", "What's 2 x 7?", "What's 2 x 8?", "What's 2 x 9?", "What's 2 x 10?"],
["What's 3 x 1?" , "What's 3 x 2?", "What's 3 x 3?", "What's 3 x 4", "What's 3 x 5?", "What's 3 x 6?", "What's 3 x 7?", "What's 3 x 8?", "What's 3 x 9?", "What's 3 x 10?"],
["What's 4 x 1?" , "What's 4 x 2?", "What's 4 x 3?", "What's 4 x 4", "What's 4 x 5?", "What's 4 x 6?", "What's 4 x 7?", "What's 4 x 8?", "What's 4 x 9?", "What's 4 x 10?"],
["What's 5 x 1?" , "What's 5 x 2?", "What's 5 x 3?", "What's 5 x 4", "What's 5 x 5?", "What's 5 x 6?", "What's 5 x 7?", "What's 5 x 8?", "What's 5 x 9?", "What's 5 x 10?"],
], 
medium: [
["What's 1 x 1?" , "What's 1 x 2?", "What's 1 x 3?", "What's 1 x 4", "What's 1 x 5?", "What's 1 x 6?", "What's 1 x 7?", "What's 1 x 8?", "What's 1 x 9?", "What's 1 x 10?"],
["What's 2 x 1?" , "What's 2 x 2?", "What's 2 x 3?", "What's 2 x 4","What's 2 x 5?", "What's 2 x 6?", "What's 2 x 7?", "What's 2 x 8?","What's 2 x 9?", "What's 2 x 10?"],
["What's 3 x 1?" , "What's 3 x 2?", "What's 3 x 3?", "What's 3 x 4","What's 3 x 5?", "What's 3 x 6?", "What's 3 x 7?", "What's 3 x 8?","What's 3 x 9?", "What's 3 x 10?"],
["What's 4 x 1?" , "What's 4 x 2?", "What's 4 x 3?", "What's 4 x 4","What's 4 x 5?", "What's 4 x 6?", "What's 4 x 7?", "What's 4 x 8?","What's 4 x 9?", "What's 4 x 10?"],
["What's 5 x 1?" , "What's 5 x 2?", "What's 5 x 3?", "What's 5 x 4","What's 5 x 5?", "What's 5 x 6?", "What's 5 x 7?", "What's 5 x 8?","What's 5 x 9?", "What's 5 x 10?"],
["What's 6 x 1?" , "What's 6 x 2?", "What's 6 x 3?", "What's 6 x 4", "What's 6 x 5?", "What's 6 x 6?", "What's 6 x 7?", "What's 6 x 8?", "What's 6 x 9?", "What's 6 x 10?"],
["What's 7 x 1?" , "What's 7 x 2?", "What's 7 x 3?", "What's 7 x 4","What's 7 x 5?", "What's 7 x 6?", "What's 7 x 7?", "What's 7 x 8?","What's 7 x 9?", "What's 7 x 10?"],
["What's 8 x 1?" , "What's 8 x 2?", "What's 8 x 3?", "What's 8 x 4","What's 8 x 5?", "What's 8 x 6?", "What's 8 x 7?", "What's 8 x 8?","What's 8 x 9?", "What's 8 x 10?"],
["What's 9 x 1?" , "What's 9 x 2?", "What's 9 x 3?", "What's 9 x 4","What's 9 x 5?", "What's 9 x 6?", "What's 9 x 7?", "What's 9 x 8?","What's 9 x 9?", "What's 9 x 10?"],
["What's 10 x 1?" , "What's 10 x 2?", "What's 10 x 3?", "What's 10 x 4","What's 10 x 5?", "What's 10 x 6?", "What's 10 x 7?", "What's 10 x 8?","What's 10 x 9?", "What's 10 x 10?"]
], 
hard: [
["What's 1 x 1?" , "What's 1 x 2?", "What's 1 x 3?", "What's 1 x 4","What's 1 x 5?", "What's 1 x 6?", "What's 1 x 7?", "What's 1 x 8?","What's 1 x 9?", "What's 1 x 10?", "What's 1 x 11?", "What's 1 x 12?"],
["What's 2 x 1?" , "What's 2 x 2?", "What's 2 x 3?", "What's 2 x 4", "What's 2 x 5?", "What's 2 x 6?", "What's 2 x 7?", "What's 2 x 8?", "What's 2 x 9?", "What's 2 x 10?", "What's 2 x 11?", "What's 2 x 12?"],
["What's 3 x 1?" , "What's 3 x 2?", "What's 3 x 3?", "What's 3 x 4", "What's 3 x 5?", "What's 3 x 6?", "What's 3 x 7?", "What's 3 x 8?", "What's 3 x 9?", "What's 3 x 10?", "What's 3 x 11?", "What's 3 x 12?"],
["What's 4 x 1?" , "What's 4 x 2?", "What's 4 x 3?", "What's 4 x 4", "What's 4 x 5?", "What's 4 x 6?", "What's 4 x 7?", "What's 4 x 8?", "What's 4 x 9?", "What's 4 x 10?", "What's 4 x 11?", "What's 4 x 12?"],
["What's 5 x 1?" , "What's 5 x 2?", "What's 5 x 3?", "What's 5 x 4", "What's 5 x 5?", "What's 5 x 6?", "What's 5 x 7?", "What's 5 x 8?", "What's 5 x 9?", "What's 5 x 10?", "What's 5 x 11?", "What's 5 x 12?"],
["What's 6 x 1?" , "What's 6 x 2?", "What's 6 x 3?", "What's 6 x 4","What's 6 x 5?", "What's 6 x 6?", "What's 6 x 7?", "What's 6 x 8?","What's 6 x 9?", "What's 6 x 10?", "What's 6 x 11?", "What's 6 x 12?"],
["What's 7 x 1?" , "What's 7 x 2?", "What's 7 x 3?", "What's 7 x 4", "What's 7 x 5?", "What's 7 x 6?", "What's 7 x 7?", "What's 7 x 8?", "What's 7 x 9?", "What's 7 x 10?", "What's 7 x 11?", "What's 7 x 12?"],
["What's 8 x 1?" , "What's 8 x 2?", "What's 8 x 3?", "What's 8 x 4", "What's 8 x 5?", "What's 8 x 6?", "What's 8 x 7?", "What's 8 x 8?", "What's 8 x 9?", "What's 8 x 10?", "What's 8 x 11?", "What's 8 x 12?"],
["What's 9 x 1?" , "What's 9 x 2?", "What's 9 x 3?", "What's 9 x 4", "What's 9 x 5?", "What's 9 x 6?", "What's 9 x 7?", "What's 9 x 8?", "What's 9 x 9?", "What's 9 x 10?", "What's 9 x 11?", "What's 9 x 12?"],
["What's 10 x 1?" , "What's 10 x 2?", "What's 10 x 3?", "What's 10 x4","What's 10 x 5?", "What's 10 x 6?", "What's 10 x 7?", "What's 10x 8?","What's 10 x 9?", "What's 10 x 10?", "What's 10 x 11?", "What's 10 x 12?"], 
["What's 11 x 1?" , "What's 11 x 2?", "What's 11 x 3?", "What's 11 x4","What's 11 x 5?", "What's 11 x 6?", "What's 11 x 7?", "What's 11 x 8?","What's 11 x 9?", "What's 11 x 10?", "What's 11 x 11?", "What's 11 x 12?"],
["What's 12 x 1?" , "What's 12 x 2?", "What's 12 x 3?", "What's 12 x4","What's 12 x 5?", "What's 12 x 6?", "What's 12 x 7?", "What's 12 x 8?","What's 12 x 9?", "What's 12 x 10?", "What's 12 x 11?", "What's 12 x 12?"]
]};


///////////// answers object
const answers = {easy: [
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 
[3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 
[4, 8, 12, 16, 20, 24, 28, 32, 36, 40], 
[5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 

], 
medium: [
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 
[3, 6, 9, 12, 15, 18, 21, 24, 27, 30], 
[4, 8, 12, 16, 20, 24, 28, 32, 36, 40], 
[5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
[6, 12, 18, 24, 30, 36, 42, 48, 54, 60], 
[7, 14, 21, 28, 35, 42, 49, 56, 63, 70], 
[8, 16, 24, 32, 40, 48, 56, 64, 72, 80], 
[9, 18, 27, 36, 45, 54, 63, 72, 81, 90], 
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
],
hard: [
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24], 
[3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36], 
[4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48], 
[5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
[6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72], 
[7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84], 
[8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 94], 
[9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108], 
[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120], 
[11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121, 132],
[12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144]
]}




/////// set userWizard and userQuestions


// const wizardSelectFunction = (choice)=>{
//     if(choice == 'radagast'){
//         var userWizard = radagast;
//         console.log(userWizard);
//         return userWizard;
//     }else if(choice == 'ganandor'){
//         var userWizard = ganandor;
//         console.log(userWizard);
//         return userWizard;
//     }else if(choice == 'alatar'){
//         var userWizard = alatar;
//         console.log(userWizard);
//         return userWizard;
//     }else{
//         console.log('no wizard selected')
//     }
// }
// const questionModeSelectFunction = (choice)=>{
//     if(choice == 'easy'){
//         var questionMode = 'easy';
//     }else if(choice == 'medium'){
//         var questionMode = 'medium';
//     }else if(choice == 'hard'){
//         var questionMode = 'hard';
//     }
//     console.log(questionMode)
// }



let userWizard = alatar;
let userQuestions = questions.easy;
let userAnswers = answers.easy;
let gameMode = 'easy';
///////// V these tell random numbers how high to go depending on array
let arrayNum = 0
let questionNum = 0;

////////// choose gamemode and choose wizard functions for option button onclicks
$('.modeOptions').on('click', (event)=>{
    thisMode = event.target.value;
    if(thisMode == 'easy'){
        userQuestions = questions.easy;
        userAnswers = answers.easy;
        gameMode = 'easy';
        arrayNum = 5;
        questionNum = 10;
    }else if(thisMode == 'medium'){
        userQuestions = questions.medium;
        userAnswers = answers.medium;
        gameMode = 'medium';
        arrayNum = 10;
        questionNum = 10;
    }else if(thisMode == 'hard'){
        userQuestions = questions.hard;
        userAnswers = answers.hard;
        gameMode = 'hard';
        arrayNum = 12;
        questionNum = 12;
    }else{
        console.log('modeoptions on click aint workin')
    }
});


//////////// random numbers for question and answer array
let randomQuestionArray = Math.floor(Math.random() * arrayNum)

let randomQuestion = Math.floor(Math.random() * questionNum)



$('.wizardOptions').on('click', (event)=>{
    thisWiz = event.target.value;
    if(thisWiz == 'alatar'){
        userWizard = alatar;
    }else if(thisWiz == 'ganandor'){
        userWizard = ganandor;
    }else if(thisWiz == 'radagast'){
        userWizard = radagast;
    }else{
        console.log('wizard options aint working');
    }
   
    console.log(userWizard);
})
//////// options buttons for wizards and game mode



////////////////////////////////////////////////////////
////////////// start page code
////////////////////////////////////////////////

/////// instructions open button
$('.mainInstructionsBtn').on('click', ()=>{
    $('.instructions').toggle('.instructionsShow');
})

///// close button for instructions
$('.instructionsClose').on('click', ()=>{
    $('.instructions').toggle('.instructionsShow');
})

////// options open button
$('.mainOptionsBtn').on('click', ()=>{
    $('.options').toggle('.optionsShow');
})

///// options close button
$('.optionsCloseBtn').on('click', ()=>{
    $('.options').toggle('.optsionsShow');
})

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////// Wizard Hut page code

////// toggles start game on off
$('.mainStartBtn').on('click', ()=>{
    $('.hut').toggle('hutShow');
    userChoice();
})

$('.hutBackBtn').on('click', ()=>{
    $('.hut').toggle('hutShow');
})


const userChoice=()=>{
    $('.hutHudWizard').children().remove();
    $('.hutHudMode').children().remove();
    const $wizChoice = $('<p>').text(`${userWizard.name}`);
    const $modeChoice = $('<p>').text(`${gameMode}`)
    $('.hutHudWizard').append($wizChoice);
    $('.hutHudMode').append($modeChoice);
    showBaddies();
}

const showBaddies = () =>{
    $('.hutBaddies').children().remove();
    let $baddies = $('<p>').text(`${baddies[0].name}`)
    $('.hutBaddies').append($baddies);

    for(let i = 1; i < baddies.length; i++){
        $baddies = $('<p>').text(`${baddies[i].name}`)
        $('.hutBaddies').append($baddies);

    }
}






////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////// battle page code

$('.hutBattleBtn').on('click', ()=>{
    $('.battle').toggle('.battleShow');
})
$('.battleRetreatBtn').on('click', ()=>{
    $('.battle').toggle('.battleShow');
})




/////////////// win function
const youWin = () =>{
    console.log('you win');
    $('.youWin').toggle('.youWinShow');
}
/////////////// lose function
const youLose = () =>{
    // console.log('you lose');
    $('.loss').toggle('lossShow');
    $('.lossBtn').on('click', ()=>{
        console.log('restart clicked');
        location.reload();
    })
}

/////////////// won battle, back to hut btn
const killedEnemy = ()=>{
    $('.killedEnemyH2').children().remove();
    $('.killedEnemy').toggle('.killedEnemyShow');
    const $killed = $('<p>').text(`You've destroyed ${baddies[0].name}`)
    $('.killedEnemyH2').append($killed);
    baddies.shift();
    if(baddies < 1){
        youWin();
    }
    showBaddies();
}

$('.killedEnemyBtn').on('click', ()=>{
    $('.killedEnemy').toggle('.killedEnemyShow');
    $('.battle').toggle('.battleShow');
})







///////////// battle function

const battle = ()=>{
    let heroLives = true;
    let baddieLives = true;
    let heroTurn = true;


    while(heroLives == true && baddieLives == true){
        if(heroTurn == true){
            let randomA = randomQuestionArray;
            let randomQ = randomQuestion;
            let question = prompt(userQuestions[randomA][randomQ]);
            if(question == userAnswers[randomA][randomQ]){
                heroTurn = false;
                userWizard.attack(baddies[0]);
                if(baddies[0].health < 1){
                    killedEnemy();
                    console.log(baddies);
                    baddieLives = false;
                }else{
                    heroTurn = false;
                }
            }
            
        }else if(heroTurn == false){
            baddies[0].attack(userWizard);
            heroTurn = true;
            if(userWizard.health < 1){
                heroLives = false;
                youLose();
            }
        }
    }
}




















// const setUserWizard=(wizard)=>{
//     $('.hutWizard').html(`<h1>Wizard: ${wizard}</h1>`);

// }
// const setuserQuestions = (mode)=>{
//     $('.hutGameMode').html(`<h1>Game Mode: ${mode}`);

// }
// const startGame=(wiz, mode)=>{
//     console.log(wiz)
//     console.log(mode)
//     $('.hutGameMode').html(`<h1>Game Mode: ${questionMode}`);
//     $('.hutWizard').html(`<h1>Wizard: ${userWizard.name}</h1>`);


// }

// const setUserWizard=(wizard)=>{
//     $('footer').html(`<h1>Wizard: ${wizard}</h1>`);

// }
// const setuserQuestions = (mode)=>{
//     $('footer').html(`<h1>Game Mode: ${mode}`);

// }






///////////// if else determines numbers for random number lets, which is needed due to different easy, med, hard array lengths
// let questionNum;
// let arrayNum;
// if(questionMode == 'easy'){
//     // console.log('easy')
//     questionNum = 10;
//     arrayNum = 5;
// }else if(questionMode == 'medium'){
//     // console.log('medium')
//     questionNum = 10;
//     arrayNum = 10;
// }else if(questionMode == 'hard'){
//     // console.log('hard')
//     questionNum = 12;
//     arrayNum = 12;
// }







// console.log(questionMode[randomQuestionArray][randomQuestion]);
// console.log(answerMode[randomQuestionArray][randomQuestion])




