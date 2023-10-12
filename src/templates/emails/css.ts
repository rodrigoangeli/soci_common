const content = `
p {
    margin: 10px 0;
    padding: 0;
  }
  table {
    border-collapse: collapse;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
    margin: 0;
    padding: 0;
  }
  img,
  a img {
    border: 0;
    height: auto;
    outline: none;
    text-decoration: none;
  }
  body,
  #bodyTable,
  #bodyCell {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  #outlook a {
    padding: 0;
  }
  img {
    -ms-interpolation-mode: bicubic;
  }
  table {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt;
  }
  .ReadMsgBody {
    width: 100%;
  }
  p,
  a,
  li,
  td,
  blockquote {
    mso-line-height-rule: exactly;
  }
  a[href^="tel"],
  a[href^="sms"] {
    color: inherit;
    cursor: default;
    text-decoration: none;
  }
  p,
  a,
  li,
  td,
  body,
  table,
  blockquote {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  .ExternalClass {
    width: 100%;
  } /* Force Hotmail to display emails at full width */
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height: 100%;
  } /* Forces Hotmail to display normal line spacing.  More on that: http://www.emailonacid.com/forum/viewthread/43/ */
  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }
  .sectionContainer {
    max-width: 600px !important;
  }
  .img-max {
    vertical-align: bottom;
  } /* media queries */
  @media only screen and (min-width: 768px) {
    .columnContainer {
      max-width: 600px !important;
    }
  }
  @media only screen and (max-width: 480px) {
    p,
    a,
    li,
    td,
    body,
    table,
    blockquote {
      -webkit-text-size-adjust: none !important;
    }
    p {
      font-size: 16px !important;
      line-height: 150% !important;
    }
    body {
      width: 100% !important;
      min-width: 100% !important;
    }
  }
  @media only screen and (max-width: 480px) {
    .columnContainer {
      max-width: 100% !important;
      width: 100% !important;
    }
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 22px !important;
      line-height: 125% !important;
    }
    h2 {
      font-size: 20px !important;
      line-height: 125% !important;
    }
    h3 {
      font-size: 18px !important;
      line-height: 125% !important;
    }
    h4 {
      font-size: 16px !important;
      line-height: 150% !important;
    }
  }
  @media (max-width: 480px) {
    .padding {
      padding-left: 18px !important;
      padding-right: 18px !important;
    }
  }
  @media (max-width: 480px) {
    .img-max {
      width: 100% !important;
    }
  }
  @media (max-width: 480px) {
    .makefull {
      max-width: 100% !important;
      width: 100% !important;
    }
  }
  @media screen and (max-width: 600px) {
    #precisa-ajuda,
    #predio {
      display: block;
    }
  }
  div[style*="margin: 16px 0;"] {
    margin: 0 !important;
  }
  .button {
    letter-spacing: initial;
    font-style: initial;
    font-weight: initial;
    line-height: 100%;
    text-align: center;
    text-decoration: none;
    padding: 12px;
    color: #ffffff;
    mso-line-height-rule: exactly;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    display: block;
    word-break: break-word !important;
    background-color: #df631e;
    border: 1px solid #df631e;
    display: inline-block;
    border-radius: 6px;
    margin-top: 13px;
  }  
`;

export const css = {
  version: 1,
  name: "css",
  content,
};
