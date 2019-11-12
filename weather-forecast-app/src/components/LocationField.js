import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import BaseInstance from '../http-client/BaseInstance';

export class LocationField extends React.Component {

    constructor() {
        super()
        this.state = {
            locationTmp: "",
            active: true
        }
    }

    handleChange = (event) => {
        this.setState({
            locationTmp: event.target.value
        })
    }

    setLocation = () => {
        this.props.setLocation(this.state.locationTmp)
        this.setState({
            active: false
        })
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.setLocation()
        }
    }

    render() {
        const classes = this.props.classes

        if (this.state.active) {
            return (
                <React.Fragment>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <LocationOnIcon />
                        </div>
                        <InputBase
                            placeholder="Location"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyPress={this.handleKeyPress}
                            onChange={this.handleChange}
                        />
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div></div>
                </React.Fragment>
            );

        }

    }


}

