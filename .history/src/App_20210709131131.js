import { makeStyles } from "@material-ui/core/styles";
import {
    Paper,
    Button,
    Input,
    InputLabel,
    FormControl,
} from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Paper>
                <form noValidate autoComplete="off">
                    <FormControl>
                        <InputLabel htmlFor="degrees">Degrees</InputLabel>
                        <Input variant="outlined" type="number" id="degrees" />
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
