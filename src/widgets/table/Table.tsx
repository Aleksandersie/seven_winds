import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  useCreateRowMutation,
  useDeleteRowMutation,
  useGetTreeRowsQuery,
} from "../../enteties/row/api/row.api.ts";
import { ent } from "../../shared/entity.ts";
import { Row } from "../../enteties/row/model/row.model.ts";
import { useEffect, useState } from "react";
import { NewRow } from "../row/Row.tsx";

export const MainTable = () => {
  const { data } = useGetTreeRowsQuery(ent.id);
  const [createRowMutation] = useCreateRowMutation();
  const [deleteRowMutation] = useDeleteRowMutation();
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  // const handleEditRow = <T extends Row>(
  //   value: string,
  //   key: keyof T,
  //   row: Row,
  // ) => {
  //   const arr = rows.map((el) => {
  //     if (el.id === row.id) {
  //       return {
  //         ...row,
  //         [key]: value,
  //       };
  //     }
  //     return el;
  //   });
  //   setRows(arr);
  // };

  const handleAddRow = () => {
    const body = {
      id: 999,
      equipmentCosts: 0,
      estimatedProfit: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 0,
      parentId: 90324,
      rowName: "",
      salary: 0,
      supportCosts: 0,
    };

    createRowMutation({ id: 90324, body: body });
  };

  const handleDeleteRow = (rID: number | undefined) => {
    deleteRowMutation({ id: data?.[0].id, rID: rID });
    //setRows(rows.filter((el) => el.id !== rID));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Уровень</TableCell>
            <TableCell align="right">Наименование работ</TableCell>
            <TableCell align="right">Основная з/п</TableCell>
            <TableCell align="right">Оборудование</TableCell>
            <TableCell align="right">Накладные расходы</TableCell>
            <TableCell align="right">Сметная прибыль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: Row, i) => (
            <NewRow
              data={row}
              submit={handleAddRow}
              deleteRow={handleDeleteRow}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
