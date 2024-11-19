import { marked } from 'marked'
import React, { useState, useEffect } from 'react'

export const DEFAULT_VALUE = `# React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function sneed(feed, seed) {
  if (feed == '\`\`\`' && seed == '\`\`\`') {
    return sneed;
  }
}
\`\`\`
**bold** Text
_italic_ Text.
**_both!_**

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

1. Number 1
1. Number 2
1. Number 3

![Sneed Logo](https://i.ytimg.com/vi/0O2NV1enG-k/maxresdefault.jpg)
`

function MarkdownPreviewer() {
  const [markdownInput, setMarkdownInput] = useState(DEFAULT_VALUE)
  const [markdownOutput, setMarkdownOutput] = useState("")

  useEffect(() => {
    markdownParser(markdownInput)
  }, [])


  const markdownParser = (input) => {
    setMarkdownInput(input)
    setMarkdownOutput(marked(input, { breaks: true }))
  }

  return (
    <div className='row container-fluid h100 w100'>
      <div className="col-sm-6">
        <textarea name="markdownInput" id="editor" onChange={e => markdownParser(e.target.value)} style={{"width":"100%", "height":"100%"}}>{markdownInput}</textarea>
      </div>

      <div className="col-sm-6">
        <div id='preview' dangerouslySetInnerHTML={{ __html: marked.parse(markdownOutput, { breaks: true }) }}></div>
      </div>

    </div>
  )
}

export default MarkdownPreviewer