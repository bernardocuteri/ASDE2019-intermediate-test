import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

export default class Slots extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            conds: props.forecast
        }
    }

    render() {
        return (
            <div style={{ marginTop: "50px" }}>
                <h3>This is the weather of {this.props.location}</h3>
                <Grid container spacing={2}>
                    {this.props.forecast.map((v) =>
                        <Grid item xs={4}>
                            {v.condition === "sunny" && <img src={require('../images/sunny.png')} />}
                            {v.condition === "cloudy" && <img src={require('../images/cloudy.png')} />}
                            {v.condition === "rainy" && <img src={require('../images/rainy.png')} />}

                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                    {v.temperature} °C
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                    }
                </Grid>

            </div>
        )
    }
}