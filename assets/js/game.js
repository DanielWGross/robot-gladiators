// function to generate a random numeric value
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function to set name
const getPlayerName = () => {
  let name = "";

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  // ***************************************
  // ADD LOOP HERE WITH PROMPT AND CONDITION
  // ***************************************

  console.log(`Your robot's name is ${name}`);
  return name;
};

const playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function () {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function () {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function () {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } else {
      window.alert("You don't have enough money!");
    }
  },
};

const enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14),
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14),
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14),
  },
];

const fight = (enemy) => {
  while (enemy.health > 0 && playerInfo.health > 0) {
    const promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );

    if (promptFight.toLocaleLowerCase() === "skip") {
      const confirmSkip = window.confirm("Are you sure you'd like to quit?");

      if (confirmSkip) {
        window.alert(
          `${playerInfo.name} has decided to skip this fight. Goodbye!`
        );
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        break;
      } else {
        fight();
      }
    }

    enemy.health = Math.max(
      0,
      enemy.health - randomNumber(playerInfo.attack - 3, playerInfo.attack)
    );
    console.log(
      `${playerInfo.name} attacked ${enemy.name}. ${enemy.name} now has ${enemy.health} health remaining.`
    );
    if (enemy.health <= 0) {
      window.alert(`${enemy.name} has died!`);
      playerInfo.money = playerInfo.money + 20;
      break;
    }
    window.alert(`${enemy.name} still has ${enemy.health} health left!`);

    playerInfo.health = Math.max(
      0,
      playerInfo.health - randomNumber(enemy.attack - 3, enemy.attack)
    );
    console.log(
      `${enemy.name} attacked ${playerInfo.name}. ${playerInfo.name} now has ${playerInfo.health} health remaining.`
    );
    if (playerInfo.health <= 0) {
      window.alert(`${playerInfo.name} has died!`);
      break;
    }
    window.alert(
      `${playerInfo.name} still has ${playerInfo.health} health left!`
    );
  }
};

const endGame = () => {
  // if player is still alive, player wins!
  if (playerInfo.health > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerInfo.money +
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
      playerInfo.refillHealth();
      break;
    case "upgrade":
      playerInfo.upgradeAttack();
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
  playerInfo.reset();

  for (let index = 0; index < enemyInfo.length; index++) {
    if (playerInfo.health > 0) {
      window.alert(`Welcome to Robot Gladiators! Round ${index + 1}`);
      const pickedEnemyObj = enemyInfo[index];
      pickedEnemyObj.health = randomNumber(40, 60);
      if (playerInfo.health > 0 && index < enemyInfo.length) {
        // ask if user wants to use the store before next round
        const storeConfirm = window.confirm(
          "The fight is over, visit the store before the next round?"
        );

        // if yes, take them to the store() function
        if (storeConfirm) {
          shop();
        }
      }
      fight(pickedEnemyObj);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  endGame();
};

startGame();
