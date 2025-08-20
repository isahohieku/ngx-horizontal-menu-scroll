# NGX Horizontal Scroll Menu

[![Known Vulnerabilities](https://snyk.io/test/github/isahohieku/ngx-horizontal-menu-scroll/badge.svg?targetFile=package.json)](https://snyk.io/test/github/isahohieku/ngx-horizontal-menu-scroll?targetFile=package.json)
[![npm version](https://badge.fury.io/js/ngx-horizontal-scroll-menu.svg)](https://badge.fury.io/js/ngx-horizontal-scroll-menu)
[![HitCount](https://hits.dwyl.com/isahohieku/ngx-horizontal-scroll-menu.svg)](https://hits.dwyl.com/isahohieku/ngx-horizontal-scroll-menu/)
[![Build Status](https://travis-ci.org/isahohieku/ngx-horizontal-menu-scroll.svg?branch=master)](https://travis-ci.org/isahohieku/ngx-horizontal-menu-scroll)
[![Coverage Status](https://coveralls.io/repos/github/isahohieku/ngx-horizontal-menu-scroll/badge.svg?branch=master)](https://coveralls.io/github/isahohieku/ngx-horizontal-menu-scroll?branch=master)
[![codebeat badge](https://codebeat.co/badges/09cf3a7d-902e-4671-a72a-ef3099ac4d72)](https://codebeat.co/projects/github-com-isahohieku-ngx-horizontal-menu-scroll-master)

> **🚀 Now compatible with Angular 19!** Fully updated with 100% test coverage and modern Angular features.

## Description

A lightweight, customizable Angular library for creating beautiful horizontal scrolling menus with smooth navigation controls. Perfect for navigation bars, category filters, or any horizontal list that needs elegant scrolling functionality.

**✨ Key Benefits:**
- 🎯 **Zero Configuration** - Works out of the box with sensible defaults
- 🎨 **Fully Customizable** - Style with your own CSS classes
- 📱 **Responsive** - Adapts to different screen sizes
- ⚡ **Lightweight** - Minimal bundle size impact
- 🔧 **TypeScript Support** - Full type safety included
- 🧪 **100% Test Coverage** - Production-ready reliability

## 🎯 Live Demo

[**Try it on StackBlitz →**](https://stackblitz.com/edit/ngx-horizontal-scroll-menu-example?file=src/app/app.component.ts)

## ✨ Features

- 📋 **Dynamic Menu Items** - Pass any array of objects as menu items
- 🔗 **Smart Link Handling** - Automatic link detection or custom click events
- 🎨 **Custom Styling** - Apply your own CSS classes for background and text
- 🏃‍♂️ **Smooth Scrolling** - Configurable scroll speed and distance
- 🎛️ **Navigation Controls** - Optional left/right arrow navigation
- 🖼️ **Custom Icons** - Use your own navigation arrow icons
- 📱 **Touch Friendly** - Works great on mobile devices
- ♿ **Accessible** - Keyboard navigation support

## 📦 Installation

```bash
npm install ngx-horizontal-scroll-menu --save
```

## 🚀 Quick Start

### 1. Import the Module

**For Angular 19+ (Standalone Components):**
```typescript
import { HorizontalScrollMenuModule } from 'ngx-horizontal-scroll-menu';

@Component({
  standalone: true,
  imports: [HorizontalScrollMenuModule],
  // ... your component
})
export class MyComponent { }
```

**For NgModule-based Apps:**
```typescript
import { NgModule } from '@angular/core';
import { HorizontalScrollMenuModule } from 'ngx-horizontal-scroll-menu';

@NgModule({
  imports: [
    HorizontalScrollMenuModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 2. Use in Your Template

**Basic Usage:**
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-horizontal-scroll-menu
      [items]="menuItems"
      [linkLabel]="'url'"
      [background]="'bg-primary'"
      [text]="'text-white'">
    </ngx-horizontal-scroll-menu>
  `
})
export class AppComponent {
  menuItems = [
    { title: 'Home', url: '/home' },
    { title: 'Products', url: '/products' },
    { title: 'Services', url: '/services' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' }
  ];
}
```

**With Click Events (No Links):**
```typescript
@Component({
  template: `
    <ngx-horizontal-scroll-menu
      [items]="categories"
      (clickedEventEmiiter)="onCategoryClick($event)">
    </ngx-horizontal-scroll-menu>
  `
})
export class AppComponent {
  categories = [
    { title: 'Electronics', id: 1 },
    { title: 'Clothing', id: 2 },
    { title: 'Books', id: 3 },
    { title: 'Sports', id: 4 }
  ];

  onCategoryClick(category: any) {
    console.log('Selected category:', category);
    // Handle navigation programmatically
    this.router.navigate(['/category', category.id]);
  }
}
```

## ⚙️ API Reference

### Input Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | `any[]` | `[]` | Array of menu items to display. Each item should have a `title` property |
| `linkLabel` | `string` | `'link'` | Property name in items that contains the URL. Omit for click events only |
| `background` | `string` | `undefined` | CSS class name for styling the menu background |
| `text` | `string` | `undefined` | CSS class name for styling the menu item text |
| `distance` | `number` | `50` | Scroll distance in pixels when using navigation arrows |
| `scrollSpeed` | `number` | `100` | Scroll animation speed in milliseconds (for mousedown events) |
| `hideNav` | `boolean` | `false` | Hide the left/right navigation arrows |
| `leftIcon` | `string` | Base64 arrow | Custom icon for navigation arrows (24px recommended) |
| `navIcon` | `ImageModel` | `undefined` | Custom navigation icon configuration |

### Output Events

| Event | Type | Description |
|-------|------|-------------|
| `clickedEventEmiiter` | `EventEmitter<any>` | Emitted when a menu item is clicked. Returns the clicked item object |

### ImageModel Interface

```typescript
interface ImageModel {
  type: string;    // Image type (e.g., 'png', 'svg')
  image: string;   // Image URL or base64 data
}
```

## 🎨 Styling Examples

**Bootstrap Classes:**
```html
<ngx-horizontal-scroll-menu
  [items]="items"
  [background]="'bg-dark'"
  [text]="'text-light fw-bold'">
</ngx-horizontal-scroll-menu>
```

**Custom CSS Classes:**
```css
.custom-menu-bg {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  padding: 10px;
}

.custom-menu-text {
  color: white;
  font-weight: 600;
  text-transform: uppercase;
}
```

## 🔧 Advanced Configuration

**Custom Scroll Behavior:**
```html
<ngx-horizontal-scroll-menu
  [items]="items"
  [distance]="100"
  [scrollSpeed]="50"
  [hideNav]="false">
</ngx-horizontal-scroll-menu>
```

## 🗺️ Roadmap

- [ ] **Virtual Scrolling** - Handle thousands of items efficiently
- [ ] **Keyboard Navigation** - Arrow key support
- [ ] **RTL Support** - Right-to-left language support
- [ ] **Accessibility Improvements** - Enhanced ARIA support
- [ ] **Animation Presets** - Pre-built scroll animations
- [ ] **Icon Customization** - More flexible icon system

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Isah Ohieku**
- GitHub: [@isahohieku](https://github.com/isahohieku)
- Twitter: [@isahohieku](https://twitter.com/isahohieku)

---

⭐ **If this library helped you, please give it a star!** ⭐