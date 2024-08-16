import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
    icon: (
      <>
        <a href="https://twitter.com/jhonswgeth" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-twitter-icon.svg" alt="Twitter" style={{ marginLeft: 8 }} />
        </a>
      </>
    ),
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
