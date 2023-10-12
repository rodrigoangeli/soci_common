const content = `
doctype html
html
  head    
    style(type="text/css").
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
  body(style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width: 100%; height: 100%; margin: 0; padding: 0; background-color: #e4e4e4;")
    table(align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse; text-size-adjust: 100%; width: 100%; height: 100%; margin: 0px; padding: 0px; background-color: rgb(237, 240, 242);")
      tbody
        tr.primeiroPaiInner 
            td(style="background-color: #192033; background-image: url(https://d2ipbo5js8nd63.cloudfront.net/emailbg.jpg); background-position: left top; background-repeat: repeat-x; background-size: 100% 175px; vertical-align: top; width: 100%" align="center")
                table(border="0" cellpadding="0" cellspacing="0" style="max-width: 600px;" width="50%")
                    tbody 
                        tr 
                            td(style="background-color: #192033")
                                table(border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;")
                    tbody 
                        tr
                            td(style='background-color: #192033')
                                table(style='max-width: 600px;', width='100%', cellspacing='0', cellpadding='0', border='0', align='center')
                                    tbody
                                        tr
                                            td
                                                table(cellspacing='0', cellpadding='0', border='0', align='center')
                                                    tbody
                                                        tr
                                                            td(align='center', valign='top', style='padding: 30px 10px;')
                                                                a(href='', target='_blank')
                                                                    img(alt='', src='https://d2ipbo5js8nd63.cloudfront.net/emaillogo.png', width='220', height='25', style='display: block; width: 220px; max-width: 220px;height: auto; min-width: 220px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; font-size: 18px;', border='0')
                table(style='max-width: 600px;', width='100%', cellspacing='0', cellpadding='0', border='0', align='center')
                    tbody
                        tr
                            td(align='center', style='background-color: #FFFFFF; border-radius: 4px 4px 0px 0px;font-family: Helvetica, Arial, sans-serif;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 50px 0 20px 0;word-break: break-word !important;')
                                h1(style='color: #1c2833;font-size: 24px;text-align: center;')
                                    block headerContent
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
        tr.ultimoPaiInner 
            td(align="center" style="background-color: #EDF0F2; padding: 10px 0px 10px 0px")
                table(border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;")
                    tbody 
                        tr 
                            td(style="background-color: #EDF0F2; padding: 20px 0px 20px 0px; vertical-align: top" width="100%" align="center")
                                table(style="max-width: 600px;" width="100%" cellspacing="0" cellpadding="0" border="0")
                                    tbody 
                                        tr 
                                            td(style="background-color: #EDF0F2; vertical-align: top" width="100%" align="center")
                                                table(style="max-width:480px;" width="100%" align="center")
                                                    tbody 
                                                        tr 
                                                            td(height="60")
                                                            td(width="15%" align="center")
                                                                a(rel="nofollow" target="_blank" href="https://www.instagram.com/socializo_/")
                                                                    img(alt="Instagram" src="https://d2ipbo5js8nd63.cloudfront.net/instagram.png" style="border:none;" title="Instagram" width="32")
                                                            td(height="60")
                        tr 
                            td(align="center" style="background-color: #EDF0F2; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px; padding: 0px 30px 30px 30px")
                                p(style="margin: 0;text-align: center")
                                    a(href='', target='_blank', style='color: #111111; font-weight: 600;') usesocializo.com
                        tr
                            td(align='center', style='background-color: #EDF0F2; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 12px; font-weight: 400; line-height: 18px; padding: 0px 30px 30px 30px')
                                div(style='margin: 5px 0; text-align: center')
                                | Copyright @ 2023 - socializo.
`;

export const layout = {
  version: 1,
  name: "layout",
  content,
};
