function isProdEnv() {
  return process.env.NODE_ENV === 'production';
}

export const HOST = isProdEnv() ? 'http://123.57.164.143:8099/jzsf' : 'http://test.host.com/jzsf';