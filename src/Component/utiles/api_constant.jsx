export const BASE_URL = "https://mobile.orbitsys.com/..";

export const API_HEADER = {
  "Content-Type": "application/json",
  "api-key": "04577BA6-3E32-456C-B528-E41E20D28D79",
};

export const fetchPendingData = `${BASE_URL}/....`;

export const LOG_IN_BASE_URL =
  "https://orbitsys-demo-apimanagementservice.azure-api.net/OrbitsysIdentityApi/api";

const businessOwnerCode = "ISUZU";
const brandCode = "ISUZU";

export const LOGIN_HEADER = {
  Accept: "application/json",
  "Content-Type": "application/json",
  countryCode: "IN",
  BusinessOwnerCode: businessOwnerCode,
  "x-api-key": "6138571815404a49a8bc1339d2e16aca",
};

export const submitCredential = `${LOG_IN_BASE_URL}/Identity/AppAuthenticate`;
