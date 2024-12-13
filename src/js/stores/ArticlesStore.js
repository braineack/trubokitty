
import { EventEmitter } from "events";

class ArticlesStore extends EventEmitter {
  constructor() {
    super()
    this.pages = [
      {
        id: 1,
        link: "ms3xassembly",
        title: "Megasquirt-3x Assembly",
        text: "Step-by-step instructions for assembling your MS3x",
        subtext: "Covers 90-05 model years",
        color: "green",
        icon: "icon_documents_alt icon"
      },
      {
        id: 2,
        link: "diypnpassembly",
        title: "DIYPNP Assembly",
        text: "Step-by-step instructions for assembling your DIYPNP kit",
        subtext: "Covers 90-97 model years",
        color: "red",
        icon: "icon_documents_alt icon"
      },
      {
        id: 3,
        link: "installation",
        title: "Installation & Setup",
        text: "Walkthrough on installing your MS3x and getting your tuning software setup to run",
        color: "pink",
        icon: "icon_puzzle_alt icon"
      },
      {
        id: 4,
        link: "tune",
        title: "Basemaps, Tuning & Tips",
        text: "Basemaps and a quick walkthrough of tuning your newly installed MS ECU",
        color: "blue",
        icon: "fa fa-wrench icon"
      },
      // {
      //   id: 5,
      //   link: "faqs",
      //   title: "FAQs",
      //   text: "Frequently Asked Questions and some answers to them",
      //   color: "purple",
      //   icon: "icon_lifesaver icon"
      // },
      // {
      //   id: 6,
      //   link: "resources",
      //   title: "Addtional Resources",
      //   text: "A collection of additional resources to help you with your assembly",
      //   color: "primary",
      //   icon: "fa fa-rebel icon"
      // },
      // {
      //   id: 7,
      //   link: "comments",
      //   title: "Comments & Contact",
      //   text: "Leave comments or questions; get answers",
      //   color: "orange",
      //   icon: "fa fa-commenting icon"
      // },
    ];
  }

  getAll() {
    return this.pages;
  }
}

const articlesStore = new ArticlesStore;

export default articlesStore;
