export type OrganizationDetail = {
  index: number;
  header: {
    tenure: string;
    position: string;
    organization: string;
    logo: string;
  };
  content: string[];
};
