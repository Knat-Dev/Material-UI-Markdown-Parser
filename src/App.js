import {
  Box,
  Divider,
  FormControl,
  Grid,
  TextareaAutosize,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';
import CodeBlock from './CodeBlock';

function App() {
  const [input, setInput] = useState('');

  return (
    <Grid container style={{ height: '100vh' }} justify="space-between">
      <Grid item style={{ flex: 1 }}>
        <Grid container direction="column">
          <Grid item>
            <Box width="100%" textAlign="center">
              <Typography variant="h5">Raw Markdown</Typography>
            </Box>
            <Divider />
          </Grid>
          <Grid item style={{ flexGrow: 1 }}>
            <FormControl fullWidth>
              <TextareaAutosize
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{
                  height: 'calc(100vh - 40px)',
                  border: 'none',
                  outline: 'none',
                  fontSize: 18,
                }}
                aria-label="Markdown Raw"
                placeholder="Enter your Markdown here..."
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Divider flexItem orientation="vertical" />
      <Grid item style={{ flex: 1 }}>
        <Box width="100%" textAlign="center" style={{ fontSize: 18 }}>
          <Typography variant="h5">Parsed Markdown</Typography>
        </Box>
        <Divider />
        <Box p={1}>
          <ReactMarkdown
            renderers={{
              code: CodeBlock,
              heading: (props) => {
                console.log(props.value);
                return <Typography variant={`h${props.level}`} {...props} />;
              },
            }}
          >
            {input}
          </ReactMarkdown>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
