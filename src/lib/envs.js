const getEnv = (name) => {
  const variable = process.env[name];
  if (variable === undefined || variable === null || variable === '') {
    throw new Error(`Missing environmental variable "${name}".`);
  }
  return variable;
};

export const ENVS = {
  WEATHER_API_KEY: getEnv('REACT_APP_WEATHER_API_KEY'),
  GEOLOCATION_API_KEY: getEnv('REACT_APP_GEOLOCATION_API_KEY'),
}
