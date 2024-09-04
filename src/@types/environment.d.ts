export interface EnvUrl {
  registration: string
  loginResetCredentials: string
  login: string
  loginAction: string
  registrationAction: string
  resourcesPath: string
}

export interface EnvTitle {
  loginProfileTitle: string
  loginAccountTitle: string
  registerTitle: string
  emailForgotTitle: string
  confirmLinkIdpTitle: string
  emailLinkIdpTitle: string
}

export interface EnvPermission {
  usernameEditDisabled: boolean
  loginWithEmailAllowed: boolean
  registrationEmailAsUsername: boolean
  rememberMe: boolean
  resetPasswordAllowed: boolean
  password: boolean
  registrationAllowed: boolean
  registrationDisabled: boolean
  passwordRequired: boolean
}

export interface EnvLabel {
  firstName: string
  lastName: string
  username: string
  usernameOrEmail: string
  email: string
  password: string
  passwordConfirm: string
  rememberMe: string
  doForgotPassword: string
  doLogIn: string
  doSubmit: string
  noAccount: string
  doRegister: string
  backToLogin: string
  confirmLinkIdpContinue: string
  doClickHere: string
}

export interface EnvForm {
  loginUsername: string
  loginRememberMe: boolean
  selectedCredential: string
  registerFirstName: string
  registerLastName: string
  registerEmail: string
  registerUsername: string
}

export interface EnvUser {
  username: string
  email: string
  firstName: string
  lastName: string
}

export interface EnvValidation {
  firstName: string
  lastName: string
  email: string
  usernameOrPassword: string
  username: string
  password: string
  passwordConfirm: string
}

export interface EnvMessage {
  type: string
  sumary: string
}

export interface EnvInstruction {
  emailLinkIdp1: string
  emailLinkIdp2: string
  emailLinkIdp3: string
  emailLinkIdp4: string
  emailLinkIdp5: string
}

export interface EnvSocial {
  alias: string
  displayName: string
  loginUrl: string
}

export interface Environment {
  urls: EnvUrl
  titles: EnvTitle
  permissions: EnvPermission
  labels: EnvLabel
  forms: EnvForm
  user: EnvUser
  validations: EnvValidation
  message: EnvMessage
  social: EnvSocial[]
  instruction: EnvInstruction
}
