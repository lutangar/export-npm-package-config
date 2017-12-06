import isNumber from 'lodash.isnumber';

export default env =>
  Object.keys(env)
    .filter(key => key.indexOf('npm_package_config') !== -1)
    .map(key => ({ [key]: isNumber(env[key]) ? +env[key] : String(env[key]) }))
    .reduce(
      (result, item) => {
        const key = Object.keys(item)[0];

        return {
          ...result,
          [key.replace('npm_package_config_', '').toUpperCase()]: item[key],
        };
      },
      { NODE_ENV: env.NODE_ENV }
    );
