```html
<ui-list-nav class="demo-list">
  <ui-item-a v-for="(item, index) in items"
    :key="index"
    v-ripple
    :firstIcon="item.icon">
    {{ item.text }}
  </ui-item-a>
</ui-list-nav>
```
