import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    Button,
    TextField,
    MenuItem,
    InputAdornment,
} from "@material-ui/core";
import { useState } from "react";
import Result from "./Result";

const useStyles = makeStyles((theme) => {
    return {
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

const Calculator = () => {
    const types = ["Fahrenheit", "Celsius"];
    const classes = useStyles();
    const [type, setType] = useState(types[0]);
    const [degrees, setDegrees] = useState("");
    const [result, setResult] = useState({
        value: null,
        unit: null,
    });
    const inputNumberProps = {
        step: 0.01,
        endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
    };

    const handleClick = () => {
        if (type && degrees) {
            if (type === types[1]) {
                // f to c
                let t_celsius = (degrees - 32) * (5 / 9);
                let res = {
                    value: t_celsius.toPrecision(4),
                    unit: "°C",
                };
                setResult({ ...res });
            } else {
                // c to f
                let t_fahrenheit = degrees * (9 / 5) + 32;
                let res = {
                    value: t_fahrenheit.toPrecision(4),

                    unit: "°F",
                };
                setResult({ ...res });
            }
        } else {
            console.log("error");
        }
    };
    return (
        <Paper className={classes.paper}>
            <form noValidate autoComplete="off" className={classes.form}>
                <TextField
                    type="number"
                    size="small"
                    variant="outlined"
                    label="Degrees"
                    inputProps={inputNumberProps}
                    value={degrees}
                    onChange={(event) =>
                        setDegrees(parseFloat(event.target.value))
                    }
                />

                <TextField
                    select
                    label="Convert to"
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                    variant="outlined"
                    size="small"
                    className={classes.select}
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

            {result.value && <Result value={result.value} unit={result.unit} />}
        </Paper>
    );
};

export default Calculator;
