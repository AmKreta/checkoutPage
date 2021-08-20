import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { useSelector } from 'react-redux';
import { State } from '../../../store/store';
import clsx from "clsx";
import { selectNumItems } from '../../../selectors/selector';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tableheader: {
            height: '9vh',
            borderBottom: '1px solid #ccc',
            marginBottom: theme.spacing(2),
            position: 'sticky'
        },
        alignCenter: {
            textAlign: 'center'
        }
    })
);

const Orders: React.FC<{}> = () => {
    const classes = useStyles();

    const numItems: number = useSelector((state: State) => selectNumItems(state));

    return (
        <Grid container item xs={12} direction='row' className={clsx(classes.tableheader)} alignItems='center' justifyContent='center'>
            <Grid item xs={6}>
                <Typography variant='h6' color='textSecondary'>
                    Items({numItems})
                </Typography>
            </Grid>
            <Grid item xs={4} className={clsx(classes.alignCenter)}>
                <Typography variant='h6' color='textSecondary'>
                    Qty
                </Typography>
            </Grid>
            <Grid item xs={2} className={clsx(classes.alignCenter)}>
                <Typography variant='h6' color='textSecondary'>
                    Price
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Orders;
