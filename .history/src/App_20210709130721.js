import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Input } from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Paper>
                <form noValidate autoComplete="off">
                    <Button variant="contained" color="primary">
                        convert
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default App;
