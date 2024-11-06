// import React from 'react'
// import { DocsThemeConfig } from 'nextra-theme-docs'
// import { useRouter } from "next/router";
// import Image from 'next/image'
// import { useConfig } from 'nextra-theme-docs'
// import { Mail } from 'lucide-react'
// // import {Footer} from './components/footer'
// import Head from 'next/head';

// const config: DocsThemeConfig = {
//   head: () => {
//     {
//       const { asPath } = useRouter();
//       const url = `https://services.jhonswg.com${asPath}`;
//       return (
//         <>
//           <link rel="icon" href="/logo/favicon.ico" sizes="any" />
//           <meta property="og:url" content={url} />
//           <meta property="og:type" content="website" />
//           <meta
//             property="og:image"
//             content="https://services.jhonswg.com/public/logo/logo/svg"
//           />
//         </>
//       );
//     }
//   },
//   project: {
//     link: 'https://github.com/jhonswg/docs'
//   },
//   docsRepositoryBase: 'https://github.com/jhonswg/docs/blob/main/',
// }

// export default {
//   logo: (
//     <div style={{ display: 'flex', alignItems: 'left' }}>
//       <Image src="/logo/logo.png" alt="Jhonswg Logo" width={40} height={20} unoptimized/>
//       <span style={{ marginLeft: '0.5rem',fontWeight:'bold', fontSize:'18px', alignContent:'center',color: '#10B981' }}>Services</span>
//     </div>
//   ),navbar: {
//     extraContent: (
//       <a href="https://x.com/jhonswgeth" target="_blank" rel="noopener noreferrer" className="nx-p-2 nx-text-current">
//         <svg width="24" height="24" viewBox="0 0 24 24">
//           <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
//         </svg>
//       </a>
//     )
//   },
//   project: {
//     link: 'https://github.com/jhonswg',
//   },
//   chat: {
//     link: 'https://discordapp.com/users/847151330807382067',
//   },
//   footer:{
//     text: 'Jhonswg Services',
//   } , 
  
//   feedback: false,  // menghilangkan "Question? Give us feedback"
//   editLink: false,  // menghilangkan "Edit this page"
//   useNextSeoProps: () => {
//     return {
//       titleTemplate: "Jhonswg - %s",
//     };
//   },
// }

import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import NewWindow from "./icons/NewWIndow";

const logoStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "1.45rem",
  fontWeight: "bold",
};

const config: DocsThemeConfig = {
  head: () => {
    {
      const { asPath } = useRouter();
      const url = `https://services.jhonswg.com${asPath}`;
      return (
        <>
          <link rel="icon" href="/logo/favicon.ico" sizes="any" />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://services.jhonswg.com/logo/logo.png"
          />
        </>
      );
    }
  },
  logo: (
    <div style={logoStyle}>
      <img height="40" width="40" src="/logo/logo.png" />
      <span className="custom-header " style={{ marginLeft: "8px", color: "#10B981" }}>
        Services Docs
      </span>
    </div>
  ),
  navbar: {
        extraContent: (
          <a href="https://x.com/jhonswgeth" target="_blank" rel="noopener noreferrer" className="nx-p-2 nx-text-current">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        )
      },
  project: {
    link: "https://github.com/jhonswg",
  },
  chat: {
    link: "https://discord.com/channels/824147014140952596/824147014140952602",
  },
  docsRepositoryBase:
    "https://github.com/chainflip-io/chainflip-docs/blob/main",
  footer: {
    text: " Jhonswg Services",
  },
  sidebar: {
    titleComponent: ({ title, route }) => (
      <div className="flex items-center w-full justify-between">
        <span>{title}</span>
        {route === "#" && <NewWindow />}
      </div>
    ),
  },
   feedback: false, // menghilangkan "Question? Give us feedback"
   editLink: false,  // menghilangkan "Edit this page"

  useNextSeoProps: () => {
    return {
      titleTemplate: "Jhonswg Docs - %s",
    };
  },
};

export default config;