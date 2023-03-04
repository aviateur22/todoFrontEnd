/**
 * Environment Schema
 */
export interface EnvironmentSchema {

  // Environment 
  production: boolean,

  // Nom environment
  name: string,

  // Domain
  domain: string,

  // Api path
  api: string
}