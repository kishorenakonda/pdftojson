// let fs = require('fs');
// let PDFParser = require("pdf2json");

// let pdfParser = new PDFParser();
// pdfParser.loadPDF("./assets/pdf/payslip-unlocked.pdf");

// pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
// pdfParser.on("pdfParser_dataReady",
//     pdfData => {
//         fs.writeFile("./assets/json/testpayslip.json", JSON.stringify(pdfData));
//     }
// );

const fs = require('fs'),
    PDFParser = require("pdf2json");

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady",
    pdfData => {
        // fs.writeFile("./assets/txt/payslip.txt",
        //     pdfParser.getRawTextContent(),
        //     () => { console.log("Done."); });

        // fs.writeFile("./assets/json/payslip.json",
        //     JSON.stringify(pdfParser.getAllFieldsTypes()),
        //     () => { console.log("Done."); });

        fs.writeFile("./assets/json/mom_lic_receipt.json",
            JSON.stringify(pdfData),
            () => { console.log("Done."); });

    }
);

pdfParser.loadPDF("./assets/pdf/mom_lic_receipt.pdf");

