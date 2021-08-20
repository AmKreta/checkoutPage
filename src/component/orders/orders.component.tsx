import React, { useCallback, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useSelector } from 'react-redux';
import { State } from '../../store/store';
import { useDispatch } from "react-redux";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Snackbar from '@material-ui/core/Snackbar';

//child omponents
import SummryHeader from './summryHeader/summryHeader.component';
import Product from './product/product.component';

//actions
import { addItem, removeItem, deleteItem } from '../../actions/actions';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    height: "90%",
    margin: `0 ${theme.spacing(2)}px`,
    position: 'relative'
  },
  productContainer: {
    height: 'auto'
  },
  scroll: {
    height: '85%',
    overflowY: 'scroll',
  },
  snackbar: {
    backgroundColor: '#333',
    color: 'white',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    borderRadius: '5px',
    boxShadow: '0 0 3px #111',
    border: '1px solid #111'
  }
}));

const Orders: React.FC<{}> = () => {
  const classes = useStyles();

  const productList = useSelector((state: State) => state.productList);

  const [snackBarState, setSnackBarState] = useState<{ itemName: null | string, isOpen: boolean }>({ itemName: null, isOpen: false })

  const dispatch = useDispatch();

  const matches = useMediaQuery('(max-width:960px)');

  const onSnackbarClose = useCallback((event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarState({ itemName: null, isOpen: false })
  }, [])

  const addHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget as HTMLButtonElement;
    const itemId: number = parseInt(element.getAttribute('data-itemId')!);
    dispatch(addItem(itemId));
  }, [dispatch, setSnackBarState]);

  const removeHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget as HTMLButtonElement;
    const itemId: number = parseInt(element.getAttribute('data-itemId')!);
    dispatch(removeItem(itemId));
  }, [dispatch, setSnackBarState]);

  const deleteHandler = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const element = e.currentTarget as HTMLButtonElement;
    const itemId: number = parseInt(element.getAttribute('data-itemId')!);
    dispatch(deleteItem(itemId));
    const itemName: string = element.getAttribute('data-itemName')!;
    setSnackBarState({ itemName, isOpen: true });
  }, [dispatch, setSnackBarState]);

  return (
    <Grid container item xs={12} sm={12} md={7} lg={8} className={clsx(classes.container, matches ? classes.productContainer : null)} alignContent='flex-start'>
      <SummryHeader />
      <Grid item xs={12} className={clsx(matches ? classes.productContainer : classes.scroll)}>
        {
          productList
            .filter(item => item.qty > 0)
            .map((item, index) => (<Product {...item} key={item.id} {...{ addHandler, removeHandler, deleteHandler }} />))
        }
      </Grid>
      <Snackbar open={snackBarState.isOpen} autoHideDuration={2000} onClose={onSnackbarClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} message={`${snackBarState.itemName} deleted`}>
        <Typography className={clsx(classes.snackbar)}>
          {snackBarState.itemName} deleted
        </Typography>
      </Snackbar>
    </Grid>
  );
};

export default Orders;
