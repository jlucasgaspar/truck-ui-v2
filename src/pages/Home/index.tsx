import { handleToast } from 'utils/toast';

export const HomePage: React.FC = () => {
  const msg = 'o motorista X foi adicionado o motorista X ta X foi adicionado.'
  return (
    <>
      <h1>Oiii</h1>
      <button onClick={() => handleToast.error(msg)}>
        Testar
    </button>
    </>
  );
}