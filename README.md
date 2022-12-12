# Cumulocity device details widget plugin

This Device Details Widget is the Cumulocity module federation plugin created using c8ycli. This plugin can be used in Application Builder or Cockpit. It shows current device details properties in widget.

```
"exports": [
  {
     "name": "Cumulocity Device Details Widget Plugin",
     "module": "GpDeviceDetailsWidgetModule",
     "path": "./widget/gp-device-details-widget.module.ts",
     "description": "Adds a custom widget to the shell application"
  }
]
```

**How to start**
Run the command below to scaffold a `widget` plugin.

```
c8ycli new <yourPluginName> widget-plugin
```

As the app.module is a typical Cumuloctiy application, any new plugin can be tested via the CLI:

```
npm start -- --shell cockpit
```

In the Module Federation terminology, `widget` plugin is called `remote` and the `cokpit` is called `shell`. Modules provided by this `widget` will be loaded by the `cockpit` application at the runtime. This plugin provides a basic custom widget that can be accessed through the `Add widget` menu.

> Note that the `--shell` flag creates a proxy to the cockpit application and provides` GpDeviceDetailsWidgetModule` as an `remote` via URL options.

Also deploying needs no special handling and can be simply done via `npm run deploy`. As soon as the application has exports it will be uploaded as a plugin.
