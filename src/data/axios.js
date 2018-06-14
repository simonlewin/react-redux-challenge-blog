import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
  // use your own url
  baseURL: "http://simonl.restful.training/api/",

  // use your own key
  params: {"key": "ee0ec18ce35a082f6c5e181426cb111c9b0435f1"},

  // make sure we get JSON back
  headers: {"Accept": "application/json"},
});