const Joi = require('joi');

const validate = ({
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
    const schema = Joi.object({
        clientEftReference: Joi.string().min(0).max(36),
        transactionFlow: Joi.string().valid('CREDIT', 'DEBIT').required(),
        cpaCode: Joi.string().min(3).max(3).required(),
        amountInCents: Joi.number().required(),
        dueDate: Joi.date().iso().required(),
        bankAccountId: Joi.string(),
        institutionCode: Joi.string().min(3).max(3),
        transitNumber: Joi.string().min(5).max(5),
        accountNumber: Joi.string().min(1).max(12),
        accountType: Joi.string().valid('BUSINESS','INDIVIDUAL'),
        firstName: Joi.string().min(1).max(255),
        lastName: Joi.string().min(1).max(255),
        companyName: Joi.string().min(1).max(255),
        transactionDescriptor: Joi.string().min(0).max(15),
        originatorShortName: Joi.string().min(1).max(15).required(),
        originatorLongName: Joi.string().min(1).max(30).required(),

    });
    return schema.validateAsync({
        clientEftReference: payload.clientEftReference,
        transactionFlow: payload.transactionFlow,
        cpaCode: payload.cpaCode,
        amountInCents: payload.amountInCents,
        dueDate: payload.dueDate,
        bankAccountId: payload.bankAccountId,
        institutionCode: payload.institutionCode,
        transitNumber: payload.transitNumber,
        accountNumber: payload.accountNumber,
        accountType: payload.accountType,
        firstName: payload.firstName,
        lastName: payload.lastName,
        companyName: payload.companyName,
        transactionDescriptor: payload.transactionDescriptor,
        originatorShortName: payload.originatorShortName,
        originatorLongName: payload.originatorLongName,
    });
};

module.exports = { validate };
