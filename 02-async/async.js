function getNumber(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n), 100);
  });
}

async function fetchData(n) {
  const response = await getNumber(n);
  return response;
}

module.exports = fetchData;