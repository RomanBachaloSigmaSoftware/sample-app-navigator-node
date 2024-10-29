export interface ExternalSource {
    sourceName: string;
    externalSourceId: string;
}

export interface Recipient {
    email: string;
    phone: string | null;
    userId: string;
}

export interface Sender {
    userId: string;
}

export interface Envelope {
    id: string;
    recipients: Recipient[];
    sender: Sender;
    subject: string;
}

export interface Party {
    id: string;
    name: string;
    extractionReview?: string; //TODO: ajust
    aliasGroup?: string; //TODO: ajust
    fieldMetadata?: string; //TODO: ajust
    reference?: string; //TODO: ajust
}

export interface Data {
    agreementType: string;
    clmLegacyCustomAttributes: string; //TODO: ajust
    effectiveDate?: string;
    envelope: Envelope;
    etag: string; //TODO: ajust
    expirationDate?: string;
    extractionStatus: string;
    governingLaw: string;
    name: string;
    parties?: Party[];
    paymentTerms?: string; //TODO: ajust
    renewal?: string; //TODO: ajust
    terminationNoticePeriod?: string; //TODO: ajust
    terminations?: string; //TODO: ajust
    totalValue?: string; //TODO: ajust
}

export interface AgreementDocument {
    id: string;
    version: string;
    createdAt: string;
    modifiedAt: string;
    documentStorageId: string;
    externalSource: ExternalSource;
    etag: number;
    data: Data;
}

export interface MockedData {
    ctoken: string | null;
    agreementDocuments: AgreementDocument[];
}


export enum DocumentTypeModel {
    OTHER_LETTER = 'OfferLetterDocumentData',
    OTHER = 'OtherDocumentData',
    ORDER_FORM = 'OrderFormDocumentData',
}