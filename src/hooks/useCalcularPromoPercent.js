import { useState, useEffect, useCallback } from 'react';

function useCalcularPromoPercent(sellPrice, promoPrice) {
  const [promoPercent, setPromoPercent] = useState(0);

  const calcPrice = useCallback(() => {
      if (sellPrice > promoPrice) {
          setPromoPercent(~~(100 - (promoPrice * 100 / sellPrice)))
      }
    }, [sellPrice, promoPrice]);

  useEffect(() => {
    calcPrice();
  }, [calcPrice]);

  return promoPercent;
}
export default useCalcularPromoPercent