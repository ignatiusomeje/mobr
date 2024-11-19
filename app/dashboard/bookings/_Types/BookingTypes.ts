export type initialStateBenefits = {
  benefits: benefitResponseType[];
  benefitsLoading: boolean;
  benefitsError: string;
  createBenefitLoading: boolean;
};

export type createBenefitInputType = {
  benefitTitle: string;
  benefitWriteUp: string;
};

export type benefitResponseType = {
  benefitId: number;
  benefitTitle: string;
  benefitWriteUp: string;
  created: Date | null;
  updated: Date | null;
};