import { Input} from "./input";
enum Mode {
  forward,
  reverse,
}
export const day01 = () => {
  let sum = 0;
  for (const word of Input) {
    let sum1 = findSum(Mode.forward, word);
    let sum2 = findSum(Mode.reverse, word);
    if (sum1 == 0 && sum2 != 0) {
      sum += sum2;
    } else if (sum2 == 0 && sum1 != 0) {
      sum += sum1;
    } else if (sum1 != 0 && sum2 != 0 ) {
      sum += sum1 * 10 + sum2;
    }
  }
  console.log(sum);
};
const findSum = (mode: Mode, word: string) => {
  const Nos = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const Nos2 = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let index1 = 9999,
    index2 = 9999;

  let val1 = 0,
    val2 = 0;
  for (const number of Nos) {
    const { isPresent: iP2, index } = findSubstring(
      mode === Mode.forward ? word : reverseString(word),
      mode === Mode.forward ? number : reverseString(number),
    );
    if (iP2 && ((index ?? -1) < index1)) {
      console.log("index1 index word number : ",index1,index,word,number);
      index1 = index ?? -1;
      console.log("index1 index word number : ",index1,index,word,number);
      console.log("next");
      val1 = returnValue(number);
    }
  }
  for (const no of Nos2) {
    const { isPresent: ip2, index } = findSubstring(
      mode === Mode.forward ? word : reverseString(word),
      mode === Mode.forward ? no : reverseString(no),
    );
    if (ip2 && ((index ?? -1 ) < index2)) {
      index2 = index ?? -1;
      val2 = returnValue(no);
    }
  }
 // for part 1 return val1;
 return index1 < index2 ? val1 : val2
};
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

function findSubstring(
  str: string,
  substring: string,
): { isPresent: boolean; index?: number } {
  const index = str.indexOf(substring);
  const isPresent = index !== -1;
  return {
    isPresent,
    index: isPresent ? index : 0,
  };
}

function returnValue(str: string): number {
  switch (str) {
    case "one":
    case "1":
      return 1;
    case "two":
    case "2":
      return 2;
    case "three":
    case "3":
      return 3;
    case "four":
    case "4":
      return 4;
    case "five":
    case "5":
      return 5;
    case "six":
    case "6":
      return 6;
    case "seven":
    case "7":
      return 7;
    case "eight":
    case "8":
      return 8;
    case "nine":
    case "9":
      return 9;
    default:
      return 0;
  }
}
