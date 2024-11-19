export type initialStateCustomers = {
  customers: customerResponse[];
  getAllCustomersLoading: boolean;
  getOneCustomerLoading: boolean;
  customer: customerResponse;
  getAllCustomersError: string;
  getOneCustomerError: string;
  showPopUp: boolean;
};

export type customerResponse = {
  id: number;
  title: string;
  fullName: string;
  email: string;
  role: string;
  created: Date | undefined;
  updated: Date | undefined;
  isVerified: boolean;
  dob: Date | undefined;
  isValidated: boolean;
  dateValidated: Date | undefined;
  streetAddress: string;
  // verificationToken: string;
  countryCode: string;
  phoneNumber: number;
  profileImageUrl: string;
  profileImagePublicId: string;
  frontDriverLisenceImageUrl: string;
  frontDriverLisencePublicId: string;
  backDriverLisenceImageUrl: string;
  backDriverLisenceImagePublicId: string;
};

export type customerInput = {
  isValidated?: boolean;
};

export type customerType = {
  customers: customerResponse[];
  customer: customerResponse;
  getAllCustomersLoading: boolean;
  tab: string;
  setTab: (tab: string) => void;
  closeShowOneCustomer: () => void;
  showOneCustomer: (id:number) => void;
  showPopUp:boolean
};

export type customerType2 = {
  customers: customerResponse[];
  customer: customerResponse;
  closeShowOneCustomer: () => void;
  showOneCustomer: (id:number) => void;
  showPopUp:boolean
};

export type CustomerInfoTypes = {
  showPopUp:boolean
  customer: customerResponse;
  closeShowOneCustomer: () => void;
};

// export type customerResponseType= ResponseType && {
// D

// }
