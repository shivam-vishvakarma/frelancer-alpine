"use client";

import FileInput from "@/components/FileInput";
import {
  getCommonUsp,
  getLocations,
} from "@/lib/serverActions/dataFetchingActions";
import { City, CompanyInfoData, OfficeAndEmployeeData, Usp } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Select, { MultiValue } from "react-select";
import CreatableSelect from "react-select/creatable";

const companyInfoDataInitial = {
  companyName: "",
  companyWebsite: "",
  primaryContactName: "",
  primaryContactNumber: "",
  companyEmail: "",
};

const officeAndEmployeeDataInitial = {
  yearOfIncorporation: "",
  noOfOffices: "",
  officeLocations: [],
  noOfEmployees: "",
  companyTaxId: "",
  companyUSP: [],
  aboutCompany: "",
};

export default function CompanyOnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [locationOptions, setLocationOptions] = useState<City[]>();
  const [uspOptions, setUspOptions] = useState<Usp[]>();
  const [companyInfoData, setCompanyInfoData] = useState<CompanyInfoData>(
    companyInfoDataInitial
  );
  const [officeAndEmployeeData, setOfficeAndEmployeeData] =
    useState<OfficeAndEmployeeData>(officeAndEmployeeDataInitial);
  const [credentials, setCredentials] = useState([
    { title: "", description: "", file: null },
  ]);
  const [awards, setAwards] = useState([
    { title: "", description: "", file: null },
  ]);

  const handleCompanyInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyInfoData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOfficeAndEmployeeChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.name, e.target.value);

    setOfficeAndEmployeeData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = () => {
    localStorage.setItem("companyInfoData", JSON.stringify(companyInfoData));
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSave = () => {
    router.push(`/dashboard`);
  };

  const handleAddCredential = () => {
    setCredentials([
      ...credentials,
      { title: "", description: "", file: null },
    ]);
  };

  const handleAddAward = () => {
    setAwards([...awards, { title: "", description: "", file: null }]);
  };

  const handleRemoveCredential = (index: number) => {
    const newCredentials = credentials.filter((_, i) => i !== index);
    setCredentials(newCredentials);
  };

  const handleRemoveAward = (index: number) => {
    const newAwards = awards.filter((_, i) => i !== index);
    setAwards(newAwards);
  };

  useEffect(() => {
    getLocations().then((locations) => {
      setLocationOptions(locations);
    });
    getCommonUsp().then((usps) => {
      setUspOptions(usps);
    });
    setCompanyInfoData(
      JSON.parse(
        localStorage.getItem("companyInfoData") ||
          JSON.stringify(companyInfoDataInitial)
      )
    );
  }, []);

  return (
    <main className="bg-bgMain">
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10 gap-8">
        <h3 className="text-5xl font-semibold text-primary-dark font-rokkitt">
          Create Company Profile
        </h3>
        {/* Progress Indicator */}
        <div className="w-full max-w-md md:max-w-5xl p-2 md:p-6 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <div
                id="step1"
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-sm md:text-base ${currentStep >= 1 ? "bg-primary-dark text-white" : "bg-gray-300 text-gray-500"}`}
              >
                1
              </div>
              <span className="ml-2 text-gray-700 text-sm md:text-base">
                Company Info
              </span>
            </div>
            <div className="flex items-center">
              <div
                id="step2"
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-sm md:text-base ${currentStep >= 2 ? "bg-primary-dark text-white" : "bg-gray-300 text-gray-500"}`}
              >
                2
              </div>
              <span className="ml-2 text-gray-700 text-sm md:text-base">
                Portfolio
              </span>
            </div>
            <div className="flex items-center">
              <div
                id="step3"
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-sm md:text-base ${currentStep >= 3 ? "bg-primary-dark text-white" : "bg-gray-300 text-gray-500"}`}
              >
                3
              </div>
              <span className="ml-2 text-gray-700 text-sm md:text-base">
                Office And Employees
              </span>
            </div>
            <div className="flex items-center">
              <div
                id="step4"
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-sm md:text-base ${currentStep >= 4 ? "bg-primary-dark text-white" : "bg-gray-300 text-gray-500"}`}
              >
                4
              </div>
              <span className="ml-2 text-gray-700 text-sm md:text-base">
                Upload Documents
              </span>
            </div>
            <div className="flex items-center">
              <div
                id="step5"
                className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full text-sm md:text-base ${currentStep >= 5 ? "bg-primary-dark text-white" : "bg-gray-300 text-gray-500"}`}
              >
                5
              </div>
              <span className="ml-2 text-gray-700 text-sm md:text-base">
                Credentials & Awards
              </span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="w-full max-w-md md:max-w-5xl p-6 md:p-10 bg-white rounded-lg shadow-lg">
          {/* company info */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-4">
                Company Information
              </h2>
              <form className="grid grid-cols-12 gap-5">
                <div className="col-span-6 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={companyInfoData.companyName}
                    onChange={handleCompanyInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="Company Name Inc."
                  />
                </div>
                <div className="col-span-6 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Company Website URL
                  </label>
                  <input
                    type="text"
                    name="companyWebsite"
                    value={companyInfoData.companyWebsite}
                    onChange={handleCompanyInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="https://companyname.com"
                  />
                </div>
                <div className="col-span-6 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Primary Contact Name
                  </label>
                  <input
                    type="text"
                    name="primaryContactName"
                    value={companyInfoData.primaryContactName}
                    onChange={handleCompanyInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="Aman Singh"
                  />
                </div>
                <div className="col-span-6 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Primary Contact Number
                  </label>
                  <input
                    type="text"
                    name="primaryContactNumber"
                    value={companyInfoData.primaryContactNumber}
                    onChange={handleCompanyInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="col-span-6 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Company Email
                  </label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={companyInfoData.companyEmail}
                    onChange={handleCompanyInfoChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="name@company.com"
                  />
                </div>
              </form>
            </div>
          )}
          {/* portfolio */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-4">
                Portfolio
              </h2>
              <form id="formStep1" className="grid grid-cols-12 gap-5">
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">Company Logo</h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Company Banner
                  </h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Portfolio Images
                  </h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Portfolio Video
                  </h2>
                  <FileInput />
                </div>
                <div className="col-span-8 space-y-2 group">
                  <label className="text-gray-700 text-sm md:text-base flex items-center">
                    Company Unique Strength/ USP
                    <small className="ml-2 hidden group-hover:inline text-yellow-500">
                      Choose From Dropdown or Add New
                    </small>
                  </label>
                  <CreatableSelect
                    isMulti
                    value={officeAndEmployeeData.companyUSP}
                    maxMenuHeight={100}
                    onChange={(selected: MultiValue<Usp>) => {
                      setOfficeAndEmployeeData((prev) => ({
                        ...prev,
                        companyUSP: selected as Usp[],
                      }));
                    }}
                    options={uspOptions}
                  />
                </div>
                {/* <div className="col-span-12 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Company USP&apos;s
                  </h2>
                  <textarea
                    name="input"
                    id="input"
                    rows={5}
                    maxLength={256}
                    required
                    placeholder="Write about your company usp's..."
                    className="rounded-lg p-4 bg-black/5 border border-solid focus:ring-0 focus:border-primary-dark border-primary-dark font-mono font-medium text-sm w-4/5"
                  ></textarea>
                </div> */}
              </form>
            </div>
          )}
          {/* office and employee */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-4">
                Office And Employees
              </h2>
              <form id="formStep2" className="grid grid-cols-12 gap-5">
                <div className="col-span-4 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Year of Incorporation
                  </label>
                  <input
                    type="text"
                    name="yearOfIncorporation"
                    value={officeAndEmployeeData.yearOfIncorporation}
                    onChange={handleOfficeAndEmployeeChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="2020"
                  />
                </div>
                <div className="col-span-4 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    No. of offices
                  </label>
                  <input
                    type="text"
                    name="noOfOffices"
                    value={officeAndEmployeeData.noOfOffices}
                    onChange={handleOfficeAndEmployeeChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="1"
                  />
                </div>
                <div className="col-span-4 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Select Office Locations
                  </label>
                  <Select
                    options={locationOptions}
                    name="officeLocations"
                    value={officeAndEmployeeData.officeLocations}
                    onChange={(selected: MultiValue<City>) => {
                      setOfficeAndEmployeeData((prev) => ({
                        ...prev,
                        officeLocations: selected as City[],
                      }));
                    }}
                    isMulti
                  />
                </div>
                <div className="col-span-4 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    No. of Employees
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="10"
                  />
                </div>
                <div className="col-span-4 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    Company Tax id/ GST Number
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    placeholder="GSTIN1234567890"
                  />
                </div>

                <div className="col-span-12 space-y-2">
                  <label className="block text-gray-700 text-sm md:text-base">
                    About Your Company
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    rows={5}
                    placeholder="Write about your company..."
                  ></textarea>
                </div>
              </form>
            </div>
          )}
          {/* upload document */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-4">
                Upload Documents
              </h2>
              <form id="formStep3" className="grid grid-cols-12 gap-5">
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">Revenue</h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">Profit & Loss</h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">Balance Sheet</h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Company Registration Certificate
                  </h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Company PAN Card
                  </h2>
                  <FileInput />
                </div>
                <div className="col-span-6 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Company GST Certificate
                  </h2>
                  <FileInput />
                </div>
              </form>
            </div>
          )}
          {/* credentials and awards */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-lg md:text-2xl font-semibold mb-4">
                Credentials & Awards
              </h2>
              <form id="formStep4" className="grid grid-cols-12 gap-5">
                <div className="col-span-12 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Company Credentials
                  </h2>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          File
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {credentials.map((credential, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-dark focus:border-primary-dark"
                              placeholder="Title"
                              value={credential.title}
                              onChange={(e) => {
                                const newCredentials = [...credentials];
                                newCredentials[index].title = e.target.value;
                                setCredentials(newCredentials);
                              }}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-dark focus:border-primary-dark"
                              placeholder="Description"
                              value={credential.description}
                              onChange={(e) => {
                                const newCredentials = [...credentials];
                                newCredentials[index].description =
                                  e.target.value;
                                setCredentials(newCredentials);
                              }}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <FileInput />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              type="button"
                              className="text-red-600 hover:text-red-900"
                              onClick={() => handleRemoveCredential(index)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-primary-dark text-white rounded"
                    onClick={handleAddCredential}
                  >
                    Add Credential
                  </button>
                </div>
                <div className="col-span-12 space-y-2">
                  <h2 className="block text-gray-700 text-xl">
                    Company Awards
                  </h2>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          File
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {awards.map((award, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-dark focus:border-primary-dark"
                              placeholder="Title"
                              value={award.title}
                              onChange={(e) => {
                                const newAwards = [...awards];
                                newAwards[index].title = e.target.value;
                                setAwards(newAwards);
                              }}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <input
                              type="text"
                              className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary-dark focus:border-primary-dark"
                              placeholder="Description"
                              value={award.description}
                              onChange={(e) => {
                                const newAwards = [...awards];
                                newAwards[index].description = e.target.value;
                                setAwards(newAwards);
                              }}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <FileInput />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button
                              type="button"
                              className="text-red-600 hover:text-red-900"
                              onClick={() => handleRemoveAward(index)}
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    className="mt-2 px-4 py-2 bg-primary-dark text-white rounded"
                    onClick={handleAddAward}
                  >
                    Add Award
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button
              className="px-4 py-2 disabled:bg-gray-300 bg-primary-dark disabled:text-gray-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
              disabled={currentStep === 1}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-primary-dark text-white rounded transition duration-300 hover:bg-primary-dark"
              onClick={currentStep === 5 ? handleSave : handleNext}
            >
              {currentStep === 5 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// function LocationChip({
//   location,
//   onDel,
// }: {
//   location: string;
//   onDel: () => void;
// }) {
//   return (
//     <div className="inline-flex items-center justify-between space-x-1 bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-sm">
//       <svg
//         onClick={onDel}
//         className="cursor-pointer h-4 w-4 text-green-900"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M6 18L18 6M6 6l12 12"
//         />
//       </svg>
//       <div className="select-none">{location}</div>
//     </div>
//   );
// }
