# Horizontal Scroll Menu

This library was built to help save development time and thinking of how to implement a scroll menu.

## Descripiton

It also comes with some features such as adding background classes and text classes to quickly style the menu.

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

## RoadMap

I'm looking forward to getting the scroll silkier than it is at the moment. For now this are features I look forward to adding. You can request features as well and we look into making it available in later versions.

* `Customizable icons`
* `Scroll distance`
* `Hide/Show navigation icons`
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

### keywords

[scroll](https://www.npmjs.com/search?q=keywords:scroll) 

[horizontal scroll](https://www.npmjs.com/search?q=keywords:horizontal+scroll)

[horizontal scroll menu](https://www.npmjs.com/search?q=keywords:horizontal+scroll+menu)

[scroll menu](https://www.npmjs.com/search?q=keywords:scroll+menu) 

[angular menu](https://www.npmjs.com/search?q=keywords:angular+menu) 

[angular scroll menu](https://www.npmjs.com/search?q=keywords:angular+scroll+menu) 

[angular horizontal scroll menu](https://www.npmjs.com/search?q=keywords:angular+horizontal+scroll+menu) 

[ngx-horizontal-scroll-menu](https://www.npmjs.com/search?q=keywords:ngx-horizontal-scroll-menu) 
