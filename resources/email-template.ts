/* eslint-disable no-tabs */
import Mustache from 'mustache'

export function buildEmailTemplate (params): string {
  const template: string = `
  <meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style type="text/css">#bodyTable,body {
          height:100%!important;
          width:100%!important;
          margin:0;
          padding:0
        }
        a,blockquote,body,li,p,table,td {
          -ms-text-size-adjust:100%;
          -webkit-text-size-adjust:100%
        }
        table{
          border-spacing:0
        }
        table,td{
          border-collapse:collapse;
          mso-table-lspace:0;
          mso-table-rspace:0
        }
        img{
          -ms-interpolation-mode:bicubic;
        }
        a img,img{
          border:0;
          outline:0;
          text-decoration:none;
        }
        @media only screen and (min-width:601px){
          .email-container{
            width:600px!important
          }
        }
        @media screen and (max-device-width:600px),screen and (max-width:600px){
          table[class=button]{
            clear:both;
          }
        }
        li{
          list-style-type: none
        }
  </style>
  <table bgcolor="#f4f4f4" border="0" cellpadding="0" cellspacing="0" height="100%" id="bodyTable" style="border-collapse: collapse;table-layout: fixed;margin:0 auto;" width="100%">
    <tbody>
      <tr>
        <td><!--[if (gte mso 9)|(IE)]>          
            <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td>
                  <![endif]-->
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="email-container" style="max-width: 600px;margin: auto;" width="100%">
          <tbody>
            <tr>
              <td style="padding:0 15px"><!-- HEADER -->
              <table border="0" cellpadding="0" cellspacing="0" style="height: 90px; background-color:#fff;" width="100%">
                <tbody>
                  <tr>
                  </tr>
                </tbody>
              </table>

              <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%"><!-- EMAIL CONTENT -->
                <tbody>
                  <tr>
                    <td style="padding: 40px; font-family: Helveltica, Arial, sans-serif; font-size: 16px; line-height: 24px; color: #666666;">
                    <h1 style="font-family: Helveltica, Arial, sans-serif; font-size: 32px; line-height: 36px; color: #444444; margin: 0; padding: 0;">Solicita&ccedil;&atilde;o de envio de nota fiscal</h1>

                    <p>Hi, {{name}}<br />
                      Thank you very much for requesting my resume. It is attached to this e-mail. 
                    <p>Please feel free to contact me. It will be a pleasure to talk with you.
                    </p>
                    <br />
                    Regards,<br />
                    Mateus Toledo - Software Engineer</td>
                  </tr>
                </tbody>
              </table>
              <!-- FOOTER -->

              <table border="0" cellpadding="0" cellspacing="0" style="" width="100%">
                <tbody>
                  <tr>
                    <td style="padding: 5px; font-family: Helveltica, Arial, sans-serif; font-size: 12px; line-height: 20px; color: #555555;">
                    <p style="font-style: italic;">Mateus Toledo, 2022 ® Todos os direitos reservados.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if (gte mso 9)|(IE)]>
                </td>
              </tr>
            </table>
            <![endif]--></td>
      </tr>
    </tbody>
  </table>`

  return Mustache.render(template, params)
}
