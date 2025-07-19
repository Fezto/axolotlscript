// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Axolotlscript",
  tagline: "🦎 Aprende programación de manera divertida y adorable",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://axolotlscript.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "axolotlscript", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/axolotlscript/docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/axolotlscript/docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Axolotlscript",
        logo: {
          alt: "Axolotlscript Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "📚 Tutoriales",
          },
          { to: "/blog", label: "📝 Blog", position: "left" },
          {
            href: "https://youtube.com/@axolotlscript",
            label: "🎥 YouTube",
            position: "right",
          },
          {
            href: "https://www.tiktok.com/@axolotlscript.js",
            label: "📱 TikTok",
            position: "right",
          },
          {
            href: "https://github.com/axolotlscript",
            label: "💻 GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "📚 Aprende",
            items: [
              {
                label: "Tutoriales",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "🌟 Comunidad",
            items: [
              {
                label: "YouTube",
                href: "https://youtube.com/@axolotlscript",
              },
              {
                label: "TikTok",
                href: "https://www.tiktok.com/@axolotlscript.js",
              },
              {
                label: "Discord",
                href: "https://discord.gg/axolotlscript",
              },
            ],
          },
          {
            title: "💻 Código",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/axolotlscript",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Axolotlscript. Hecho con 💖 y Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
