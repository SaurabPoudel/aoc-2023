import fs from "fs";

const input = fs.readFileSync("./src/day02/input.txt", "utf8");
const lines = input.split("\n");
export const day02 = () => {
  let power = 0;
  let powers = 0;
  lines.forEach((line) => {
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
    let rmb = 1;
    redBalls.forEach((redBall) => {
      if (redBall[0] === undefined) {
        return;
      }
      const rb = redBall[0].split(" ");
      if (parseInt(rb[1]) >= rmb) {
        rmb = parseInt(rb[1]);
      }
    });
    let gmb = 1;
    greenBalls.forEach((greenBall) => {
      if (greenBall[0] === undefined) {
        return;
      }
      const gb = greenBall[0].split(" ");
      if (parseInt(gb[1]) >= gmb) {
        gmb = parseInt(gb[1]);
      }
    });
    let bmb = 1;
    blueBalls.forEach((blueBall) => {
      if (blueBall[0] === undefined) {
        return;
      }
      const bb = blueBall[0].split(" ");
      if (parseInt(bb[1]) >= bmb) {
        bmb = parseInt(bb[1]);
      }
    });
    power = rmb * gmb * bmb;
    console.log(power);
    powers += power;
  });
  console.log(powers);
};
