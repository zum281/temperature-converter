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

        select: {
            minWidth: "200px",
        },
    };
});

function App() {
    const types = ["Fahrenheit", "Celsius"];
    const classes = useStyles();
    const [type, setType] = useState(types[0]);
    const [degrees, setDegrees] = useState();
    const inputNumberProps = {
        step: 0.01,
    };

    const handleClick = () => {
        if (type && degrees) {
        }
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
            </Paper>
        </div>
    );
}

export default App;
