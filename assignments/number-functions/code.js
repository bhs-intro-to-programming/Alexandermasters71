const add =(a,b) =>  {
  return a+b;
};

const subtract =(a,b) =>  {
  return a-b;
};

const multiply =(a,b) =>  {
  return a*b;
}; 

const divide =(a,b) =>  {
  return a/b;
};

const mod =(a,b) =>  {
  return a%b;
};

const averageOfThree =(a,b,c) =>  {
  return (a+b+c)/3;
};

const averageOfTwo =(a,b) =>  {
  return (a+b)/2;
};

const distance =(x1,y1) =>  {
  return distance (x1-y1);
};

const manhattanDistance =(x1,y1,x2,y2) =>  {
  return Math.abs (y1-y2) + Math.abs(x1-x2);
};

const euclideanDistance =(x1,y1,x2,y2) =>  {
  return Math.sqrt ((y2-y1)**2  + (x2-x1)**2) ; 
};