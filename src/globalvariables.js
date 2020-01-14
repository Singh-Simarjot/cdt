var localGlobalConstants = {
  BASE_URL: "https://jsonplaceholder.typicode.com/posts",
  
};

var testingGlobalConstants = {
  BASE_URL: "https://jsonplaceholder.typicode.com/posts",
 
};

var productionGlobalConstants = {
  BASE_URL: "https://jsonplaceholder.typicode.com/posts",
  
};

var config = localGlobalConstants;
if (process.env.REACT_APP_ENV === "production") {
  config = productionGlobalConstants;
} else if (process.env.REACT_APP_ENV === "testing") {
  config = testingGlobalConstants;
}

export const globalConstants = {
  // Add common config values here
  URL_INITIAL: "/api",
  VERSION: "2.0.2",
  ...config
};

export const dataFormat = {
  MEDIUM: "MMM DD, YYYY",
  LONG: "MMM DD,YYYY (HH:MM:SS A)"
};
