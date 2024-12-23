export type initialStateCustomers = {
  customers: customerResponse[];
  getAllCustomersLoading: boolean;
  getOneCustomerLoading: boolean;
  blockOneCustomerLoading: boolean;
  validateOneCustomerLoading: boolean;
  customer: customerResponse;
  getAllCustomersError: string;
  getOneCustomerError: string;
  validateOneCustomerError: string;
  blockOneCustomerError: string;
  showPopUp: boolean;
};

export type customerResponse = {
  id: number;
  title: string;
  fullName: string;
  email: string;
  role: string;
  isVerified: boolean;
  dob: string;
  isValidated: boolean;
  dateValidated: string;
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
  created: string;
  isActive: boolean;
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
  showOneCustomer: (id: number) => void;
  showPopUp: boolean;
};

export type customerType2 = {
  customers: customerResponse[];
  customer: customerResponse;
  closeShowOneCustomer: () => void;
  showOneCustomer: (id: number) => void;
  showPopUp: boolean;
};

export type CustomerInfoTypes = {
  showPopUp: boolean;
  customer: customerResponse;
  closeShowOneCustomer: () => void;
};

// export type customerResponseType= ResponseType && {
// D

// }
