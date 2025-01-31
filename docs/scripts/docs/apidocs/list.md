```html
<ui-list><!-- the item components --></ui-list>
<ui-list-nav><!-- the item components --></ui-list-nav>
```

#### Props

| Name              | Type           | Default | Description                                                                                                                                  |
| ----------------- | -------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`            | number, string | `1`     | List types. {1: 'Single-line list', 2: 'Two-line list'}                                                                                      |
| `nonInteractive`  | boolean'       | `false` | Optional, disables interactivity affordances.                                                                                                |
| `dense`           | boolean'       | `false` | Optional, styles the density of the list, making it appear more compact.                                                                     |
| `avatar`          | boolean'       | `false` | Optional, configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger. |
| `singleSelection` | boolean'       | `false` | The list can handle selecting/deselecting list elements based on click or keyboard action.                                                   |

#### Slots

| Name      | Slots                                       | Description                                                      |
| --------- | ------------------------------------------- | ---------------------------------------------------------------- |
| `default` | `{ itemClass, selectedClass, activeClass }` | The default slot holds the item components and can contain HTML. |

```html
<template #default="{ itemClass, selectedClass, activeClass }">
  <ui-item :class="itemClass">Item</ui-item>

  <div :class="selectedClass"></div>

  <a :class="activeClass"></a>
</template>
```

> Optional, styles the row in a selected or activated state.
