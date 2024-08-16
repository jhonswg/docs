import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image src="https://jhonswg.com/assets/img/logo.png" alt="Logo" width={25} height={25} unoptimized/>
      <span style={{ fontWeight:'bold', fontSize:'18px' }}>Jhonswg Service</span>
    </div>
  ),
  project: {
    link: 'https://github.com/jhonswg',
  },
  chat: {
    link: 'https://discord.com/jhonswg',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Nextra Docs Template',
  },
  navbar: {
    extraContent: (
      <a href="https://x.com/jhonswgeth" target="_blank" rel="noopener noreferrer" className="nx-p-2 nx-text-current">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
    )
  },
}

export default config