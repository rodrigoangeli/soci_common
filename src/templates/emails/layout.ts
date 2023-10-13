import { css } from "./css";
import { header } from "./header";
import { footer } from "./footer";

const content = `
<!DOCTYPE html>
<html>
${css}
<body style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width: 100%; height: 100%; margin: 0; padding: 0; background-color: #e4e4e4;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse; text-size-adjust: 100%; width: 100%; height: 100%; margin: 0px; padding: 0px; background-color: rgb(237, 240, 242);">
        <tbody>
        ${header}
            <tr>
                <td class="section1Column" align="center" valign="top" style="mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: transparent; border-top: 0; border-bottom: 0px; padding-top: 0px; padding-bottom: 0px;">
                    <table class="sectionContainer" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; width:100%; max-width: 600px !important; background-color: #FFFFFF;">
                        <tbody>
                            <tr>
                                <td valign="top" align="left" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;color: #666666;font-family: Helvetica, Arial,sans-serif;font-size: 16px;line-height: 150%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 9px 35px;word-break: break-word !important;">{{content}}</td>
                            </tr>
                            <tr>
                                <td align="center" style="-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;color: #1c2833;font-family: Helvetica, Arial,sans-serif;font-size: 16px;line-height: 150%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;padding: 9px 35px;word-break: break-word !important;">
                                    <p style="line-height:150%"><br><b>Socializo.</b></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            ${footer}
        </tbody>
    </table>
</body>
</html>
`;

export const layout = {
  version: 1,
  name: "layout",
  content,
};
