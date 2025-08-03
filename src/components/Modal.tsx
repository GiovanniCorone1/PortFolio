import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
      >
        Ver más
      </Button>
    <Transition
      appear
      show={isOpen}>
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave='ease-in duration-200' leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          </Transition.Child>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave='ease-in duration-200' leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
              <Dialog.Panel
                transition
                className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                >
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                Instituto ELITEC
              </DialogTitle>
              <ul className="mt-2 text-sm/6 text-white/50">
                <p>
                  Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                  order.
                </p>
                <li>1.Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.</li>
                <li>2.Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.</li>
                <li>3.Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.</li>
              </ul>
                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={close}
                      className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm font-semibold"
                    >
                      Cerrar
                    </button>
                  </div>
                   <button
                    aria-label="Cerrar modal"
                    onClick={close}
                    className="absolute top-3 right-3 text-xl font-bold leading-none bg-transparent border-none cursor-pointer text-gray-500 dark:text-gray-300"
                  >
                    ×
                  </button>   
            </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      </Transition>
    </>
  )
}