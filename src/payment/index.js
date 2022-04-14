const validation = require('./payment.validation');


module.exports = ({axiosInstance}) => {
    const createTransaction = async ({
     clientEftReference,
     transactionFlow, 
     cpaCode, 
     amountInCents, 
     dueDate, 
     bankAccountId, 
     institutionCode, 
     transitNumber, 
     accountNumber, 
     accountType, 
     firstName, 
     lastName, 
     companyName, 
     transactionDescriptor, 
     originatorShortName, 
     originatorLongName
    }) => {
        
        const payload = {
     clientEftReference,
     transactionFlow, 
     cpaCode, 
     amountInCents, 
     dueDate, 
     bankAccountId, 
     institutionCode, 
     transitNumber, 
     accountNumber, 
     accountType, 
     firstName, 
     lastName, 
     companyName, 
     transactionDescriptor, 
     originatorShortName, 
     originatorLongName
        };
        const {err} = validation.validate(payload);
        if (err) {return console.log(err[0])};
        const request = {
            url: '/fundstransfer/v1/efts/',
            method: 'POST',
            data: [payload],
        };
        const response = await axiosInstance(request);
        return response.data;
    };
    const getEFTById = async({trasctionId}) => {
        const request = {
            url: `/fundstransfer/v1/efts/${trasctionId}`,
            method: 'GET',
        };
        const response = await axiosInstance(request);
        return response.data;
    };
    return {createTransaction, getEFTById};
};