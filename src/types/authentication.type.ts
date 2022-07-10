export type SignInRequest = {
    email: string,
    password: string
}

export type SignUpRequest = {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export type ErrorResponse = {
    errors?: string[],
    message: string
}

export type SignInResponse = {
    token: string,
    refreshToken: string
}