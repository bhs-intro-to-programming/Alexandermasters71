/*
 * Important facts about the birds of Booleana.
 *
 * Coloration and markings:
 *
 *   - Flobby Birds and Bloggy Birds are red.
 *   - Flibble Birds and Globby Birds are not red.
 *   - Flobby Birds and Flibble Birds are spotted.
 *   - Bloggy Birds and Globby Birds are not spotted.
 *
 * Diet:
 *
 *   - Flobby Birds eat fish, nuts, and worms.
 *   - Bloggy Birds eat mice, nuts, and worms.
 *   - Flibble Birds eat fish, mice, and worms.
 *   - Globby Birds eat fish, mice, and nuts.
 *
 */

const isFlobbyBird = (red,spotted) => {
return  red && spotted
}

const isBloggyBird = (red,spotted) => {
return  red && ! spotted
}

const isFlibbleBird = (red,spotted) => {
return  ! red && spotted
}

const isGlobbyBird = (red,spotted) => {
return  ! red && ! spotted
}

const eatsWorms = (FlobbyBirds, BloggyBirds, FlibbleBirds, GlobbyBirds) => {
  return FlobbyBirds || FlibbleBirds || BloggyBirds &&! GlobbyBirds
}


const eatsFish = (isSpottedBird,isRedBird) => {
  return  isRedBird || ! isSpottedBird 
}   

const eatsNuts = (isSpottedBird,isRedBird) => {
  return ! isRedBird || isSpottedBird
}

const eatsMice = (isSpottedBird,isRedBird) => {
  return  ! isRedBird || ! isSpottedBird
}

const isRed = (bird) => {
  return bird==='Flobby'|| bird==='Bloggy'
}

const isSpotted = (bird) => {
  return bird==='Flobby' || bird==='Flibble'
}

 const isNotSpotted = (bird) => {
  return bird==='Bloggy'|| bird==='Globby'
} 

const isNotRed = (bird) => {
  return bird ==='Flibble'|| bird==='Globby'
}