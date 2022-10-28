import { useState } from "react";
import PriceFilter from "..";

const PriceFilterContainer = () => {
  const [sort, setSort] = useState("");
  const changeTargetValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.value);
  };

  return <PriceFilter changeTargetValue={changeTargetValue} />;
};

export default PriceFilterContainer;
