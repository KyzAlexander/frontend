import { useState } from "react";
import { useField } from "formik";

import PriceRangeFilter from "../components";

import { IPriceRangeFilterContainerProps } from "../interfaces";

const PriceRangeFilterContainer: React.FC<IPriceRangeFilterContainerProps> = ({
  minPrice,
  maxPrice,
  minPriceDifference,
  minPriceOnTheScreen,
  maxPriceOnTheScreen,
}) => {
  const [field, meta, helpers] = useField("priceRangeFilter");
  const [priceValues, setPriceValues] = useState([
    minPriceOnTheScreen,
    maxPriceOnTheScreen,
  ]);

  const handleChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    if (Array.isArray(value)) {
      let minPrice: number = value[0];
      let maxPrice: number = value[1];
      switch (activeThumb) {
        case 0:
          setPriceValues([
            Math.min(minPrice, maxPrice - minPriceDifference),
            maxPrice,
          ]);
          break;
        case 1:
          setPriceValues([
            minPrice,
            Math.max(maxPrice, minPrice + minPriceDifference),
          ]);
          break;
      }
      helpers.setValue(priceValues);
    }
  };

  const props = {
    field,
    minPrice,
    maxPrice,
    priceValues,
    handleChange,
  };

  return <PriceRangeFilter {...props} />;
};

export default PriceRangeFilterContainer;
