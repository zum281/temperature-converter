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
    };
});

function App() {
    const classes = useStyles();
    const [type, setType] = useState(null);
    const types = ["Fahrenheit", "Celsius", "Kelvin"];

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <form noValidate autoComplete="off" className={classes.form}>
                    <TextField
                        type="number"
                        size="small"
                        variant="outlined"
                        label="Degrees"
                    />

                    <TextField
                        select
                        label="Type"
                        value={type}
                        // onChange={}

                        variant="outlined"
                        size="small"
                    >
                        {types.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
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
