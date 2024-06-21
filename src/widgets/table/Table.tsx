import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import {
  useCreateRowMutation,
  useDeleteRowMutation,
  useGetTreeRowsQuery,
} from "../../enteties/row/api/row.api.ts";
import { ent } from "../../shared/entity.ts";
import { Row } from "../../enteties/row/model/row.model.ts";
import DescriptionIcon from "@mui/icons-material/Description";
import { Fragment, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const MainTable = () => {
  const { data } = useGetTreeRowsQuery(ent.id);
  const [createRowMutation] = useCreateRowMutation();
  const [deleteRowMutation] = useDeleteRowMutation();
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    if (data) {
      setRows(data[0].child);
    }
  }, [data]);

  const handleEditRow = <T extends Row>(
    value: string,
    key: keyof T,
    row: Row,
  ) => {
    const arr = rows.map((el) => {
      if (el.id === row.id) {
        return {
          ...row,
          [key]: value,
        };
      }
      return el;
    });
    setRows(arr);
  };

  const handleAddRow = () => {
    const body = {
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
    setRows(rows.filter((el) => el.id !== rID));
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
          {data?.map((row: Row, i) => {
            return (
              <Fragment key={row.id}>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={(e) => handleAddRow()}
                  >
                    <DescriptionIcon sx={{ cursor: "pointer" }} />
                  </TableCell>
                  <TableCell align="right">{row.rowName}</TableCell>
                  <TableCell align="right">{row.equipmentCosts}</TableCell>
                  <TableCell align="right">{row.materials}</TableCell>
                  <TableCell align="right">{row.estimatedProfit}</TableCell>
                  <TableCell align="right">{row.estimatedProfit}</TableCell>
                </TableRow>
                {rows.map((row: Row) => (
                  <TableRow
                    key={row?.id}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ paddingLeft: 5 }}
                    >
                      <DescriptionIcon sx={{ cursor: "pointer" }} />
                      <DeleteIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleDeleteRow(row?.id)}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        value={row?.rowName}
                        onChange={(e) =>
                          handleEditRow<Row>(e.target.value, "rowName", row)
                        }
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        value={row?.equipmentCosts}
                        onChange={(e) =>
                          handleEditRow<Row>(
                            e.target.value,
                            "equipmentCosts",
                            row,
                          )
                        }
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        value={row?.materials}
                        onChange={(e) =>
                          handleEditRow<Row>(e.target.value, "materials", row)
                        }
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        value={row?.supportCosts}
                        onChange={(e) =>
                          handleEditRow<Row>(
                            e.target.value,
                            "supportCosts",
                            row,
                          )
                        }
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        value={row?.estimatedProfit}
                        onChange={(e) =>
                          handleEditRow<Row>(
                            e.target.value,
                            "estimatedProfit",
                            row,
                          )
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
