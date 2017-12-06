import isNumber from 'lodash.isnumber';

export default env =>
  Object.keys(env)
    .filter(key => key.indexOf('npm_package_config_') !== -1 || key === 'NODE_ENV')
    .map(key => ({ [key]: isNumber(env[key]) ? +env[key] : String(env[key]) }))
    .reduce(
      (result, item) => {
        const key = Object.keys(item)[0];

        return {
          ...result,
          [`process.env.${key.replace('npm_package_config_', '').toUpperCase()}`]: JSON.stringify(item[key]),
        };
      },
      {}
    );
