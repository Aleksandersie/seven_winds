import { Row } from "../../enteties/row/model/row.model.ts";
import React, { useEffect, useRef, useState } from "react";
import { TableCell, TableRow, TextField } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import { RowModelProps } from "./row.model.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconContainer } from "./row.styles.ts";

export const NewRow: React.FC<RowModelProps> = (props) => {
  const { data, submit, deleteRow } = props;

  const [subRows, setSubRows] = useState<Row[]>(data.child);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const deleteRef = useRef<SVGSVGElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (deleteRef.current && boxRef.current) {
      deleteRef.current.style.display = "block";
      boxRef.current.style.backgroundColor = "gray";
    }
  };

  const handleMouseLeave = () => {
    if (deleteRef.current && boxRef.current) {
      deleteRef.current.style.display = "none";
      boxRef.current.style.backgroundColor = "transparent";
    }
  };

  useEffect(() => {
    setSubRows(data.child);
  }, [data.child]);

  console.log(subRows);

  const handleAddRow = () => {
    // const body: Row = {
    //   equipmentCosts: 0,
    //   estimatedProfit: 0,
    //   machineOperatorSalary: 0,
    //   mainCosts: 0,
    //   materials: 0,
    //   mimExploitation: 0,
    //   overheads: 0,
    //   parentId: 90324,
    //   rowName: "",
    //   salary: 0,
    //   supportCosts: 0,
    //   total: 0,
    //   child: [],
    // };
    setIsEdit(!isEdit);
    //setSubRows((prev) => [...prev, body]);
  };

  const submitRow = () => {
    console.log("submit");
    submit();
  };

  return (
    <>
      {!isEdit ? (
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
          onDoubleClick={() => handleAddRow()}
        >
          {data.child.length > 0 ? (
            <TableCell component="th" scope="row">
              <DescriptionIcon
                sx={{ cursor: "pointer" }}
                onClick={() => submitRow()}
              />
            </TableCell>
          ) : (
            <TableCell component="th" scope="row" sx={{ paddingLeft: 10 }}>
              <IconContainer
                ref={boxRef}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
              >
                <DescriptionIcon sx={{ cursor: "pointer" }} />
                <DeleteIcon
                  ref={deleteRef}
                  color={"error"}
                  onClick={() => {
                    if (data.id) {
                      deleteRow(data.id);
                    }
                  }}
                  sx={{ cursor: "pointer", display: "none" }}
                />
              </IconContainer>
            </TableCell>
          )}
          <TableCell align="right">{data.rowName}</TableCell>
          <TableCell align="right">{data.equipmentCosts}</TableCell>
          <TableCell align="right">{data.materials}</TableCell>
          <TableCell align="right">{data.estimatedProfit}</TableCell>
          <TableCell align="right">{data.estimatedProfit}</TableCell>
        </TableRow>
      ) : (
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
          onDoubleClick={() => handleAddRow()}
        >
          {data.child.length > 0 ? (
            <TableCell component="th" scope="row">
              <DescriptionIcon
                sx={{ cursor: "pointer" }}
                onClick={() => submitRow()}
              />
            </TableCell>
          ) : (
            <TableCell component="th" scope="row" sx={{ paddingLeft: 10 }}>
              <IconContainer
                ref={boxRef}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
              >
                <DescriptionIcon sx={{ cursor: "pointer" }} />
                <DeleteIcon
                  ref={deleteRef}
                  color={"error"}
                  onClick={() => {
                    if (data.id) {
                      deleteRow(data.id);
                    }
                  }}
                  sx={{ cursor: "pointer", display: "none" }}
                />
              </IconContainer>
            </TableCell>
          )}
          <TableCell align="right">
            <TextField variant="outlined" value={data.rowName} />
          </TableCell>
          <TableCell align="right">
            <TextField variant="outlined" value={data.salary} />
          </TableCell>
          <TableCell align="right">
            <TextField variant="outlined" value={data.equipmentCosts} />
          </TableCell>
          <TableCell align="right">
            <TextField variant="outlined" value={data.supportCosts} />
          </TableCell>
          <TableCell align="right">
            <TextField variant="outlined" value={data.estimatedProfit} />
          </TableCell>
        </TableRow>
      )}
      {data.child &&
        subRows.map((row: Row) => (
          <NewRow data={row} submit={submitRow} deleteRow={deleteRow} />
        ))}
    </>
  );
};
