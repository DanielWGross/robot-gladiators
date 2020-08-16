const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

const enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack = 12;

const fight = () => {

    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // Prompt if they would like to FIGHT or SKIP this battle
    const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player choses to fight, then fight
    if (promptFight.toLocaleLowerCase() === "fight") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
        // check enemy's health
        enemyHealth <= 0 ?
            window.alert(`${enemyName} has died!`) :
            window.alert(`${enemyName} still has ${enemyHealth} health left!`);
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
        // check player's health
        playerHealth <= 0 ?
            window.alert(`${playerName} has died!`) :
            window.alert(`${playerName} still has ${playerHealth} health left!`);
        // if player choses to skip
    } else if (promptFight.toLocaleLowerCase() === "skip") {
        // confirm user wants to skip
        const confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

fight();