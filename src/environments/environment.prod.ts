export interface env {
  apiUrl: string;
  production: boolean;
}

export const environment: env = {
  production: true,
  apiUrl: 'http://localhost:5286/api',
};
