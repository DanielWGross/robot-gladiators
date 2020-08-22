const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

const enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

const fight = (enemyRobot) => {
  while (enemyHealth > 0 && playerHealth > 0) {
    const promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    if (promptFight.toLocaleLowerCase() === "skip") {
      const confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        playerMoney = playerMoney - 10;
        break;
      } else {
        fight();
      }
    }

    enemyHealth = enemyHealth - playerAttack;
    console.log(
      `${playerName} attacked ${enemyRobot}. ${enemyRobot} now has ${enemyHealth} health remaining.`
    );
    if (enemyHealth <= 0) {
      window.alert(`${enemyRobot} has died!`);
      playerMoney = playerMoney + 20;
      break;
    }
    window.alert(`${enemyRobot} still has ${enemyHealth} health left!`);

    playerHealth = playerHealth - enemyAttack;
    console.log(
      `${enemyRobot} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`
    );
    if (playerHealth <= 0) {
      window.alert(`${playerName} has died!`);
      break;
    }
    window.alert(`${playerName} still has ${playerHealth} health left!`);
  }
};

const startGame = () => {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (let index = 0; index < enemyNames.length; index++) {
    if (playerHealth > 0) {
      window.alert(`Welcome to Robot Gladiators! Round ${index + 1}`);
      enemyHealth = 50;
      fight(enemyNames[index]);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

const endGame = () => {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  const playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame();
