const urlAPI = "https://apitesting.plerk.io/v2/category";
const token =
  "5bc95bf034d900548243a59e2296bd683729bd75057879fd0f877d3adc7d1db6bedbfccb47aca04e44ef28adf4c3e9e72afe2f2b295b3bf08e2a47ec75f9607d";
var myHeaders = new Headers();
myHeaders.append("Authorization", token);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

function getData() {
  return fetch(urlAPI, requestOptions)
    .then((res) => res.json())
    .catch((error) => error.json());
}
export default {
  getData,
};
