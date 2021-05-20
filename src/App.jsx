import React, { useEffect, useState } from "react";
import "./App.css";
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import Auth, { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";
import { listDocuments } from "./graphql/queries";
import { Paper, IconButton, TextField } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import DescriptionIcon from "@material-ui/icons/Description";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AddIcon from "@material-ui/icons/Add";
import PublishIcon from "@material-ui/icons/Publish";
import { createDocument, updateDocument } from "./graphql/mutations";
import { v4 as uuid} from 'uuid';

Amplify.configure(awsconfig);

function App() {
  const [documents, setDocuments] = useState([]);
  const [documentDisplayed, setDocumentDisplayed] = useState("");
  const [documentURL, setDocumentURL] = useState("");
  const [showAddDocument, setShowAddDocument] = useState(false);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const toggleApproval = async (idx) => {
    try {
      const document = documents[idx];
      document.approved = document.approved ? false : true;
      delete document.createdAt;
      delete document.updatedAt;

      const documentData = await API.graphql(
        graphqlOperation(updateDocument, { input: document })
      );
      const documentList = [...documents];
      documentList[idx] = documentData.data.updateDocument;

      setDocuments(documentList);
    } catch (error) {
      console.log("Error toggling appproval", error);
    }
  };

  const toggleDocument = async (idx) => {
    if (documentDisplayed === idx) {
      setDocumentDisplayed("");
      return;
    }
    const documentFilePath = documents[idx].filePath;
    try {
      const fileAccessURL = await Storage.get(documentFilePath, {
        expires: 60,
      });
      console.log("access url", fileAccessURL);
      window.open(fileAccessURL, "_blank");
      setDocumentDisplayed(idx);
      setDocumentURL(fileAccessURL);
      return;
    } catch (error) {
      console.log("Error displaying file", error);
      setDocumentURL("");
      setDocumentDisplayed("");
    }

    return;
  };

  const fetchDocuments = async () => {
    try {
      const documentData = await API.graphql(graphqlOperation(listDocuments));
      const documentList = documentData.data.listDocuments.items;

      console.log("document list", documentList);
      setDocuments(documentList);
    } catch (error) {
      console.log("Error on fetching data", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Documents MVP</h2>
        <AmplifySignOut />
      </header>
      <div className="documentList">
        {documents.map((document, idx) => {
          return (
            <Paper variant="outlined" elevation={2} key={`document${idx}`}>
              <div className="documentCard">
                <IconButton
                  aria-label="descritption"
                  onClick={() => toggleDocument(idx)}
                >
                  {documentDisplayed === idx ? (
                    <SearchOutlinedIcon />
                  ) : (
                    <DescriptionIcon />
                  )}
                </IconButton>
                <div>
                  <div className="documentTitle">{document.title}</div>
                  <div className="documentOwner">{document.owner}</div>
                </div>
                <div>
                  <IconButton
                    aria-label="approve"
                    onClick={() => toggleApproval(idx)}
                  >
                    <DoneAllIcon />
                  </IconButton>
                  {document.approved ? "Approved " : "Unapproved"}
                </div>
                <div className="documentDiscription">
                  {document.description}
                </div>
              </div>
            </Paper>
          );
        })}
        {showAddDocument ? (
          <AddDocument
            onUpload={() => {
              setShowAddDocument(false);
              fetchDocuments();
            }}
          />
        ) : (
          <IconButton
            onClick={() => {
              setShowAddDocument(true);
            }}
          >
            <AddIcon />
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default withAuthenticator(App, false);

const AddDocument = ({ onUpload }) => {
  const [documentData, setDocumentData] = useState({});
  const [fileData, setFileData] = useState();

  const uploadDocument = async () => {
    //Upload!
    console.log("documentData", documentData);
    const { title ,description, owner}  = documentData;
    const { key } = await Storage.put(`${uuid()}.txt`, fileData, { contentType: 'text/plain'});

    const createDocumentInput = {
      id: uuid(),
      title,
      description,
      owner,
      filePath: key,
      approved: false
    }
        await API.graphql(graphqlOperation(createDocument, {input: createDocumentInput}))
        onUpload();
  };

  return (
    <div className="newDocument">
      <TextField
        label="Title"
        value={documentData.title}
        onChange={(e) =>
          setDocumentData({ ...documentData, title: e.target.value })
        }
      />
      <TextField
        label="Owner"
        value={documentData.owner}
        onChange={(e) =>
          setDocumentData({ ...documentData, owner: e.target.value })
        }
      />
      <TextField
        label="Description"
        value={documentData.description}
        onChange={(e) =>
          setDocumentData({ ...documentData, description: e.target.value })
        }
      />
      <input
        type="file"
        accept="text/plain"
        onChange={(e) => setFileData(e.target.files[0])}
      />
      <IconButton onClick={uploadDocument}>
        <PublishIcon />
      </IconButton>
    </div>
  );
};
