# Installation

 ```bash
   npm i opsnippets
   ```

# Usage
```javascript
import { CodeBlock} from  "demo"
function  App() {
const  code = `
import React from 'react';
import CodeSnippet from './CodeSnippet';
const App = () => {
return (
<div>
<h1>My Code Snippet Example</h1>
<CodeSnippet />
</div>
  );
};
export default App;`
return (
	<>
	   <CodeBlock  code={code}  />
	</>
    )
}
export  default  App;
   ```
   <a href="https://imgbb.com/"><img src="https://i.ibb.co/gVrTCJN/Screenshot-from-2024-08-10-18-12-35.png" border="0"></a>


```javascript
import { OneLineBlock} from  "demo"
function  App() {
return (
	<>
      <OneLineBlock  command="npm i mongoose"  />
    </>
    )
}
export  default  App;
 ```


<a href="https://imgbb.com/"><img src="https://i.ibb.co/vYJqrrc/Screenshot-from-2024-08-10-18-13-23.png" alt="Screenshot-from-2024-08-10-18-13-23"  border="0"></a>
