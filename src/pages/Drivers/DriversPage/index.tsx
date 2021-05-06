import { useState } from 'react';
import { CreateDriverForm } from 'components/Drivers';
import { Modal } from 'components/_shared/Modal';

export const DriversPage: React.FC = () => {
  const [createDriverModalIsOpen, setCreateDriverModalIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setCreateDriverModalIsOpen(true)}>
        Criar motorista
      </button>

      <Modal open={createDriverModalIsOpen} onClose={() => setCreateDriverModalIsOpen(false)}>
        <CreateDriverForm />
      </Modal>
    </>
  );
}