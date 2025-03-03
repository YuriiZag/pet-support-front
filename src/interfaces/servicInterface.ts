

export interface IService {
  _id: string;
  serviceName: string;
  workingTime: { [key: string]: string };
  address: string;
  email: string;
  phoneNumber: string;
  logo: string;
}
