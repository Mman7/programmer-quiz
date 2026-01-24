import { ModelName, useConfirmModal } from "@/src/store/useComfirmModalStore";

interface ComfirmModalProps {
  title: string;
  description: string;
  callback: () => void;
  modalName: ModelName;
}

export default function ComfirmModal({
  callback,
  description,
  modalName,
  title,
}: ComfirmModalProps) {
  const { closeModal, currentShowingModalName } = useConfirmModal();

  const handleRestart = () => {
    callback();
    closeModal();
  };

  return (
    <dialog
      open={currentShowingModalName === modalName}
      id="my_modal_3"
      className="modal"
    >
      <div className="modal-box bg-white/5 backdrop-blur-xl">
        <h3 className="mb-4 text-lg font-bold">{title}</h3>
        <p>{description}</p>

        <form method="dialog">
          {/*  close the modal */}
          <button
            onClick={() => closeModal()}
            className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
          >
            ✕
          </button>
        </form>
        <section className="mt-3 flex justify-end gap-3 p-3">
          <button className="btn" onClick={() => closeModal()}>
            Cancel
          </button>
          <button className="btn btn-secondary" onClick={() => handleRestart()}>
            Confirm
          </button>
        </section>
      </div>
    </dialog>
  );
}
