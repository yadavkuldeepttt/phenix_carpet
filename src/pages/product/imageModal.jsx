import { IoMdClose } from "react-icons/io";

const ImageModal = ({ setShowModal, product }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
    <div className="relative w-[90%] max-w-md bg-white rounded-lg p-4 shadow-lg">
      <button
        onClick={() => setShowModal(false)}
        className="absolute right-3  top-2 text-gray-600 hover:text-gray-800"
      >
        <IoMdClose />
      </button>
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-auto  rounded-lg object-contain"
      />
    </div>
  </div>
);

export default ImageModal;
