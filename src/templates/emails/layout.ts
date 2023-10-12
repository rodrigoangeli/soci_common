const content = `
doctype html
style
  include styles.css
html
  body(style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width: 100%; height: 100%; margin: 0; padding: 0; background-color: #e4e4e4;")
    table(align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse; text-size-adjust: 100%; width: 100%; height: 100%; margin: 0px; padding: 0px; background-color: rgb(237, 240, 242);")
      tbody
        block header
          include header.pug
        tr
          td(align="center" valign="top" class="section1Column" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: transparent; border-top: 0; border-bottom: 0px; padding-top: 0px; padding-bottom: 0px;")
            table(border="0" cellpadding="0" cellspacing="0" width="100%" class="sectionContainer" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width:100%; max-width: 600px !important; background-color: #FFFFFF;")
              tbody 
                tr 
                  td(valign="top"  align="left" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;color: #666666;font-family: Helvetica, Arial,sans-serif;font-size: 16px;line-height: 150%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 9px 35px;word-break: break-word !important;")
                    block content
                tr 
                  td(align="center" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;color: #1c2833;font-family: Helvetica, Arial,sans-serif;font-size: 16px;line-height: 150%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 9px 35px;word-break: break-word !important;")
                    p(style="line-height:150%")
                      br
                      b Socializo.
        block footer
          include footer.pug
`;

export const layout = {
  version: 1,
  name: "layout",
  content,
};
