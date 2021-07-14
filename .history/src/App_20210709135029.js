import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, TextField, MenuItem } from "@material-ui/core";
import { useState } from "react";

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
        inputNumber: {
            WebkitAppearance: "none",
            MozAppearance: "textfield",
        },
        select: {
            minWidth: "200px",
        },
    };
});

function App() {
    const classes = useStyles();
    const [type, setType] = useState(undefined);
    const [degrees, setDegrees] = useState(undefined);
    const types = ["Fahrenheit", "Celsius", "Kelvin"];
    const inputNumberProps = {
        step: 0.01,
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
                        className={classes.inputNumber}
                        inputProps={inputNumberProps}
                        value={degrees}
                    />

                    <TextField
                        select
                        label="Type"
                        value={type}
                        // onChange={}

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

                    <Button variant="contained" color="primary" size="large">
                        convert
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default App;
