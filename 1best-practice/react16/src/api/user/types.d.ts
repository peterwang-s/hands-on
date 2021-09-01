interface Tokens {
    country_code: string;
    access: string;
    redirectUri: string;
    region: string;
    expiration: string;
    countryState: string;
}

interface TokensParams {
    json_response?: boolean;
    client_id?: string;
    token?: string;
    password?: string;
    redirect_uri?: string;
    registration?: string;
    type?: string;
    action?: string;
    state?: string;
}
