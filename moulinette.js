const newDatas = [];
const oldDatas = [];

const result = [];
const mails = oldDatas.map(x => x.mail);

newDatas.map(x => {
  if (!mails.includes(x.mail)) {
    result.push(x);
  }
  return x;
});

JSON.stringify([...oldDatas, ...result]);
