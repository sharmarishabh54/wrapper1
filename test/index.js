const src = require('../src');

const peopleTrust = src({baseURL:'https://fundstransfer-api-staging.peoplespayments.com',username: 'AKae240834-da32-494e-b3cf-d49b8e02cb0f', password: '1hD2PWFOdmbJX3fI8FKAkumHrfjgq/rkFifOTvxkC638jRJN2te6+9nxutfN8zLr'});

const test = async() => {
    const result = await peopleTrust.payment.createTransaction({
        clientEftReference : "80c53440-39bd-47de-ae45-7fe43b10e205",
        transactionFlow : "CREDIT",
        cpaCode : "330",
        amountInCents : 650,
        dueDate: "2019-02-23",
        bankAccountId : "lz1GgCEASECYcVei2RuZNQ",
        institutionCode  : "004",
        transitNumber : "12345",
        accountNumber : "1234567",
        accountType : "BUSINESS",
        firstName : "string",
        lastName : "string",
        companyName : "string",
        transactionDescriptor : "Cable Bill",
        originatorShortName : "ABC co",
        originatorLongName : "ABC company",
    });
    const result2 = await peopleTrust.payment.getEFTById({trasctionId: 'e1zx6YtySsqlcgTgqIgNAg'})
    console.log(result);
};

test();