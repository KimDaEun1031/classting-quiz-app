const scrubData = (data: Array<any>) => {
  for (let i = 0; i < data.length; i++) {
    const { correct_answer, incorrect_answers } = data[i];

    incorrect_answers.push(correct_answer);
    incorrect_answers.sort(() => Math.random() - 0.5);
  }

  return data;
};

export default scrubData;
