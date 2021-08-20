import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import clsx from "clsx";
import { ItemType } from "../../../store/types";

interface props extends ItemType {
    addHandler: (e: React.MouseEvent<HTMLButtonElement>) => void,
    removeHandler: (e: React.MouseEvent<HTMLButtonElement>) => void,
    deleteHandler: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        height: '11vh',
    },
    item: {
        border: '1px solid #ccc',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spcae-evenly',
        '&>div:nth-child(2)': {
            flexGrow: 1,
            padding: `0 ${theme.spacing(2)}px`,
        },
    },
    qty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&>*:nth-child(2)': {
            border: '1px solid #ccc',
            padding: `${theme.spacing(.5)}px ${theme.spacing(2)}px`,
            margin: `0 ${theme.spacing(1)}px`
        }
    },
    price: {
        textAlign: 'center'
    },
    image: {
        minHeight: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    flexGrow: {
        flexGrow: 1
    }
}));

const Product: React.FC<props> = ({ id, name, price, discount, type, img_url, qty, addHandler, removeHandler, deleteHandler }) => {
    const classes = useStyles();
    //const items: State = useSelector(state => state);

    return (
        <Grid container item xs={12} alignContent='center' className={clsx(classes.container)} justifyContent='center' alignItems='center'>
            <Grid item xs={6} className={clsx(classes.item)}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                    <img src={img_url} alt='product' className={clsx(classes.image)} />
                </div>
                <div>
                    <Typography variant='h6' color='textSecondary'>
                        {name}
                    </Typography>
                </div>
                <IconButton size='medium' onClick={deleteHandler} data-itemId={id} data-itemName={name}>
                    <ClearIcon />
                </IconButton>
            </Grid>
            <Grid item xs={4} className={clsx(classes.qty)}>
                <IconButton onClick={removeHandler} data-itemId={id}>
                    <RemoveIcon />
                </IconButton>
                <Typography variant='h6' color='textSecondary'>
                    {qty}
                </Typography>
                <IconButton onClick={addHandler} data-itemId={id}>
                    <AddIcon />
                </IconButton>
            </Grid>
            <Grid item xs={2} className={clsx(classes.price)}>
                <Typography variant='h6' color='textSecondary'>
                    ${price}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default React.memo(Product);
