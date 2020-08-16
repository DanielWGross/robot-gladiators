const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

const enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

const fight = () => {

    window.alert("Welcome to Robot Gladiators!");

    const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight.toLocaleLowerCase() === "fight") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);
        enemyHealth <= 0 ?
            window.alert(`${enemyName} has died!`) :
            window.alert(`${enemyName} still has ${enemyHealth} health left!`);

        playerHealth = playerHealth - enemyAttack;
        console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);
        playerHealth <= 0 ?
            window.alert(`${playerName} has died!`) :
            window.alert(`${playerName} still has ${playerHealth} health left!`);
    } else if (promptFight.toLocaleLowerCase() === "skip") {
        const confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

// fight();