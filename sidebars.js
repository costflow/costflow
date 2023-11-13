module.exports = {
  docs: [
    {
      type: "category",
      label: "Costflow",
      items: ["introduction"],
    },
    {
      type: "category",
      label: "Syntax",
      collapsed: true,
      items: [
        "syntax/introduction",
        "syntax/config",
        "syntax/transaction",
        "syntax/formula",
        "syntax/comment",
        "syntax/price",
        "syntax/snap",
        "syntax/balance",
        "syntax/open",
        "syntax/close",
        "syntax/commodity",
        "syntax/option",
        "syntax/note",
        "syntax/pad",
        "syntax/event",
      ],
    },
    {
      type: "category",
      label: "Parser",
      items: ["parser/introduction", "parser/license"],
    },
    {
      type: "category",
      label: "Desktop Apps",
      items: ["desktop-apps/introduction", "desktop-apps/config"],
    },
    {
      type: "category",
      label: "CLI",
      items: ["cli/introduction"],
    },
    {
      type: "category",
      label: "Resources",
      items: ["resources/introduction"],
    },
    {
      type: "category",
      label: "Donate",
      items: ["donate/introduction"],
    },
  ],
};
