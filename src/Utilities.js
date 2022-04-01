export const createPages = (data, userPerPage) => {

  const pages = data.length / userPerPage;
  const newArray = Array.from({length: pages}, (_, index) => {
    const start = index * userPerPage;
    return data.slice(start, start + userPerPage);
  });
  
  return newArray;
};


