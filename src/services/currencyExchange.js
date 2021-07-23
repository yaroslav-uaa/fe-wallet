const fetchInfo = async () => {
  try {
    const response = await fetch(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
    );
    const rates = response.json();
    return rates;
  } catch (error) {
    throw error;
  }
};

export default fetchInfo;
