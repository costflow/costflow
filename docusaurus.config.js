const versions = [];
const allDocHomesPaths = [
  "/docs/",
  "/docs/syntax/",
  "/docs/parser/",
  "/docs/cli/",
  "/docs/hub/",
  "/docs/playground/",
  "/docs/resources/",
  "/docs/support/",
  ...versions.slice(1).map((version) => `/docs/${version}/`),
];

module.exports = {
  title: "Costflow",
  tagline: "A series of products for making plain text accounting easier",
  url: "https://www.costflow.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "costflow", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  themeConfig: {
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
        { href: "https://blog.costflow.io", label: "Blog", position: "left" },
        {
          href: "https://hub.costflow.io",
          label: "Self-Hosted",
          position: "right",
        },
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
              label: "CLI",
              to: "docs/cli/",
            },
            {
              label: "Playground",
              to: "docs/playground/",
            },
            {
              label: "Self-Hosted Hub",
              to: "docs/hub/",
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
              href: "https://t.me/costflow",
            },
            {
              label: "Github",
              href: "https://github.com/costflow/costflow",
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
      copyright: `Copyright © ${new Date().getFullYear()} Costflow`,
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
};
