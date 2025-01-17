import React from 'react';

type ModalProps = {
  title: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, body, footer }) => {
  return (
    // <div className="modal">
    //   <div className="modal-header">{title}</div>
    //   <div className="modal-body">{body}</div>
    //   <div className="modal-footer">{footer}</div>
    // </div>
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">{title}</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500" id="modal-description">{body}</p>
              </div>
            </div>
          </div>
        </div>
        {footer && (
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {footer}
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Modal;
