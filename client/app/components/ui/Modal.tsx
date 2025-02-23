export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md max-w-lg w-full">
          <button onClick={onClose} className="text-red-500 mb-4">Fermer</button>
          {children}
        </div>
      </div>
    );
  }
  