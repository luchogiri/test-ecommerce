
import { createLogger } from 'redux-logger';

const Logger = () => {
  return createLogger({
    predicate: (getState, action) => process.env.NODE_ENV === 'development',
    collapsed: true,
    duration: true,
  });
};

export default Logger;