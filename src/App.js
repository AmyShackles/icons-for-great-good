import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import NodeEvalPlugin from 'terminal-in-react-node-eval-plugin';
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';
const FileSystemPlugin = pseudoFileSystemPlugin();

class App extends Component {
  showMsg = () => 'Hello World'

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
        plugins={[
    FileSystemPlugin,
    {
      class: NodeEvalPlugin,
      config: {
        filesystem: FileSystemPlugin.displayName
      }
    }
  ]}
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}
export default App;