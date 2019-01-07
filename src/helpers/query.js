
export const Parse = (query = '') => {
  if (!query) return {};
  const qs = query.replace('?','').split('&');
  const params = {}, d = decodeURIComponent;
  let pair;
  for (let i = qs.length - 1; i >= 0; i--) {
    pair = qs[i].split('=');
    params[d(pair[0])] = d(pair[1] || '');
  }
  return params;
};

export const Stringify = (params = {}) => {
  return Object.keys(params || {}).map(k => params[k] ? `${k}=${params[k]}`:'-').join('&').replace(/-&|&-/g, '')
};