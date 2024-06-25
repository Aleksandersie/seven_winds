import { Row } from "../../enteties/row/model/row.model.ts";

export type RowModelProps = {
  data: Row;
  submit: () => void;
  deleteRow: (id: number) => void;
};
