import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Orders from './orders/orders.component';
import Bill from './bill/bill.component'
import AppBar from "./appBar/appBar.component";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
      width: "100%",
      padding: `0 ${theme.spacing(2)}px`
    }
  })
);
const Component: React.FC<{}> = () => {
  const classes = useStyles();
  const matches = useMediaQuery('( max-width:960px)');
  return (
    <Grid container className={clsx(classes.container)} alignItems='stretch'>
      <AppBar />
      {
        matches
          ? (
            <React.Fragment key='render first'>
              <Bill />
              <Orders />
            </React.Fragment>
          )
          : (
            <React.Fragment key='renderSecond'>
              <Orders />
              <Bill />
            </React.Fragment>
          )
      }
    </Grid>
  );
};

export default Component;
