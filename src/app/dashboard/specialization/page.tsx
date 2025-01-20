import Pagination from "@/components/Pagination";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { FaGears, FaTrash } from "react-icons/fa6";

export default function SpecializationPage() {
  return (
    <div className="flex bg-bgMain">
      <main className="flex-1 h-screen overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap">
            <div className="w-full pr-0">
              <p className="text-3xl text-primary-dark pb-5 flex items-center font-semibold">
                <FaGears className="mr-2" /> Manage Specialization
              </p>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center text-xl">
                  <h2 className="text-2xl text-primary-dark font-bold">
                    Specialization List
                  </h2>
                  <Link
                    href={"/dashboard/specialization/add"}
                    className="bg-primary-dark text-white text-lg font-semibold py-2 px-4 rounded"
                  >
                    Add Specialization
                  </Link>
                </div>
                <div className="w-full mt-6">
                  <table className="w-full border">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500 w-10">
                          <div className="flex items-center">ID</div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                          <div className="flex items-center">Name</div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500 w-32">
                          <div className="flex items-center">Price</div>
                        </th>
                        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500 w-32">
                          <div className="flex items-center">Actions</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-gray-100 border-b text-sm text-gray-600">
                        <td className="p-2 border-r">1</td>
                        <td className="p-2 border-r">
                          Mobile Developent &gt; IOS &gt; Basic
                        </td>
                        <td className="p-2 border-r">5000₹</td>
                        <td className="p-2 border-r space-x-2">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
                            <FaEdit />
                          </button>
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 border-b text-sm text-gray-600">
                        <td className="p-2 border-r">1</td>
                        <td className="p-2 border-r">
                          Mobile Developent &gt; IOS &gt; Standard
                        </td>
                        <td className="p-2 border-r">20,000₹</td>
                        <td className="p-2 border-r space-x-2">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
                            <FaEdit />
                          </button>
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-gray-100 border-b text-sm text-gray-600">
                        <td className="p-2 border-r">1</td>
                        <td className="p-2 border-r">
                          Mobile Developent &gt; IOS &gt; Premium
                        </td>
                        <td className="p-2 border-r">50,000₹</td>
                        <td className="p-2 border-r space-x-2">
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded">
                            <FaEdit />
                          </button>
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded">
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
