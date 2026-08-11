/**
 * Central Configuration File for I M Associates Tax and Law Practitioner
 * All contact information, phone numbers, WhatsApp numbers, email, and address are centralized here.
 */

export const business = {
  name: "I M Associates",
  tagline: "Tax and Law Practitioner",
  shortDescription: "Professional tax, accounting, and legal assistance with a focus on reliable service, accurate documentation, and clear guidance.",
  
  phone: "+91 95387 87168",
  phoneRaw: "+919538787168",
  
  whatsapp: "+91 95387 87168",
  whatsappRaw: "919538787168",
  defaultWhatsAppMessage: "Hello I M Associates, I would like to know more about your tax and legal services.",
  
  email: "bkmasankatti@gmail.com",
  officeAddress: "Near Nagar Sabha Office, F.T.G. Building",
  cityState: "Haveri - 581110, Karnataka",
  
  hours: "Monday - Saturday: 9:30 AM - 6:30 PM",
  hoursDetail: [
    { days: "Monday - Saturday", hours: "9:30 AM - 6:30 PM" },
    { days: "Sunday", hours: "Closed (Prior appointment required for urgent cases)" }
  ],
  
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15446.577943366487!2d75.3912953!3d14.7955513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb98d35e5d36e2f%3A0x6b6c0032b4bfa25!2sHaveri%2C%20Karnataka%20581110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  introStatement: "I M Associates provides professional tax, accounting and legal services with a focus on clear guidance, accurate work and dependable client support."
};

export const getWhatsAppLink = (message) => {
  const text = encodeURIComponent(message || business.defaultWhatsAppMessage);
  return `https://wa.me/${business.whatsappRaw}?text=${text}`;
};
