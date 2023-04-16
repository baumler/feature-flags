# Feature Flag

Created by Tyler Baumler.

> This is a simple feature flag. It uses a very simple component, a JSON file to keep track of flags, and an
environmental variable to let the component know what environment in the JSON to look at.
> 
> Has components for React, Vue, and vanilla Javascript

## JSON file

### Add an environment key/pair for each environment needed

Example:
```json
{
    "dev": [],
    "qa": [],
    "uat": [],
    "prod": []
}
```

### Add feature object for each feature you want to control

Example:
```json
{
    "key": "feature-name",
    "active": true
}
```

### Note
A feature wrapped in the `FlaggedFeature` component are auto set to `active: true`.  This is to make sure if the 
key is not in the environment array, it will not be available.

## Env file

### React
Must contain the key `REACT_APP_ENVIRONMENT` with the value equal to one of the environments listed in the JSON file

### Vue
Must contain the key `VITE_VUE_APP_ENVIRONMENT` with the value equal to one of the environments listed in the JSON file

### Web Component
Must contain the key `JAVASCRIPT_APP_ENVIRONMENT` with the value equal to one of the environments listed in the JSON file

## How to use the `FlaggedFeature` component

After adding the feature object in the JSON file to all environment arrays (using the example above), wrap your 
component in the `FlaggedFeature` component and pass in the key.

Example (React/Vue):
```jsx
import { FlaggedFeature } from './FlaggedFeature';

<FlaggedFeature flag="feature-name">
  <div>Feature behind the flag</div>
</FlaggedFeature>
```

Example (Web component):
```js
<flagged-feature flag="test-banner">
    <div slot="feature">
        <div>Feature behind the flag</div>
    </div>
</flagged-feature>
```

## Maintaining Features

Once a flag is no longer needed (ie will not need to be hidden on any environment), remove the `FlaggedFeature`
component wrapper and remove the feature object from all environment arrays in the JSON file.

## Extras
A database could easily replace the JSON file in order to not have code changes just to update the flag state by querying
the database in the `FlaggedFeature` component.
