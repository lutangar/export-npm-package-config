import extractPackageConfig from '../index';

test('adds 1 + 2 to equal 3', () => {
  const processEnv = {
    npm_package_config_domain: 'localhost',
    npm_package_config_port: 3000,
    NODE_ENV: 'production',
    another_env_key: 'another_env_value',
    npm_package_devdependencies_export_npm_package_config: "0.0.7",
  };

  expect(extractPackageConfig(processEnv)).toEqual({
    NODE_ENV: 'production',
    DOMAIN: 'localhost',
    PORT: 3000,
    npm_package_config_domain: 'localhost',
    npm_package_config_port: 3000,
    another_env_key: 'another_env_value',
    npm_package_devdependencies_export_npm_package_config: "0.0.7",
  });
});
