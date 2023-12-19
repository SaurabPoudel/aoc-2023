import fs from "fs";

const input = fs.readFileSync("./src/day02/input.txt", "utf8");
enum Balls {
  Red = 12,
  Green = 13,
  Blue = 14,
}
const lines = input.split("\n");
export const day02 = () => {
  let gameIdSum = 0;

  lines.forEach((line) => {
    let flagR = 0;
    let flagG = 0;
    let flagB = 0;
    const [game, balls] = line.split(":");
    if (game === undefined) {
      return;
    }
    const [_, gameId] = game.split(" ");
    if (gameId === undefined) {
      return;
    }
    const trials = balls.split(";");
    if (trials === undefined) {
      return;
    }
    const redBalls = trials.map((trial) =>
      trial.split(",").filter((ball) => ball.search("red") !== -1),
    );
    const greenBalls = trials.map((trial) =>
      trial.split(",").filter((ball) => ball.search("green") !== -1),
    );
    const blueBalls = trials.map((trial) =>
      trial.split(",").filter((ball) => ball.search("blue") !== -1),
    );

    redBalls.forEach((redBall) => {
      if (redBall[0] === undefined) {
        return;
      }
      const rb = redBall[0].split(" ");
      if (parseInt(rb[1]) > Balls.Red) {
        flagR = 1;
      }
    });
    greenBalls.forEach((greenBall) => {
      if (greenBall[0] === undefined) {
        return;
      }
      const gb = greenBall[0].split(" ");
      if (parseInt(gb[1]) > Balls.Green) {
        flagG = 1;
      }
    });
    blueBalls.forEach((blueBall) => {
      if (blueBall[0] === undefined) {
        return;
      }
      const bb = blueBall[0].split(" ");
      if (parseInt(bb[1]) > Balls.Blue) {
        flagB = 1;
      }
    });
    if (flagR !== 1 && flagG !== 1 && flagB !== 1) {
      gameIdSum += parseInt(gameId);
    }
  });
  console.log(gameIdSum);
};
