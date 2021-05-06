import { useSelector } from 'react-redux';
import { IRootState } from 'store/store';
import { handleToast } from 'utils/toast';

export const HomePage: React.FC = () => {
  const { userState, companyState } = useSelector((state: IRootState) => state);
  const msg = 'Parabens! Voce foi adicionado no APP Truckify, comece a usar agora mesmo'

  return (
    <>
      <button onClick={() => handleToast.error(msg)}>
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