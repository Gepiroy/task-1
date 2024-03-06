import axios from "axios";
import placeholder from '@img/CssIcon.svg'
const link = "http://localhost/task-2/wp-json/task-2/v1/";
const datas = {
  project: [
    {
      image: placeholder,
      title: "Some title 1",
    },
    {
      image: placeholder,
      title: "Some title 2",
    },
    {
      image: placeholder,
      title: "Some title 3",
    }
  ],
};
export default {
  /** @returns cards */
  getCard: async function (endpoint) {
    let ret = null;
    await axios
      .get(link + endpoint)
      .then((res) => {
        ret = res.data;
      })
      .catch((err) => {
        console.log("error during getting "+endpoint+": "+err);
        ret = datas[endpoint];
      });
    return ret;
  }
};
