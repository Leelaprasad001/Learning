import React, { useState } from 'react';
import axios from 'axios';
import { config } from '../Constants';
import { Container, Form, Button , Message, Header, Segment, Input} from 'semantic-ui-react';
import { saveAs } from 'file-saver';

const instance = axios.create({
  baseURL: config.url.API_BASE_URL,
});

const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [downloadMessage, setDownloadMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [deleteFileName, setDeleteFileName] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
        await instance.post('/file/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadMessage('File uploaded successfully');
    } catch (error) {
      console.error('Failed to upload file', error);
      setUploadMessage('Error in file upload');
    }
  };
  
  const fetchFile = async () => {
    try {
      const response = await instance.get(`/file/get/${fileName}`, { responseType: 'blob' });
      saveAs(response.data, fileName);
      setDownloadMessage('File download successful');
    } catch (err) {
      console.error('Failed to download file', err);
      setDownloadMessage('Error in file download');
    }
  };

   const handleDelete = async () => {
    try {
      await instance.delete(`/file/delete/${deleteFileName}`);
      setDeleteMessage('File deleted successfully');
    } catch (err) {
      console.error('Failed to delete file', err);
      setDeleteMessage('Error in file deletion');
    }
  };

  return (
    <Container style={{ marginTop: '10rem' }}>
        <Segment>
            <Header as="h1">File Upload</Header>
            <Form>
                <Form.Field>
                <input type="file" onChange={handleFileChange} />
                </Form.Field>
                <Button primary onClick={handleUpload}>
                Submit
                </Button>
            </Form>

            {uploadMessage && (
                    <Message positive={uploadMessage === 'File Uploaded'} negative={uploadMessage === 'Error in File Upload'}>
                        <Message.Header>{uploadMessage}</Message.Header>
                    </Message>
                    )}
        </Segment>

        <Segment>
            <Header as="h1">Get File</Header>
        
            <Input
              placeholder="Enter file name"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              action={<Button onClick={fetchFile}>Download File</Button>}
            />
            {downloadMessage && (
              <Message positive={downloadMessage === 'File download successful'} negative={downloadMessage === 'File not found'}>
                <Message.Header>{downloadMessage}</Message.Header>
              </Message>
            )}
        </Segment>  

        <Segment>
          <Header as="h1">Delete File</Header>
          <Input
            placeholder="Enter file name to delete"
            value={deleteFileName}
            onChange={(e) => setDeleteFileName(e.target.value)}
            action={<Button onClick={handleDelete}>Delete File</Button>}
          />
          {deleteMessage && (
            <Message positive={deleteMessage === 'File deleted successfully'} negative={deleteMessage === 'Error in file deletion'}>
              <Message.Header>{deleteMessage}</Message.Header>
            </Message>
          )}
        </Segment>


    </Container>
  );
};

export default Upload;
