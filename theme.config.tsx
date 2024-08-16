import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
    icon: (
      <>
        <a href="https://github.com/shuding/nextra-docs-template" target="_blank" rel="noopener noreferrer">
          <img src="https://www.svgrepo.com/svg/361509/github-logo" alt="GitHub" style={{ marginRight: 8 }} />
        </a>
        <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
          <img src="https://www.svgrepo.com/svg/303746/twitter" alt="Twitter" style={{ marginRight: 8 }} />
        </a>
      </>
    )
  },
  chat: {
    link: 'https://discord.com',
    icon: (
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <img src="https://www.svgrepo.com/svg/353655/discord-icon" alt="Discord" style={{ marginRight: 8 }} />
      </a>
    )
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
