import { useEffect, useState } from 'react'

const usePage = (data, index) => {
  const [items , setItems] = useState([]);

  useEffect(() => {
     setItems(data.slice(index, index + 10));
  }, [index, data]);

  return {items}
}

export default usePage