import isNumber from 'lodash.isnumber';

export default env =>
  Object.keys(env)
    .filter(key => key.indexOf('npm_package_config_') !== -1)
    .reduce(
      (result, key) => ({
        ...result,
        [key]: isNumber(env[key]) ? +env[key] : String(env[key]),
      }),
      {}
    );
