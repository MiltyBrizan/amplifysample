/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDocuments = /* GraphQL */ `
  mutation CreateDocuments(
    $input: CreateDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    createDocuments(input: $input, condition: $condition) {
      id
      title
      description
      status
      location
      createdAt
      updatedAt
    }
  }
`;
export const updateDocuments = /* GraphQL */ `
  mutation UpdateDocuments(
    $input: UpdateDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    updateDocuments(input: $input, condition: $condition) {
      id
      title
      description
      status
      location
      createdAt
      updatedAt
    }
  }
`;
export const deleteDocuments = /* GraphQL */ `
  mutation DeleteDocuments(
    $input: DeleteDocumentsInput!
    $condition: ModelDocumentsConditionInput
  ) {
    deleteDocuments(input: $input, condition: $condition) {
      id
      title
      description
      status
      location
      createdAt
      updatedAt
    }
  }
`;
export const createPrivateNote = /* GraphQL */ `
  mutation CreatePrivateNote(
    $input: CreatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    createPrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePrivateNote = /* GraphQL */ `
  mutation UpdatePrivateNote(
    $input: UpdatePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    updatePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePrivateNote = /* GraphQL */ `
  mutation DeletePrivateNote(
    $input: DeletePrivateNoteInput!
    $condition: ModelPrivateNoteConditionInput
  ) {
    deletePrivateNote(input: $input, condition: $condition) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
