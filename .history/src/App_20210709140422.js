import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, TextField, MenuItem } from "@material-ui/core";
import { useState, useRef } from "react";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        paper: {
            padding: theme.spacing(3),
            maxWidth: "600px",
        },
        form: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
        },

        select: {
            minWidth: "200px",
        },
    };
});

function App() {
    const classes = useStyles();
    const typeRef = useRef();
    const degRef = useRef();
    const types = ["Fahrenheit", "Celsius", "Kelvin"];
    const inputNumberProps = {
        step: 0.01,
    };

    const handleClick = () => {
        console.log(typeRef.current.value);
        console.log(degRef.current.value);
    };

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <form noValidate autoComplete="off" className={classes.form}>
                    <TextField
                        type="number"
                        size="small"
                        variant="outlined"
                        label="Degrees"
                        inputProps={inputNumberProps}
                        onChange={(event) => setDegrees(event.target.value)}
                        inputRef={degRef}
                    />

                    <TextField
                        select
                        label="Type"
                        variant="outlined"
                        size="small"
                        className={classes.select}
                        inputRef={typeRef}
                    >
                        {types.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleClick}
                    >
                        convert
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default App;
