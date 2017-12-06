import extractPackageConfig from '../index';

const processEnv = {
  npm_package_config_domain: 'localhost',
  npm_package_config_port: 3000,
  NODE_ENV: 'production',
  another_env_key: 'another_env_value'
};

test('adds 1 + 2 to equal 3', () => {
  expect(extractPackageConfig(processEnv)).toEqual({
    NODE_ENV: 'production',
    DOMAIN: 'localhost',
    PORT: 3000,
  });
});
