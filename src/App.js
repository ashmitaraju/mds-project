import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
      <div class="parent">
        <div class="test">Videos go here</div>
        <div class="test">Filters go here</div>
      </div>
      <div class="output">Output goes here</div>
      </div>
    );
  }
}

export default App;




// Attempt 1
// function App() {
//   const LabelStudio = window.LabelStudio; // label-studio script stores the api globally, similar to how jQuery does
//   const myLabelStudioRef = useRef(null); // store it and then pass it other components

//   useEffect(() => {
//     myLabelStudioRef.current = new LabelStudio("label-studio", {
//       config: `
//       <View>
//         <Image name="img" value="$image"></Image>
//         <RectangleLabels name="tag" toName="img">
//           <Label value="Hello"></Label>
//           <Label value="World"></Label>  
//         </RectangleLabels>
//       </View>
//     `,

//       interfaces: [
//         "panel",
//         "update",
//         "controls",
//         "side-column",
//         "completions:menu",
//         "completions:add-new",
//         "completions:delete",
//         "predictions:menu",
//       ],

//       user: {
//         pk: 1,
//         firstName: "James",
//         lastName: "Dean",
//       },

//       task: {
//         completions: [],
//         predictions: [],
//         id: 1,
//         data: {
//           image:
//             "https://htx-misc.s3.amazonaws.com/opensource/label-studio/examples/images/nick-owuor-astro-nic-visuals-wDifg5xc9Z4-unsplash.jpg",
//         },
//       },

//       onLabelStudioLoad: function (LS) {
//         var c = LS.completionStore.addCompletion({
//           userGenerate: true,
//         });
//         LS.completionStore.selectCompletion(c.id);
//       },
//     });
//   }, [LabelStudio]);

//   return (
//     <div className="App">
//       {/* Use Label Studio container */}
//       <div id="label-studio"></div>
//     </div>
//   );
// }

// export default App;

// Attempt 2
// export var __useDefault = true;
// import LabelStudio from "label-studio";
// import "label-studio/build/static/css/main.css";
// import React, { useState, useEffect } from 'react';

// const LabelStudio = window.LabelStudio; // label-studio script stores the api globally, similar to how jQuery does
// //   const myLabelStudioRef = useRef(null); // store it and then pass it other components
// const labelConfig = `<View>
//       <RectangleLabels name="tag" toName="img">
//         <Label value="Name"/>
//         <Label value="Business Name"/>
//       </RectangleLabels>
//       <Image name="img" value="$image"/>
//       </View>
//       `;

// export default function LabelStudioUI({ imageLocation, onClick, labelConfig }) {
//   var imageUrl ='';
//   useEffect(() => {
//     new LabelStudio("label-studio", {
//           config: labelConfig,

//           interfaces: [
//             "panel",
//             "update",
//             "submit",
//             "controls",
//             "side-column",
//             "annotations:menu",
//             //"annotations:add-new",
//             // "annotations:delete"
//             // "predictions:menu"
//           ],

//           user: {
//             pk: 1,
//             firstName: "James",
//             lastName: "Dean",
//           },

//           task: {
//             annotations: [],
//             predictions: [],
//             id: 1,
//             data: {
//               image: imageUrl,
//             },
//           },

//           onLabelStudioLoad: function (LS) {
//             var c = LS.annotationStore.addAnnotation({
//               userGenerate: true,
//             });
//             LS.annotationStore.selectAnnotation(c.id);
//           },
//           onSubmitAnnotation: async function (LS, annotation) {
//             console.log(annotation.serializeAnnotation());
//           },
//           onUpdateAnnotation: async function (LS, annotation) {
//             console.log(annotation.serializeAnnotation());
            
//       }
//     }
// , [imageUrl, labelConfig]);});} 

