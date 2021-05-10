import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  main: {
    height: 120,
    marginTop: 15
  },
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: 0
  },
  rootLoading: {
    backgroundColor: "#eee",
    textAlign: "center",
    color: "#333",
    padding: 0
  },
  icon: {
    marginTop: 10,
    color: "#888888",
    fontSize: 42
  },
  trashIcon: {
    color: "#f44336"
  }
}));