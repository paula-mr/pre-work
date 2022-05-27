import local from './local';

function configureEnvironment() {
  const hostName = window && window.location && window.location.hostname;

  if (hostName.startsWith('OTHER_ENV_URL')) {
    return {};
  }
  return local;
}

export default configureEnvironment;
