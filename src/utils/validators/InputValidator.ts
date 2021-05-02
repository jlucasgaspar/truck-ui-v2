import { utilsBr, validateBr } from 'js-brasil';

type IValidationResponse = {
    digits: string;
    error: string;
}

class InputValidator {
    public cpf(cpf: string): IValidationResponse {
        let digits = ''; let error = '';

        const cpfNumber = utilsBr.getAllDigits(cpf);
        const cpfIsValid = validateBr.cpf(cpfNumber);

        if (cpfIsValid) digits = cpfNumber;
        else error = 'CPF inválido.';

        return { digits, error }
    }

    public cnpj(cnpj: string): IValidationResponse {
        let digits = ''; let error = '';

        const cnpjNumber = utilsBr.getAllDigits(cnpj);
        const cnpjIsValid = validateBr.cnpj(cnpj);

        if (cnpjIsValid) digits = cnpjNumber;
        else error = 'CNPJ inválido.';

        return { digits, error }
    }

    public cnh(cnh: string): IValidationResponse {
        let digits = ''; let error = '';

        const cnhNumber = utilsBr.getAllDigits(cnh);
        const cnhIsValid = validateBr.cnh(cnh);

        if (cnhIsValid) digits = cnhNumber;
        else error = 'CNH inválida.';

        return { digits, error }
    }

    public phone(phone: string): IValidationResponse {
        let digits = ''; let error = '';

        const phoneNumber = utilsBr.getAllDigits(phone);
        const phoneIsValid = validateBr.telefone(phoneNumber);

        if (phoneIsValid) digits = phoneNumber;
        else error = 'Telefone inválido.';

        return { digits, error }
    }

    public inscricaoEstadual(inscricaoEstadual: string, stateInitials: string): IValidationResponse {
        let digits = ''; let error = '';

        const ieNumber = utilsBr.getAllDigits(inscricaoEstadual);
        const ieIsValid = validateBr.inscricaoestadual(ieNumber, stateInitials);

        if (!ieIsValid || ieIsValid.message === 'ie com todos dígitos iguais') {
            error = 'Inscição Estadual inválida.';
        } else {
            digits = ieNumber;
        }

        return { digits, error }
    }

    public plate(plate: string): IValidationResponse {
        let digits = ''; let error = '';

        const plateString = plate.split('-').join('');
        const plateIsValid = validateBr.placa(plateString);

        if (plateIsValid) digits = plateString;
        else error = 'Placa inválida.';

        return { digits, error }
    }
}

export const validateInput = new InputValidator();