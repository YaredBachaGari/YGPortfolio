import { mailOptions, transporter } from "@/app/nodemailer/nodemailer";

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  try {
    if (res.message && res.email) {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Contact message from ${res.firstname} ${res.lastname}`,
        text: res.email,
        html: `<p>${res.message}</p><p>Contact Number: ${
          res.phone || ""
        }</p> Contact Email: ${res.email || ""}</p>`,
      });
    }
  } catch (error) {
    console.log(error)
  }
}
