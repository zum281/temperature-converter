import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    Button,
    OutlinedInput,
    InputLabel,
    FormControl,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
    return {
        paper: {
            padding: theme.spacing(3),
            maxWidth: "600px",
        },
    };
});

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Paper className={classes.paper}>
                <form noValidate autoComplete="off">
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="degrees">Degrees</InputLabel>
                        <OutlinedInput type="number" id="degrees" />
                    </FormControl>

                    <Button variant="contained" color="primary">
                        convert
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default App;
