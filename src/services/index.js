
import ENV from '../env';


const Fetch = async (url = '', { method = 'GET', headers, body } = {}) => {

  let req;
  let res;
  const now = +new Date();

  body = JSON.stringify(body);
  console.log(`fetch ${method} ${url} init ${body ? `- body:${body.substr(0,32)}...`:''}`);
  try { req = await fetch(url, {method, headers, body}); }
  catch(error) {
    console.warn(`fetch to ${url} error ${error}`);
    return { status: 0, error: 'fetch error', message: error.message };
  }

  try {
    res = await req.text();
    res = JSON.parse(res);
  }
  catch (error) {
    console.warn(`fetch to ${url} error ${error}`);
  }

  console.log(`fetch res ${res ? JSON.stringify(res).substr(0,32)+'...':''}`);
  if (req.status >= 300 && !res.status) {
    res = {status: req.status, error: req.statusText, message: res};
    console.warn(`fetch to ${url} error ${res.error}`);
  }

  console.log(`fetch end (took:${((+new Date())-now)}ms)`);
  return res;
};



export default class Services {


  static async GetCategories() {

    const data = await Fetch( ENV.API.CATEGORIES );
    return data.categories || [];
  }


  static async GetProducts() {

    const data = await Fetch( ENV.API.PRODUCTS );
    return data.products || [];
  }
}