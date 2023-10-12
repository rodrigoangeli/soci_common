const content = `
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
                        `;

export const header = {
  version: 1,
  name: "header",
  content,
};
