import { Button, ButtonProps, CircularProgress } from "@material-ui/core";

type IButtonProps = ButtonProps & {
  text: string;
  loading?: boolean;
}

export const OrangeButton: React.FC<IButtonProps> = ({ text, type, loading, ...props }) => (
  <Button
    fullWidth
    type={type || "submit"}
    disabled={loading}
    color="primary"
    variant="contained"
    {...props}
  >
    {loading ? <CircularProgress size={23} /> : text}
  </Button>
);