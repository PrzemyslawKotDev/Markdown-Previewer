class Previewer extends React.Component {
     state = {
      code: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
    };
  onChange(item) {
      this.setState({ code: item });
   }  
  render(){
      window.marked.setOptions({
         breaks: true
      });
    console.log(this.state.code)
    return (
    <>
      <div id='editor-place'>
        <div id="editor-bar">Editor</div>
        <textarea  value={this.state.code}
                  onChange={e => this.onChange(e.target.value)} id='editor'></textarea>
      </div>
      <div id='preview-place'>
      <div id="preview-bar">Preview</div>
      <div         
        id="preview"
        dangerouslySetInnerHTML={{
        __html: marked.parse(this.state.code)}}
      />
      </div>
      <div id='sign'>by Przemysław Kot</div>
    </>
    )
  } 
}
ReactDOM.render(<Previewer />, document.getElementById('app-holder'))
