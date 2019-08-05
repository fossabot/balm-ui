(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ERrc:function(t,e){t.exports='<h1 id="advanced-usage">Advanced Usage</h1>\n<blockquote>\n<p>The following configuration is still the Vue scaffold built based on <a href="https://github.com/balmjs/balm-cli">Balm CLI</a>.</p>\n</blockquote>\n<h2 id="toc">TOC</h2>\n<ol>\n<li>Modular CSS<ul>\n<li><a href="javascript:void(0)" class="v-anchor" data-href="#use-sass">Use Sass</a></li>\n<li><a href="javascript:void(0)" class="v-anchor" data-href="#use-css">Use CSS</a></li>\n</ul>\n</li>\n<li>Modular JS<ul>\n<li><a href="javascript:void(0)" class="v-anchor" data-href="#default-usage">Default Usage</a></li>\n<li><a href="javascript:void(0)" class="v-anchor" data-href="#standalone-usage">Standalone Usage</a></li>\n<li><a href="javascript:void(0)" class="v-anchor" data-href="#source-code-usage">Source Code Usage</a></li>\n</ul>\n</li>\n<li><a href="javascript:void(0)" class="v-anchor" data-href="#mdi">Get Material Design Icons without downloading</a></li>\n</ol>\n<h2 id="1-modular-css">1. Modular CSS</h2>\n<div id="use-sass"></div>\n\n<h3 id="11-use-sass-recommended">1.1 Use Sass (Recommended)</h3>\n<p>Edit <code>/path/to/my-project/app/styles/global/_vendor.scss</code> (manage sass entry files of the vendors)</p>\n<pre><code class="language-css">/* Add BalmUI styles */\n@import &#39;node_modules/balm-ui/src/styles/balm-ui.scss&#39;;</code></pre>\n<p>Then, you can overwrite or redefine UI styles by editing <code>/path/to/my-project/app/styles/global/_var.scss</code>. (See components APIs)</p>\n<p><strong>The template standard format:</strong></p>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;utf-8&quot; /&gt;\n    ...\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/main.css&quot; /&gt;\n    &lt;!-- build:css css/plugins.css --&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/path/to/some-plugin.css&quot; /&gt;\n    ...\n    &lt;!-- endbuild --&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    ...\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<ul>\n<li><code>main.css</code>: The css entry file of the project.</li>\n<li><code>css/plugins.css</code>: The file path after building all third-party style files.</li>\n</ul>\n<blockquote>\n<p>If the third-party provides sass file, recommended to manage in <code>/path/to/my-project/app/styles/global/_vendor.scss</code></p>\n</blockquote>\n<div id="use-css"></div>\n\n<h3 id="12-use-css">1.2 Use CSS</h3>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;utf-8&quot; /&gt;\n    ...\n    &lt;!-- build:css css/vendors.css --&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui/dist/balm-ui.css&quot; /&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/path/to/some-plugin.css&quot; /&gt;\n    ...\n    &lt;!-- endbuild --&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/styles/main.css&quot; /&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    ...\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<blockquote>\n<p>Note <code>main.css</code> position order</p>\n</blockquote>\n<h2 id="2-modular-js">2. Modular JS</h2>\n<div id="default-usage"></div>\n\n<h3 id="21-default-usage">2.1 Default Usage</h3>\n<blockquote>\n<p>Recommended to use for <strong>desktop</strong></p>\n</blockquote>\n<p><strong>2.1.1 Import in JS</strong> (Recommended)</p>\n<p>Edit <code>/path/to/my-project/app/scripts/main.js</code></p>\n<pre><code class="language-js">import Vue from &#39;vue&#39;;\nimport App from &#39;./views/layouts/app&#39;;\nimport BalmUI from &#39;balm-ui&#39;; // Mandatory\nimport BalmUIPlus from &#39;balm-ui/dist/balm-ui-plus&#39;; // Optional\n\nVue.use(BalmUI); // Mandatory\nVue.use(BalmUIPlus); // Optional\n\nnew Vue({\n  el: &#39;#app&#39;,\n  components: { App },\n  template: &#39;&lt;app/&gt;&#39;\n});</code></pre>\n<p><strong>2.1.2 Import in Browser</strong></p>\n<p>Edit <code>/path/to/my-project/app/index.html</code></p>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;utf-8&quot; /&gt;\n    ...\n    &lt;!-- build:css css/vendors.css --&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui/dist/balm-ui.css&quot; /&gt;\n    &lt;!-- endbuild --&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div id=&quot;app&quot;&gt;\n      &lt;ui-button @click=&quot;$alert(message)&quot;&gt;SayHi&lt;/ui-button&gt;\n    &lt;/div&gt;\n\n    &lt;script src=&quot;https://unpkg.com/vue&quot;&gt;&lt;/script&gt;\n    &lt;!-- build:js js/vendors.js --&gt;\n    &lt;script src=&quot;/node_modules/balm-ui/dist/balm-ui.js&quot;&gt;&lt;/script&gt;\n    &lt;script src=&quot;/node_modules/balm-ui/dist/balm-ui-plus.js&quot;&gt;&lt;/script&gt;\n    &lt;!-- endbuild --&gt;\n    &lt;script&gt;\n      var app = new Vue({\n        el: &#39;#app&#39;,\n        data: {\n          message: &#39;Hello BalmUI&#39;\n        }\n      });\n    &lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<div id="standalone-usage"></div>\n\n<h3 id="22-standalone-usage">2.2 Standalone Usage</h3>\n<blockquote>\n<p>Recommended to use for <strong>mobile</strong>, because the building volume is relatively small.</p>\n</blockquote>\n<p><strong>2.2.1 Import in JS</strong></p>\n<p>Edit <code>/path/to/my-project/app/scripts/main.js</code></p>\n<pre><code class="language-js">import Vue from &#39;vue&#39;;\nimport App from &#39;./views/layouts/app&#39;;\n\n// Import BalmUI scripts\nimport UiButton from &#39;balm-ui/components/button&#39;;\nimport $alert from &#39;balm-ui/plugins/alert&#39;;\n\n// Import BalmUI styles (Not recommend usage, and see &quot;Import in Browser&quot; for recommended usage)\nimport &#39;balm-ui/components/core.css&#39;;\nimport &#39;balm-ui/components/button.css&#39;;\nimport &#39;balm-ui/components/dialog.css&#39;;\nimport &#39;balm-ui/plugins/alert.css&#39;;\n\n// Install components or plugins\nVue.use(UiButton);\nVue.use($alert);\n\nnew Vue({\n  el: &#39;#app&#39;,\n  components: { App },\n  template: &#39;&lt;app/&gt;&#39;\n});</code></pre>\n<blockquote>\n<p>With regard to <em>CSSinJS</em>, styles can be extracted through BalmJS configuration, but the idea of BalmJS is more recommended to separate and manage styles and scripts to achieve more flexible module configuration and management.</p>\n</blockquote>\n<p><strong>2.2.2 Import in Browser</strong></p>\n<p>Edit <code>/path/to/my-project/app/index.html</code></p>\n<pre><code class="language-html">&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;utf-8&quot; /&gt;\n    ...\n    &lt;!-- build:css css/vendors.css --&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui/components/core.css&quot; /&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui/components/button.css&quot; /&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui/components/dialog.css&quot; /&gt;\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;/node_modules/balm-ui/plugins/alert.css&quot; /&gt;\n    &lt;!-- endbuild --&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;div id=&quot;app&quot;&gt;\n      &lt;ui-button @click=&quot;$alert(message)&quot;&gt;SayHi&lt;/ui-button&gt;\n    &lt;/div&gt;\n    &lt;script src=&quot;https://unpkg.com/vue&quot;&gt;&lt;/script&gt;\n    &lt;!-- build:js js/vendors.js --&gt;\n    &lt;script src=&quot;/node_modules/balm-ui/components/button.js&quot;&gt;&lt;/script&gt;\n    &lt;script src=&quot;/node_modules/balm-ui/plugins/alert.js&quot;&gt;&lt;/script&gt;\n    &lt;!-- endbuild --&gt;\n    &lt;script&gt;\n      var app = new Vue({\n        el: &#39;#app&#39;,\n        data: {\n          message: &#39;Hello BalmUI&#39;\n        }\n      });\n    &lt;/script&gt;\n  &lt;/body&gt;\n&lt;/html&gt;</code></pre>\n<div id="source-code-usage"></div>\n\n<h3 id="23-source-code-usage">2.3 Source Code Usage</h3>\n<blockquote>\n<p>Just for developing and debugging components, the building production is the same as the default usage.</p>\n</blockquote>\n<p>Edit <code>/path/to/my-project/app/config/balmrc.js</code>, and add the following lines of code:</p>\n<pre><code class="language-js">const path = require(&#39;path&#39;); // Reference path library\n\nmodule.exports = {\n  ...\n  scripts: {\n    ...\n    alias: {\n      ...\n      // Reassign the entry file\n      &#39;balm-ui&#39;: &#39;balm-ui/src/scripts&#39;,\n      &#39;balm-ui-plus&#39;: &#39;balm-ui/src/scripts/plus.js&#39;\n    },\n    include: [\n      // The script in this folder needs to compile ES6+\n      path.resolve(&#39;./node_modules/balm-ui/src/scripts&#39;)\n    ]\n  },\n  ...\n};</code></pre>\n<blockquote>\n<p>Now, the <code>balm-ui</code> referenced in the code points directly to the source code, which can be used to debug BalmUI.</p>\n</blockquote>\n<div id="mdi"></div>\n\n<h2 id="3-get-material-design-icons-without-downloading">3. Get <a href="https://material.balmjs.com/material-icons.zip">Material Design Icons</a> without downloading</h2>\n<p>Edit <code>/path/to/my-project/gulpfile.js</code></p>\n<pre><code class="language-js">...\n\nbalm.go(mix =&gt; {\n  if (balm.config.isProd) {\n    ...\n  } else {\n    // Use BalmJS `copy` api\n    mix.copy(&#39;node_modules/balm-ui/fonts/*&#39;, &#39;app/fonts&#39;);\n  }\n});</code></pre>\n'},X81u:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:[this.$tt("body1"),"demo--advanced"]},[e("div",{class:[this.$tt("body2"),"pure-docs"]},[e("ui-markdown",{directives:[{name:"anchor",rawName:"v-anchor.html",modifiers:{html:!0}}],attrs:{text:this.docs}}),this._v(" "),e("ui-footer-nav",{attrs:{prev:{name:"Getting Started",url:"guide.quickstart"},next:{name:"Kill IE",url:"guide.kill-ie"}}})],1)])};o._withStripped=!0;var s=n("ERrc"),l=n.n(s),a={metaInfo:{titleTemplate:"%s - Advanced Usage"},data:function(){return{docs:l.a}}},i=n("KHd+"),u=Object(i.a)(a,o,[],!1,null,null,null);u.options.__file="docs/scripts/views/guide/advanced.vue";e.default=u.exports}}]);