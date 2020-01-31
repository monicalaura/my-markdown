import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
let marked = require('marked');

class MyMarkdown extends React.Component {
   
      state = {
        markdown:  `I am a Heading\n=======\n\n I am a Sub-heading\n-----------\n
        \n### I am a smaller heading\n \nParagraphs are separated\nby a 
       blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline
        break\n\nText attributes *italic*, **bold**, \n'monospace',
        ~~strikethrough~~ .\n\nUnordered list:\n\n  * bananas\n  * kiwi\n  * oranges\n
        \n\nNumbered list:\n\n  1. milk\n  2. eggs\n  3. 
       butter\n\n  * Life is more beautiful with embedded images:
     
       ![React Logo w/ Text](https://goo.gl/Umyytc) `
     
    }
  
    writeMarkdown = function(markdown){
      this.setState({
        markdown
      });

    }
  
    render() {
     let {markdown} = this.state;
      return (<div className='row'>
                <div className='col-md-6'>
                   <h4 className="text-center">Input</h4>
                  <textarea rows="20" cols="60"
                    type='text'
                    value={markdown}
                    onChange={(event) => this.writeMarkdown(event.target.value)}
                    id='markdown'
                    className='col-xs-10'>
                    </textarea>
                </div>
              
                  <div dangerouslySetInnerHTML={{__html:marked(markdown)}}  id='htmlArea' className=' col-md-6 col-xs-10 '>
                         
                    
                  </div>
                </div>
              
        );
    }
  }

  export default MyMarkdown