"use server";

import puppeteer from "puppeteer";
import open from "open";

export const generatePDF = async () => {
  console.log("Generating PDF");

  const browser = await puppeteer.launch();

  // Navigate to the URL where the content exists
  // await page.goto("http://localhost:3000/", { waitUntil: "networkidle0" });

  // Use Puppeteer's `evaluate` method to grab the specific HTML content
  const content = `<html>
  <head>
  <title>Product Info</title>
  </head>
  <body>
  <p>Hello i am pdf</p>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s" alt='arrow'>
  <p>Bye</p>
  </body>
  </html>`;

  // Create a new page to render only the selected content as a PDF
  const contentPage = await browser.newPage();
  await contentPage.setContent(content);

  // Generate the PDF
  await contentPage.pdf({
    path: "product-info.pdf",
    format: "A4",
    printBackground: true,
  });

  await open("product-info.pdf");

  // Close the browser
  await browser.close();

  console.log("PDF generated successfully");
};
