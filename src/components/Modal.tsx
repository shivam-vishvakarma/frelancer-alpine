"use client";

import { useModal } from "@/hooks/context/modalContext";
import { getTitleFromSlug } from "@/lib/utils/utils";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useRouter, useSearchParams } from "next/navigation";
import TimeLine from "./TimeLine";
import { FaIndianRupeeSign, FaPlus } from "react-icons/fa6";
import { useState } from "react";
import * as motion from "motion/react-client";
import { MdCancel } from "react-icons/md";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Modal() {
  const { isOpen, closeModal, variant, isClosable, images } = useModal();

  return (
    <Dialog
      open={isOpen}
      onClose={isClosable ? closeModal : () => {}}
      className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      transition
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-50">
        {variant === "profileCompletion" && (
          <ProfileCompletion closeModal={closeModal} />
        )}
        {variant === "planForm" && <PlanEditForm closeModal={closeModal} />}
        {variant === "imageCarousel" && (
          <ImageCarousel images={images} closeModal={closeModal} />
        )}
      </div>
    </Dialog>
  );
}

function ProfileCompletion({ closeModal }: { closeModal: () => void }) {
  const router = useRouter();
  const handleCompleteProfile = () => {
    closeModal();
    router.push("/dashboard/specialization/add");
  };
  return (
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
  );
}

function PlanEditForm({ closeModal }: { closeModal: () => void }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showMilestoneForm, setShowMilestoneForm] = useState(false);

  const handleClose = () => {
    router.push(
      `/dashboard/specialization/add?domain=${searchParams.get("domain")}&category=${searchParams.get("category")}`
    );
    closeModal();
  };

  const handleSave = () => {
    router.push(
      `/dashboard/specialization/add?domain=${searchParams.get("domain")}&category=${searchParams.get("category")}`
    );
    closeModal();
  };

  const handleAddMilestone = () => {
    setShowMilestoneForm(false);
  };

  return (
    <DialogPanel className="max-w-xl space-y-4 border-2 border-primary-dark bg-primary-light rounded-xl shadow-xl p-5">
      <DialogTitle className="font-bold text-primary-dark">
        Add Price For Plan: <br />
        {getTitleFromSlug(searchParams.get("domain") as string)} &gt;{" "}
        {getTitleFromSlug(searchParams.get("category") as string)} &gt;{" "}
        {getTitleFromSlug(searchParams.get("plan") as string)}
      </DialogTitle>
      <div className="max-h-[60vh] overflow-y-auto">
        <div className="sticky top-0 bg-primary-light z-10 py-4">
          <fieldset className="ms-14 relative">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-9 ring-8 ring-primary-dark">
              <FaIndianRupeeSign className="text-primary-dark" />
            </span>
            <label className="text-xl text-primary-dark font-semibold">
              Plan Total Price:
              <input
                type="text"
                className="p-0 rounded ms-4 focus:border-primary-dark focus:ring-0 w-20"
              />
            </label>
          </fieldset>
        </div>
        <div className="px-4 mx-4">
          <TimeLine />
        </div>
        {showMilestoneForm ? (
          <form
            onSubmit={handleAddMilestone}
            className="px-4 text-primary-dark space-y-2 border border-primary-dark pb-2 mx-2 rounded-lg shadow-lg"
          >
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="title" className="text-lg">
                Title:
              </label>
              <input
                id="title"
                type="text"
                className="p-1 focus:ring-0 focus:border-primary-dark"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="description" className="text-lg">
                Description:
              </label>
              <textarea
                id="description"
                className="p-1 focus:ring-0 focus:border-primary-dark"
              />
            </fieldset>
            <div className="flex gap-2">
              <fieldset className="basis-1/2 flex gap-2 flex-col">
                <label htmlFor="date" className="text-lg">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  className="p-1 focus:ring-0 focus:border-primary-dark"
                />
              </fieldset>
              <fieldset className="basis-1/2 flex gap-2 flex-col">
                <label htmlFor="amount" className="text-lg">
                  Amount:
                </label>
                <input
                  type="text"
                  id="amount"
                  className="p-1 focus:ring-0 focus:border-primary-dark"
                />
              </fieldset>
            </div>
            <div className="flex gap-2 justify-end">
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                onClick={() => setShowMilestoneForm(false)}
                className="bg-secondary px-2 py-1 rounded-lg text-white font-semibold"
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ y: 2 }}
                className="bg-primary-dark px-2 py-1 rounded-lg text-white font-semibold"
              >
                Add Milestone
              </motion.button>
            </div>
          </form>
        ) : (
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ y: 5 }}
            onClick={() => setShowMilestoneForm(true)}
            className="ms-14 relative"
          >
            <span className="absolute flex items-center justify-center size-5 bg-white rounded-full -start-8 ring-4 ring-primary-dark">
              <FaPlus className="text-primary-dark" />
            </span>
            <span className="text-primary-dark font-semibold">
              Add Milestone
            </span>
          </motion.button>
        )}
      </div>
      <div className="flex gap-4">
        <button
          onClick={handleClose}
          className="bg-red-700 px-4 py-2 rounded-lg text-white font-semibold"
        >
          Close
        </button>
        <button
          onClick={handleSave}
          className="bg-primary-dark px-4 py-2 rounded-lg text-white font-semibold"
        >
          Save
        </button>
      </div>
    </DialogPanel>
  );
}

function ImageCarousel({
  images,
  closeModal,
}: {
  images: string[];
  closeModal: () => void;
}) {
  return (
    <div className="flex-1 h-full relative">
      <button
        onClick={closeModal}
        className="absolute top-0 right-0 rounded-full m-2 z-50"
      >
        <MdCancel size={30} className="text-white" />
      </button>
      <Carousel>
        {images.map((img, index) => (
          <Image alt="" width={1600} height={1200} key={index} src={img} className="w-full h-full object-contain" />
        ))}
      </Carousel>
    </div>
  );
}
