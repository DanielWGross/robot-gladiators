const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

const enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

// function to generate a random numeric value
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const fight = (enemyRobot) => {
  while (enemyHealth > 0 && playerHealth > 0) {
    const promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    if (promptFight.toLocaleLowerCase() === "skip") {
      const confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(`${playerName} has decided to skip this fight. Goodbye!`);
        playerMoney = Math.max(0, playerMoney - 10);
        break;
      } else {
        fight();
      }
    }

    // generate random damage value based on player's attack power
    const damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      `${playerName} attacked ${enemyRobot}. ${enemyRobot} now has ${enemyHealth} health remaining.`
    );
    if (enemyHealth <= 0) {
      window.alert(`${enemyRobot} has died!`);
      playerMoney = playerMoney + 20;
      break;
    }
    window.alert(`${enemyRobot} still has ${enemyHealth} health left!`);

    const damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
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

const shop = () => {
  // ask player what they'd like to do
  const shopOptionPrompt = window
    .prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )
    .toLocaleLowerCase();
  // use switch to carry out action
  switch (shopOptionPrompt) {
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");

        // increase health and decrease money
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        // increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You don't have enough money!");
      }

      break;
    case "leave":
      window.alert("Leaving the store.");

      // do nothing, so function will end
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      // call shop() again to force player to pick a valid option
      shop();
      break;
  }
};

const startGame = () => {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for (let index = 0; index < enemyNames.length; index++) {
    if (playerHealth > 0) {
      window.alert(`Welcome to Robot Gladiators! Round ${index + 1}`);
      enemyHealth = randomNumber(40, 60);
      if (playerHealth > 0 && index < enemyNames.length - 1) {
        // ask if user wants to use the store before next round
        const storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
      fight(enemyNames[index]);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

startGame();
