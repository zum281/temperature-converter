import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Calculator from "./components/Calculator";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    };
});
function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography>Temperature Converter</Typography>
            <Calculator />
        </div>
    );
}

export default App;
