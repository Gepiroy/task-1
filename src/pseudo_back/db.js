import axios from "axios";
import placeholder from '@img/CssIcon.svg'
import notebooks from "@img/notebooks.png";
import warmDay from "@img/warm-day.png";
const link = "http://localhost/task-2/wp-json/task-2/v1/";
const datas = {
  benefit: [
    {
      icon: placeholder,
      title: "Some title 1",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
    {
      icon: placeholder,
      title: "Some title 2",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
    {
      icon: placeholder,
      title: "Some title 3",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
  ],
  abilities: [
    {
      icon: placeholder,
      title: "Some title 1",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
    {
      icon: placeholder,
      title: "Some title 2",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
    {
      icon: placeholder,
      title: "Some title 3",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
  ],
  technologies: [
    {
      icon: placeholder,
      title: "Some title 1",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
    {
      icon: placeholder,
      title: "Some title 2",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
    {
      icon: placeholder,
      title: "Some title 3",
      lore: "Some lore lore lore lore ahahahaha lore lore it's a fake lore!",
    },
  ],
  project: [
    {
      image: notebooks,
      title: "Some title 1",
    },
    {
      image: notebooks,
      title: "Some title 2",
    },
    {
      image: warmDay,
      title: "Some title 3",
    },
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
