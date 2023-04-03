import AccordionItem from "./accordionItem";
import {
  careTips,
  delivery,
  parameters,
  returnToStore,
} from "./itemsInAccordion";

import style from "../styles/index.module.scss";

const DetailsAccordion: React.FC = () => {
  return (
    <div className={style["details-accordion"]}>
      <AccordionItem
        summary={"Параметры"}
        details={parameters}
      />
      <AccordionItem
        summary={"Доставка"}
        details={delivery}
      />
      <AccordionItem
        summary={"Советы по уходу"}
        details={careTips}
      />
      <AccordionItem
        summary={"Возврат"}
        details={returnToStore}
      />
    </div>
  );
};
export default DetailsAccordion;
