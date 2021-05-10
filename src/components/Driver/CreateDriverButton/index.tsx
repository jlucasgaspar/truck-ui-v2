import { Fragment, useCallback, useState } from "react";
import { CreateDriverForm } from "components/Driver";
import { OrangeButton, Modal } from "components/_shared";

export const CreateDriverButton: React.FC = () => {
  const [modalIsOpen, setOpenModal] = useState<boolean>(false);

  const openModal = useCallback(() => setOpenModal(true), [setOpenModal]);
  const closeModal = useCallback(() => setOpenModal(false), [setOpenModal]);

  return (
    <Fragment>
      <OrangeButton text="Criar motorista" onClick={openModal} />
      <Modal open={modalIsOpen} onClose={closeModal}>
        <CreateDriverForm />
      </Modal>
    </Fragment>
  );
}