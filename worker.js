self.onmessage = (event) => {
  let number = event.data,
    result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${number} x ${i} = ${number * i}`);
  }
  self.postMessage(result);
};
