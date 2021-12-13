/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDocuments = /* GraphQL */ `
  subscription OnCreateDocuments {
    onCreateDocuments {
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
export const onUpdateDocuments = /* GraphQL */ `
  subscription OnUpdateDocuments {
    onUpdateDocuments {
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
export const onDeleteDocuments = /* GraphQL */ `
  subscription OnDeleteDocuments {
    onDeleteDocuments {
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
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
