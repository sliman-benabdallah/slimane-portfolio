const personalData = {
    name: import.meta.env.VITE_NAME,
    gitHub: import.meta.env.VITE_GITHUB,
    linkedIn: import.meta.env.VITE_LINKEDIN,
};

const emailConfig = {
    serviceID: import.meta.env.VITE_SERVICE_ID,
    templateID: import.meta.env.VITE_TEMPLATE_ID,
    publicKEY: import.meta.env.VITE_PUBLIC_KEY,
};

export { personalData, emailConfig };