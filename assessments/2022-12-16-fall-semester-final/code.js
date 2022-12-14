////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of ?? available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...


const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return [makeRow(), makeRow(), makeRow()]
}

const allTheSame = (element1, element2, element3) => {
  return element1 === element2 && element2 === element3
}

const extractColumn = (index) => {
  let board = makeBoard()
  return
}


const fillTimesTable = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      array.push()
    }
  }

}

const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return "yes"
  }
  else return 'no'
}

const logIfOk = (n) => {
  if (isOk(n)) {
    log.isOK
  }
}

const totalWithTip = (subtotal, percentageTip) => {
  let tip = subtotal * percentageTip
  let total = tip + subtotal
  return { subtotal: totalExcludingTip, tip: tipValue, total: totalValue }
}

const higherPaid = (e1, e2) => {
  if (e1.salary < e2.salary) {
    return e2
  }
  else return e1
}

const isWinner = (player) => {
  return player.score > 100
}

const updateWins = (player) => {
  if (player.score > 100) {
    player.wins++
  }
  return
}

const bigWinners = (players) => {
  let superiorWinners = []
  for (let i = 0; i < players.length; i++) {
    if (players.wins > 10) {
      players.push(superiorWinners)
    }
  }
  return superiorWinners
}

const firstHalf = (s) =>{
return s.substring(0,s.length/2)
}

const secondHalf = (s) => {
  return s.substring(s.length/2)
}

const swapFrontAndBack = (s) =>{
return secondHalf(s)+ firstHalf(s)
}

const upDown = (s) => {
return s.toUpperCase()+s.toLowerCase()
}

const firstAndLast = (s) => {
return s[0]+ s.substring(s.length-1)
}

const randomCharacter = (s) =>{
return Math.random(s)
}