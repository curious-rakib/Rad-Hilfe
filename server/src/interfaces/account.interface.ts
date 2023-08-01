interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  role: string;
}

interface OTP {
  email: string;
  otp: string;
}

export { User, OTP };
