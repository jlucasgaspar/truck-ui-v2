import { useSelector } from "react-redux";
import { IRootState } from "store";
import { useToast } from "hooks/toast";

export const HomePage: React.FC = () => {
  const { userState, companyState } = useSelector((state: IRootState) => state);
  const { toast } = useToast();

  const msg = 'Parabens! Voce foi adicionado no APP Truckify, comece a usar agora mesmo'

  return (
    <>
      <button onClick={() => toast.error(msg)}>
        Testar
      </button>
      <br />
      {JSON.stringify(userState)}
      <br />
      <hr />
      <br />
      {JSON.stringify(companyState)}
    </>
  );
}