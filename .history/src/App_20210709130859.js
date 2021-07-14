import { makeStyles } from "@material-ui/core/styles";
import { Paper, Button, Input, InputLabel } from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Paper>
                <form noValidate autoComplete="off">
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input />

                    <Button variant="contained" color="primary">
                        convert
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default App;
