import { makeStyles } from "@material-ui/core/styles";
import Calculator from "./components/Calculator";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    };
});
function App() {
    return (
        <div className={classes.root}>
            <Calculator />
        </div>
    );
}

export default App;
