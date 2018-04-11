---
title: "Code Example"
date: "2018-04-10"
category: "programming"
langKey: "en"
---

Code things and stuff

```javascript
const numbers = [1,2,3,4]

numbers.map(number => {
  console.log(number)
})
```

```jsx
  class App extends React.Component {
    constructor(props) {
      super(props);

      this.props = props
      this.state = { name: '' }
    }
    render() {
      <HelloWorld name={this.state.name} />
    }
  }
```
