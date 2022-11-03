const divide = (a, b) => {


  if (isNaN(a) || isNaN(b)) {
    throw new Error('Not a Number!');
  }

  if (b === 0) {
    throw new Error('Divide by Zero!');
  }

  return (a / b).toFixed(2);
}

module.exports = divide;
