<p align="center">
  <a href="#enoque-ui">Enoque UI</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#installation">Installation</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#example">Example</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#technologies">Technologies</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#how-to-run-the-project-locally">How to run the project locally</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#contributing">Contributing</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#license">License</a>
</p>

![Cover](https://github.com/enoquetembe/design-system/assets/98264322/bea350c2-4f08-4640-926b-285168cb2744)


## Enoque UI

Enoque UI is my personal Design System that provides a set of reusable components and guidelines to create consistent and beautiful user interfaces. 
Is a collection of components, styles, and best practices that I've put together to help me build delightful user experiences across all my projects. 
By using Enoque UI, I ensure that my design choices and visual language remain consistent throughout the applications I develop.
<a href="https://enoque-ui.netlify.app/">Click here </a>  to see the documentation of this design system on Storybook


## Installation 

Enoque  UI comes with 2 packages than can be installed separately

- `@enoque-ui/tokens `: All colors, font sizes, font weights, font families, line heights, radii and spacings.
- `@enoque-ui/react `: React.js port of Enoque UI components.


## Example

Here is a simple example using Enoque UI within a React project:

```jsx
   //  Import the required components in your project:
  import { Button, Box, TextInput } from 'enoque-ui/react';

  function MyComponent() {
  return (
    <Box>
      <TextInput placeholder="Enter your name" />
      <Button
        onClick={() => {}}
        size="md"
        variant="primary"
      >
        Send
      </Button>
    </Box>
  );
};
```

## Technologies

This project was developed with the following technologies:

- <span>[**React.js**](https://reactjs.org/)</span>
- <span>[**Stiches**](https://stitches.dev/docs/installation)</span>
- <span>[**Storybook**](https://tailwindcss.com](https://storybook.js.org/docs/react/get-started/browse-stories)/)</span>
- <span>[**TypeScript**](https://www.typescriptlang.org/)</span> 
- <span>[**Vite**](https://vitejs.dev/)</span>

## How to run the project locally

### Prerequisites
You must have <a href="https://nodejs.org/en/"> Node.js </a> and   <a href="https://git-scm.com/downloads"> git </a> installed


### Install the  project

Open a terminal follow the steps bellow

1. Clone the repository: 

``` bash 
 $ git clone https://github.com/enoquetembe/design-system.git
```

2. Go to the project directory
``` bash 
cd design-system
```

3. Install depedencies

``` bash 
npm install
```

4. Start the project

``` bash 
npm run dev
```

## Contributing

<p> 
  Pull Requests are welcome. For major changes, please open an issue to discuss what and which kind of changes you want to perform.<br>
  Follow these steps to make your contribution.
  
  #### 1. Fork the repository
  
  #### 2. Create your feature branch 
 ```bash
 # To make it easier name this branch with your username or with the name of the feature you added
 $ git checkout -b feat/MyFeature
 ```
  
  #### 3. Commit your changes
  ```bash
   $ git commit -m 'feat: Adding my feature'
  ```
  
  #### 4. Push to your feature branch
  ```bash
   $ git push origin feat/MyFeature
  ```
  
  #### 5. Open a Pull Request
  
  <br>
  Let's work together. 😁


##  License
This project is under MIT Lincese  [CLICK HERE](https://github.com/enoquetembe/design-system/blob/main/LICENSE) to read the file about the license.

<br>

Made with ❤  by [Enoque Tembe](https://github.com/enoquetembe)
