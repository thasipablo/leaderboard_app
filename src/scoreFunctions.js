const addScore = async (url, score) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(score),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  return response;
};

export default addScore;
