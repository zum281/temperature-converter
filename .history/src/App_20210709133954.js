import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, TextField } from "@material-ui/core";

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
                        id="outlined-select-currency"
                        select
                        label="Select"
                        // value={}
                        // onChange={}
                        helperText="Please select your currency"
                        variant="outlined"
                    >
                        {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
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
