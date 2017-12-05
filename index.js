export default env =>
  Object.keys(env)
    .filter(key => key.indexOf('npm_package_config') !== -1)
    .map(key => ({
      [key.replace('npm_package_config_', '').toUpperCase()]: JSON.stringify(process.env[key]),
    }))
    .reduce(
      (result, item) => {
        const key = Object.keys(item)[0];
        Object.assign({}, result, { [key]: item[key] });
        return {
          result,
          [key]: item[key],
        };
      },
      { NODE_ENV: env.NODE_ENV }
    );
