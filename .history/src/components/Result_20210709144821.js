import { Typography } from "@material-ui/core";

const Result = ({ value, unit }) => {
    return (
        <div>
            <Typography variant="caption">Result</Typography>
            <Typography variant="h6">
                {value} {unit}
            </Typography>
        </div>
    );
};

export default Result;
