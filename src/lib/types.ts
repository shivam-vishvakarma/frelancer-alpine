export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Stats = {
  title: string;
  value: string;
};

export type Domain = {
  id: string;
  title: string;
  slug: string;
};

export type User = {
  name: string;
};

export type bread = {
  name: string;
  slug?: string;
  query?: string;
};

export type Company = {
  logo: string;
  name: string;
  slug: string;
  domains: string[];
  location: string;
  workingTime: string;
  ratings: number;
  reviews: number;
  description: string;
  portfolio: string[];
};

export type CompanyInfoData = {
  companyName: string;
  companyWebsite: string;
  primaryContactName: string;
  primaryContactNumber: string;
  companyEmail: string;
};

export type City = {
  value: string;
  label: string;
};

export type OfficeAndEmployeeData = {
  yearOfIncorporation: string;
  noOfOffices: string;
  officeLocations: City[];
  noOfEmployees: string;
  companyTaxId: string;
  companyUSP: Usp[];
  aboutCompany: string;
};

export type Usp = {
  value: string;
  label: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  country: string;
  user_role: "1" | "2";
};

export type LoginResponse = {
  success: boolean;
  message: string;
  userdata: {
    name: string;
    email: string;
  };
};
