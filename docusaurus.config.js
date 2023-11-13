const versions = [];
const allDocHomesPaths = [
  "/docs/",
  "/docs/syntax/",
  "/docs/parser/",
  "/docs/desktop-apps/",
  "/docs/cli/",
  "/docs/resources/",
  "/docs/support/",
  ...versions.slice(1).map((version) => `/docs/${version}/`),
];

module.exports = {
  title: "Costflow",
  tagline:
    "A set of open source products that make double-entry plain-text bookkeeping easier.",
  url: "https://www.costflow.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "costflow", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["bash", "diff", "json"],
    },
    navbar: {
      title: "Costflow",
      logo: {
        alt: "Costflow Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          position: "left",
          to: "docs/",
          label: "Docs",
        },
        { to: "docs/desktop-apps/", label: "Desktop Apps", position: "left" },
        {
          href: "https://playground.costflow.io",
          label: "Playground",
          position: "right",
        },
        {
          href: "https://github.com/costflow",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Syntax",
              to: "docs/syntax/",
            },
            {
              label: "Parser",
              to: "docs/parser/",
            },
            {
              label: "Desktop Apps",
              to: "docs/desktop-apps/",
            },
            {
              label: "CLI",
              to: "docs/cli/",
            },
            {
              label: "Playground",
              href: "https://playground.costflow.io",
            },
          ],
        },
        {
          title: "Follow",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/costflow",
            },
            {
              label: "Telegram",
              href: "https://t.me/costflowio",
            },
            {
              label: "Github",
              href: "https://github.com/costflow",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Purchase Costflow Hub",
              href: "https://hub.costflow.io/",
            },
            {
              label: "Become a Sponsor",
              to: "docs/support",
            },
            {
              label: "One-time Donation",
              to: "docs/support#one-time-donations",
            },
            // Parser License? Contribute?
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html"],
        createRedirects: function (path) {
          // redirect to /docs from /docs/introduction,
          // as introduction has been made the home doc
          if (allDocHomesPaths.includes(path)) {
            return [`${path}/introduction`];
          }
        },
        redirects: [],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/costflow/costflow/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  scripts: [],
};
