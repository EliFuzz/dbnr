export const reduceReducers = (...reducers) => (previous, current) =>
  reducers.reduce((p, r) => r(p, current), previous);
