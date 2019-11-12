import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default class ForecastView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Card className={useStyles.card}>
                <CardHeader>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Today the weather will be {this.props.title}
                    </Typography>
                </CardHeader>
                <img
                    src={'/'+this.props.value+".png"}/>
                
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Temperature will be around {this.props.temperature} °C
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}