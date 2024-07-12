![Blue Ocean](https://github.com/user-attachments/assets/7290f71d-549a-45e6-8bde-475a3f30290f)

Template Series - Blue Ocean #3
---

This is a template for organizations modeled after a made-up environmental organization called “Blue Ocean.” It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.

![Website Image](https://github.com/user-attachments/assets/426676df-92f5-4100-a219-b44d2058caa0)

This is the third fully open-source template we have created for our clients. Its design is very similar to “Green Planet,” one of the other FOYM templates. This template is modeled on a different, but still made-up, environmental organization called “Blue Ocean.” This is also closely based on a design I created a few weeks before starting FOYM. - Ruslan

Getting Started
---

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- An IDE

### Installation

Clone the repository

```bash
git clone https://github.com/digitalRM/FOYM-Blue-Ocean.git
```

Install required packages

```bash
npm install
```

Customize the entire website across all the sections inside the `components/sections` folder
```js
1 - Hero.jsx
2 - TheProblem.jsx
3 - OurSolution.jsx
4 - Footer.jsx
```

There are also important files to edit in the `components/ui` folder. They are all marked with 1 in the front. 
```js
1 - contact-dialog.jsx
1 - header.jsx
1 - mobile-drawer.jsx
```

Delete Banner in `app/layout.js`

```js
// Delete this import below when you are ready to remove the banner
import Banner from "@/components/sections/999 - banner";

{/* This is the banner for the FOYM website. Feel free to delete this! */}
<Banner />
```
Delete Banner from the `components/sections` folder
```js
999 - banner.jsx
```

Customize your metadata in `app/layout.js`
```js
// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://ocean.foym.org/'),
  title: "Blue Ocean - An FOYM Template",
  description: "This is a template for organizations modeled after a made-up environmental organization called “Blue Ocean.” It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
  openGraph: {
    title: "Blue Ocean - An FOYM Template",
    description: "This is a template for organizations modeled after a made-up environmental organization called “Blue Ocean.” It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
    url: 'https://ocean.foym.org/',
    siteName: 'Blue Ocean - An FOYM Template',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image of the website\s name "Blue Ocean - An FOYM Template" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}
```

Run the development server

```bash
npm run dev
```

## Contact 

If you are having trouble setting this up, please feel free to contact me via the [foym](https://www.foym.org) website. 

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


