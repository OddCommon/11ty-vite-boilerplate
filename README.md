# 11ty-vite-boilerplate

A neat place to start with 11ty &amp; Vite

## 🧠 Motivation

We wanted robust tooling to create static sites that can utilize some of our favorite libraries but also keep payloads small.

## 📦 Setup

- `npm i`
- `npm start`

## 🚧 Development

## 💪 Features

- Static HTML templating
- JS Bundling & Treeshaking
- SCSS Modules & Bundling
- Staticly compiled React components with optional Hydration ( Read More Below )
- Static Asset hashing

## 🗂 Structure

- src ( main project root )
  - pages ( nunchuck pages, partials & templates )
  - public ( Static Assets )
  - scripts ( All The javascript )
  - styles ( Make things look nice )

## ⚽️ Rules & Standards

The aim of this project is to give a baseline setup & standards that OddCommon uses in development.

## ⚛️ Static React Components & Hydration

We love React, it's really nice when building apps that require heavy state management & portability, the problem is that it can be _heavy_ and you don't always need it.

You can use the shortcode to create a statically rendered react component that Hydrates on client load.

```javascript
{% react './path/to/component_or_app.jsx' true %}
```

Optionally you can also just import the component and not have it hydtrate.

```javascript
{% react './path/to/component.jsx' %}
```
