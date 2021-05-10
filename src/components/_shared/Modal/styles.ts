import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  children: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: 1000,
    border: "1px solid #555",
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));