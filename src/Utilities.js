export const createPages = (data, userPerPage) => {
  let i = 0;
  let newData = [];
  while (i < data.length) {
    let page = [];
    for (let j = i; (j < i + userPerPage && j< data.length); j++) {
      page.push(data[j]);
    }
    newData.push(page);
    i += userPerPage;
  }
  console.log(newData);
  return newData;
};


