# Parallax Layer

A lightweight JavaScript library for adding a smooth parallax scrolling effect to elements.

## 🚀 Features

- 📜 **Simple API** – Easily apply parallax effects to any HTML element.
- ⚡ **Lightweight** – No dependencies, just pure JavaScript.

---

## 📦 Installation

Install via `npm`:

```sh
npm install parallax-layer
```

--- 

## 🎯 Usage

### 1. Init 
```javascript 
import ParallaxLayer from "parallax-layer";
// or
const ParallaxLayer = require("parallax-layer");

const parallax = new ParallaxLayer(); 
```

### 2. Use it 
```javascript
const element = document.getElementById("parallax-item");

parallax.createLayer(element, { type: "translate", layer: 2, direction: "top" });
parallax.start();
```

--- 

## 📜 API Reference

```new Parallax(options)```  
Option | Type | Default | Description
--- | --- | --- | --- | 
translate | number | 0.5 | Adjusts the parallax translation speed
scale | number | 0.005 | Adjusts the scaling effect
  
```parallax.createLayer(dom, options = { type, layer, direction, unit })```  
Registers an element for the parallax effect.
  
Parameter | Type | Default | Description
--- | --- | --- | --- |
dom | HTMLElement | Required | The element to apply the effect on
type | "translate", "scale" | Required | The effect type
layer | number | Required | The depth of the layer (higher values = slower movement)
direction | "Top", "Left", "Right", "Bottom" | - | The direction of movement
unit | string | "px" | The CSS unit (px, %, em, etc.)
  
```parallax.start()```  
Starts the parallax effect (listens for scroll events).
  
```parallax.stop()```  
Stops the parallax effect.

--- 

## 🌎 Browser Support
Works in all modern browsers (Chrome, Firefox, Edge, Safari).

--- 

## 📜 License
This project is licensed under the MIT License by default. 

--- 

## 🙌 Contributing
Contributions are welcome! If you'd like to improve this project:

1. Fork the repository
2. Create a feature branch (git checkout -b feature-name)
3. Commit your changes (git commit -m "Add new feature")
4. Push to the branch (git push origin feature-name)
5. Open a Pull Request

--- 

## 📬 Contact
+ Github: [HyuOniichan](https://github.com/HyuOniichan)
+ Email: chuahetheky@gmail.com

