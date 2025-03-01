
import information from "../data";

export const siteConfig = {
  siteName: information.businessName,
  contact: {
    phone: information.phone,
    phoneDisplay: information.phoneDisplay,
    email: information.email,
    address: `${information.address}, ${information.city}, ${information.state} ${information.zipCode}`,
    workingHours: information.workingHours
  }
};

export default siteConfig;
