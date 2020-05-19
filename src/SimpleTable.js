import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ConsoleTime, ConsoleTimeEnd } from "./Utils"

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export function SimpleTable({ title }) {

    const [rows, setRows] = useState([])

    const _getLastMessage = () => rows && rows[rows.length - 1] && rows[rows.length - 1].name

    const _onMessageChange = (event) => {
        setRows([...rows, createData(event.target.value)])
    }

    const createData = (name) => {
        return { name, calories: Math.random() * 1000 | 0, fat: Math.random() * 100 | 0, carbs: Math.random() * 100 | 0, protein: Math.random() * 10 | 0 };
    }

    const classes = useStyles();

    return (
        <>
            <label>{title}</label>
            <input
                type="text"
                value={_getLastMessage() || ""}
                onChange={_onMessageChange}
                style={{ margin: "10px" }}
            />
            <ConsoleTime>{title}</ConsoleTime>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <ConsoleTimeEnd>{title}</ConsoleTimeEnd>
        </>
    );
}