# Horizontal Menu Scroll

[![Known Vulnerabilities](https://snyk.io/test/github/isahohieku/ngx-horizontal-menu-scroll/badge.svg?targetFile=package.json)](https://snyk.io/test/github/isahohieku/ngx-horizontal-menu-scroll?targetFile=package.json)
[![npm version](https://badge.fury.io/js/ngx-horizontal-scroll-menu.svg)](https://badge.fury.io/js/ngx-horizontal-scroll-menu)
[![HitCount](https://hits.dwyl.com/isahohieku/ngx-horizontal-scroll-menu.svg)](https://hits.dwyl.com/isahohieku/ngx-horizontal-scroll-menu/)
[![Build Status](https://travis-ci.org/isahohieku/ngx-horizontal-menu-scroll.svg?branch=master)](https://travis-ci.org/isahohieku/ngx-horizontal-menu-scroll)
[![Coverage Status](https://coveralls.io/repos/github/isahohieku/ngx-horizontal-menu-scroll/badge.svg?branch=master)](https://coveralls.io/github/isahohieku/ngx-horizontal-menu-scroll?branch=master)
[![codebeat badge](https://codebeat.co/badges/09cf3a7d-902e-4671-a72a-ef3099ac4d72)](https://codebeat.co/projects/github-com-isahohieku-ngx-horizontal-menu-scroll-master)


## Descripiton

This library was built to help save development time and thinking of how to implement a scroll menu.
It also comes with some features such as adding background classes and text classes to quickly style the menu.

## Example

[Stackblitz](https://stackblitz.com/edit/ngx-horizontal-scroll-menu-example?file=src/app/app.component.ts)

## Features

* `Add Array of items to menu`
* `Select key from object that holds a link`
* `Add styles to Background`
* `Add styles to font`

## Installation

``` 
npm install ngx-horizontal-menu-scroll --save
```

## Setup

``` typescript
    import { CommonModule } from '@angular/common';
    import { HorizontalScrollMenuModule } from 'ngx-horizontal-scroll-menu'; // Import module 
    
    @NgModule({
    imports: [
        CommonModule,
        HorizontalScrollMenuModule // Add HorizontalScrollMenuModule to imports
    ],
    declarations: [AppComponent]
    bootstrap: [AppComponent],
    });

    export class AppModule {}
```

## Usage

```typescript
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    templateUrl: '<ngx-horizontal-menu-scroll [items]="items" [linkLabel]="link"></ngx-horizontal-menu-scroll>',
    styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
        title = 'horizontal-menu-test';
        link = 'link';
        items: any[] = [
            { title: 'Orangies', link: 'https://www.github.com/isahohieku' },
            { title: 'Apple', link: 'https://www.github.com/isahohieku' },
            { title: 'Mango', link: 'https://www.github.com/isahohieku' },
            { title: 'Carrot', link: 'https://www.github.com/isahohieku' }
        ];
    }
```

## Options

| Option        | Type          | Default  | Descripiton |
| ------------- | ------------- | ----- |  --- |
| items     | array | An array of programatically generated data | This is expected to be an array of items to be displayed on the Scroll |
| linkLabel     | string | No default | This is expected to be a property in the items array which lets the Scroll know the property that contains the link of an item displayed on the Scroll |
| background     | string | No default | This is expected to be a class name for adding background styles to the wrapper of the Scroll |
| text     | string | No default | This is expected to be a class name for adding text styles to the items of the Scroll |
| distance     | number | 50 | This is expected to be a number and its to increase/decrease the scroll distance items of the Scroll |
| leftIcon     | string | A base64 image url of a left arrow | This is expected to be a string and its default size is 24 px. you can add a string of the path to your left arrow here. There is no provision for right arrow as we flip the image horizontally to denote the right arrow |
| hideNav     | boolean | false | This is expected to be a boolean true/false to hide/show the nav icons |
| scrollSpeed     | number | 100 | This is expected to be a number and its the speed of the scroll on mousedown in milliseconds |

## RoadMap

I'm looking forward to getting the scroll silkier than it is at the moment. For now this are features I look forward to adding. You can request features as well and we look into making it available in later versions.

* `Customizable icons`
* `Icon size`
* `Menu items with icon`

## Contributing

This project is open for contribution

## Authors and acknowledgment

I would be acknowledging collaborators here when some start coming in.

## License

MIT

##
> Github [@isahohieku](https://github.com/isahohieku)
> Twitter [@isahohieku](https://twitter.com/isahohieku)