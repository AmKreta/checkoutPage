import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux';
import { State } from '../../store/store';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { selectDiscount, selectNumItems, selectOrderTotal, selectTypeDiscount } from '../../selectors/selector';
import clsx from "clsx";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			width: "300px",
			height: "250px",
			border: '1px solid #ccc',
			boxShadow: '0 0 1px #ccc',
		},
		gridContainer: {
			height: '100%',
			width: '100%'
		},
		gridItem: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			margin: theme.spacing(1)
		},
		ordersTotal: {
			backgroundColor: '#ccc',
			margin: 0,
			padding: `${theme.spacing(1)}px`
		},
		changeOrder: {
			margin: theme.spacing(1),
			marginTop: theme.spacing(2)
		}
	})
);

const Orders: React.FC<{}> = () => {
	const classes = useStyles();

	const numItems: number = useSelector((state: State) => selectNumItems(state));
	const orderTotal: number = useSelector((state: State) => selectOrderTotal(state));
	const discount: number = useSelector((state: State) => selectDiscount(state));
	const typeDiscount: number = useSelector((state: State) => selectTypeDiscount(state));

	const matches = useMediaQuery('(max-width:960px)');

	return (
		<Grid container item xs={12} sm={12} md={4} lg={3} className={clsx(classes.container, matches ? classes.changeOrder : null)}>
			<Grid container className={clsx(classes.gridContainer)} alignContent='space-between'>
				<Grid item xs={12} className={clsx(classes.gridItem)}>
					<Typography variant='h6' color='textSecondary'>
						Total
					</Typography>
				</Grid>
				<Grid item xs={12} className={clsx(classes.gridItem)}>
					<Typography variant='subtitle1' color='textSecondary'>
						Items({numItems})
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						:
					</Typography>
					<Typography variant='subtitle1' color='textSecondary'>
						{orderTotal}
					</Typography>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={12} className={clsx(classes.gridItem)}>
						<Typography variant='subtitle1' color='textSecondary'>
							Discount
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							:
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							-${discount}
						</Typography>
					</Grid>
					<Grid item xs={12} className={clsx(classes.gridItem)}>
						<Typography variant='subtitle1' color='textSecondary'>
							Type discount
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							:
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							-${typeDiscount}
						</Typography>
					</Grid>
				</Grid>
				<Grid item xs={12} className={clsx(classes.gridItem, classes.ordersTotal)}>
					<Typography variant='h6' color='textSecondary'>
						Order Total
					</Typography>
					<Typography variant='h6' color='textSecondary'>
						${orderTotal - discount - typeDiscount}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Orders;
