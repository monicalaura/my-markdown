import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
let marked = require('marked');

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

class MyMarkdown extends React.Component {
   
      state = {
        markdown: `\n# Heading1\n## Heading2\n### Heading 3\n---\
        \n#### I am a smaller heading\n \n Paragraphs are separated\nby a 
       blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline
        break\n\nText attributes *italic*, **bold**, or, wow... **_both italic and bold!_** \n
        .\n\nUnordered list:\n\n  * bananas\n  * kiwi\n  * oranges\n
        \n\nNumbered list:\n\n  1. milk\n  2. eggs\n  3. butter\n 
        Hey, you can also ~~cross things out~~.
        \n### More awesome stuff\n Inline code:\nFrom the console, run <code>console.log('Hello world!');</code>to see the output. \n\n---\n\n#### Code block:<code>\n javascript\nfunction sayHello() {\n return 'Hello world!';\n}</code>\n\n---\n\n#### 
         \n#### Blockquote:  \n> Simplicity is about subtracting the obvious and adding the meaningful. -John Maeda \n\n---\n#### 
         \n Some code \`<div></div>\`  \`<pre></pre>\` between 2 backticks.\n There's also a [link](https://www.google.com)\n
Life is more beautiful with embedded images:![React Logo w/ Text](https://goo.gl/Umyytc) `
     
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
                    id='editor'
                    className='col-xs-10'>
                    </textarea>
                </div>
              
                  <div dangerouslySetInnerHTML={{__html:marked(markdown)}}  id='preview' className=' col-md-6 col-xs-10 '>
                         
                    
                  </div>
                </div>
              
        );
    }
  }

  export default MyMarkdown
