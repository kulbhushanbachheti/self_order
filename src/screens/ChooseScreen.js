
import { Box, Fade, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React, { useContext } from 'react'
import { setOrderType } from '../actions';
import Logo from '../components/Logo';
import { Store } from '../Store';
import { useStyles } from '../styles';

export default function ChooseScreen(props){
    const styles = useStyles();
    const { dispatch } =useContext(Store);

    const chooseHandler = (orderType) => {
        setOrderType(dispatch, orderType);
        props.history.push('/order');
    };

    return (
        <Fade in={true}>
            <Box className={[styles.root, styles.navy]}>
                <Box className={[styles.main, styles.center]}>
                    <Logo large></Logo>
                    <Typography variant="h3" component="h3" className={styles.center}>
                        Where will you be eating today
                    </Typography>
                    <Box className={styles.cards}>
                        <Card className={(styles.card, styles.space)}>
                        <CardActionArea onClick={() => chooseHandler('Eat in')}>
                            <CardMedia component="img" alt="Eat in" image="/images/eatin.png" className={styles.media} />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" color="textPrimary" component="p"> 
                                    Eat In
                                    </Typography>
                                </CardContent>
                            
                        </CardActionArea>
                        </Card>
                        <Card className={(styles.card, styles.space)}>
                        <CardActionArea onClick={() => chooseHandler('Take out')}>
                            <CardMedia component="img" alt="Take out" image="/images/takeout.png" className={styles.media} />
                                <CardContent>
                                    <Typography gutterBottom variant="h4" color="textPrimary" component="p"> 
                                    Take Out
                                    </Typography>
                                </CardContent>
                            
                        </CardActionArea>
                        </Card>
                    </Box>
                </Box>
            </Box>
            </Fade>
    )
}








