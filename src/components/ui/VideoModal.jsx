import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export default function VideoModal({ trigger, videoUrl }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">{trigger}</span>

      <Modal
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        className="mx-auto mt-24 w-[92vw] max-w-4xl outline-none"
        overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center"
      >
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
          >
            ✕
          </button>
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={videoUrl}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
