export interface env {
  apiUrl: string;
  production: boolean;
}

export const environment: env = {
  production: true,
  apiUrl: 'https://upkeep-api.duckdns.org/api',
};
