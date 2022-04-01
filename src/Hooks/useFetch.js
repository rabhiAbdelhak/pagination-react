import  { useCallback, useEffect, useState } from 'react';
import {createPages} from '../Utilities';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const useFetch = (userPerPage) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);


  const getData = useCallback(async () => {
   const res = await fetch(url);
   const data = await res.json();
   setData(createPages(data, userPerPage));
   setLoading(false);
  }, [userPerPage])
  useEffect(() => {
   getData();
  }, [getData]);

  return [loading, data];
}

export default useFetch