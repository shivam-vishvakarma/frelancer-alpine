"use client";

import { useModal } from "@/hooks/context/modalContext";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRouter } from "next/navigation";

export default function Modal() {
  const { isOpen, closeModal } = useModal();
  const router = useRouter();

  const handleCompleteProfile = () => {
    router.push("/explore");
    closeModal();
  };
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      transition
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50">
        <DialogPanel className="max-w-lg space-y-4 border-2 border-primary-dark bg-primary-light rounded-xl shadow-xl p-5">
          <DialogTitle className="font-bold text-red-500">
            Action Required
          </DialogTitle>
          <Description>Complete Your Profile</Description>
          <p>
            Your profile is incomplete. Please complete at least 60% profile to
            access the full features of our platform.
          </p>
          <div className="flex gap-4">
            <button
              onClick={closeModal}
              className="bg-red-400 px-4 py-2 rounded-lg text-white font-semibold"
            >
              Complete Later
            </button>
            <button
              onClick={handleCompleteProfile}
              className="bg-lime-400 px-4 py-2 rounded-lg text-white font-semibold"
            >
              Complete Now
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
