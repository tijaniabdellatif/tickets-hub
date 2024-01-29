import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";
import path from "path";

interface IEmail {
  email: string;
  subject: string;
  template: string;
  data?: { [key: string]: any };
}

/**
 * SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SERVICE=gmail
SMTP_USER=tijani.idrissi.abdellatif@gmail.com
SMTP_PASS=mbpxlvupafhhbpfn
 */

const hosted: string = `${process.env.SMTP_HOST}`;
const port: string = `${process.env.SMTP_PORT}`;

export const sendMail = async (options: IEmail): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    host: String("smtp.gmail.com"),
    port:Number('465' || "587"),
    service:'gmail',
    auth:{

         user:'tijani.idrissi.abdellatif@gmail.com',
         pass:'mbpxlvupafhhbpfn'
    }
  });

  const {email,subject,template,data} = options;
  const templatePath = path.join(__dirname, "../mails", template);


  const html: string = await ejs.renderFile(templatePath, data);

  const mailOptions = {
    from:'tijani.idrissi.abdellatif@gmail.com',
    to: email,
    subject: subject,
    html: html,
  }
  
  await transporter.sendMail(mailOptions);
};
