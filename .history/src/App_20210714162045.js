import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Calculator from "./components/Calculator";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "15%",
        },
    };
});
function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="button" component="h1">
                Temperature Converter
            </Typography>
            <Calculator />
        </div>
    );
}

export default App;
