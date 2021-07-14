import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    Button,
    TextField,
    InputLabel,
    FormControl,
} from "@material-ui/core";

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
                    <InputLabel htmlFor="degrees">Degrees</InputLabel>
                    <TextField
                        type="number"
                        id="degrees"
                        size="small"
                        variant="outlined"
                    />

                    <Button variant="contained" color="primary" size="large">
                        convert
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default App;
