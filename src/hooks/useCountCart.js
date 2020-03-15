import { useState, useEffect } from 'react';
const useCountCart = (initCount, price) => {
    const [count, setCount] = useState(initCount);
    const [total, setTotal] = useState(price)
    const handleRemoveCart = () => {
        if(count === 1) return
        setCount(c => c - 1)
    }
    const handleAddCart = () => {
        setCount(c => c + 1)
    }
    useEffect(() => {
        setTotal(price * count)       
    }, [price, count])
    return {
      count,
      total,
      increase: handleAddCart,
      decrease: handleRemoveCart,
    };
  };
export default useCountCart