```html
<ui-card outlined class="demo-card">
  <div :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">Headlines</div>
  <hr class="mdc-list-divider">

  <template v-for="item in list">
    <a class="demo-card-article" v-ripple>
      <h2 :class="[$tt('headline5'), 'demo-card-article__title']">{{ item.title }}</h2>
      <p class="demo-card-article__snippet">{{ item.content }}</p>
    </a>
    <hr class="mdc-list-divider">
  </template>

  <ui-card-actions fullBleed>
    <ui-a actionButton class="demo-card-action">
      All Business Headlines
      <ui-icon>arrow_forward</ui-icon>
    </ui-a>
  </ui-card-actions>
</ui-card>
```

```js
export default {
  data() {
    return {
      list: [
        {
          title: 'Copper on the rise',
          content:
            'Copper price soars amid global market optimism and increased demand.'
        },
        {
          title: 'U.S. tech startups rebound',
          content:
            'Favorable business conditions have allowed startups to secure more fundraising deals compared to last year.'
        },
        {
          title: `Asia's clean energy ambitions`,
          content:
            'China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia.'
        }
      ]
    };
  }
};
```

```css
/* Sass code */
.demo-card {
  width: 350px;
  margin: 48px;
}

.demo-card-article-group-heading {
  @include mdc-theme-prop(color, text-secondary-on-light);

  padding: 8px 16px;
}

.demo-card-article {
  padding: 16px;
  text-decoration: none;
  color: inherit;
}

.demo-card-article__title {
  margin: 0 0 4px 0;
}

.demo-card-article__snippet {
  @include mdc-theme-prop(color, text-secondary-on-light);

  margin: 0;
}
```
