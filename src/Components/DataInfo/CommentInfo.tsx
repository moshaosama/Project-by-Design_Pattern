import { useState } from "react";
import Modal from "../Modal";

interface commentInfoData {
  comment?: {
    name: string;
    email: string;
    body: string;
  }[];
}

const CommentInfo = ({ comment }: commentInfoData) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <div className="grid grid-cols-3 mt-2 gap-5 overflow-y-scroll h-[86.8vh]">
        {comment?.map((comment, index) => (
          <div className="border-[1px] border-gray-300 p-5">
            <div className="flex gap-3 justify-between">
              <p className="font-bold">Comment:</p>
              <h1 key={index}>{comment.name}</h1>
              <button
                className="border-[1px] border-solid cursor-pointer"
                onClick={handleOpenModal}
              >
                Open Modal
              </button>

              {openModal && (
                <Modal>
                  <Modal.Title>Modal 1</Modal.Title>
                  <Modal.Paragraph>Modal 1</Modal.Paragraph>
                  <Modal.Buttons>
                    <button>Cancel</button>
                    <button>Edit</button>
                  </Modal.Buttons>
                </Modal>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommentInfo;
