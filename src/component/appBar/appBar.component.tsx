import React, { useCallback } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import { State } from '../../store/store';
import CachedIcon from '@material-ui/icons/Cached';
import clsx from "clsx";
import { selectNumItems } from "../../selectors/selector";
import { reloadItems } from '../../actions/actions';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appbarContainer: {
            padding: `${theme.spacing(2)}px 0`,
            height: '10%'
        },
        appBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            width: '100%',
            borderBottom: '1px solid #ccc',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2)
        },
        reloadButton: {
            position: 'absolute',
            top: '50%',
            right: '0%',
            transform: 'translate(-50%,-50%)',
        }
    })
);

const AppBar: React.FC<{}> = () => {
    const classes = useStyles();
    const numItems: number = useSelector((state: State) => selectNumItems(state));

    const dispatch = useDispatch();

    const reloadState = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(reloadItems());
    }, [dispatch]);

    return (
        <Grid container item xs={12} className={clsx(classes.appbarContainer)}>
            <Grid item xs={12} sm={12} md={7} lg={8} className={clsx(classes.appBar)}>
                <IconButton>
                    <ArrowBackIosIcon />
                </IconButton>
                <Typography variant='h4' color='textSecondary'>
                    Order Summary
                </Typography>
                {
                    numItems === 0 && (
                        <Button className={clsx(classes.reloadButton)} endIcon={<CachedIcon />} variant='outlined' onClick={reloadState}>
                            Reload
                        </Button>
                    )
                }
            </Grid>
        </Grid>
    );
};

export default AppBar;
