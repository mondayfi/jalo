// {{comment}}

@font-face
  font-family: {{fontName}}
  src: url("{{fontPath}}/{{fontName}}.eot")
  src: url("{{fontPath}}/{{fontName}}.eot?#iefix") format('embedded-opentype'), url("{{fontPath}}/{{fontName}}.woff") format('woff'), url("{{fontPath}}/{{fontName}}.ttf") format('truetype'), url("{{fontPath}}/{{fontName}}.svg#{{fontName}}") format('svg')
  font-weight: normal
  font-style: normal

=ja-icon($content)
  &:before
    -moz-osx-font-smoothing: grayscale
    -webkit-font-smoothing: antialiased
    transform: translate(0, 0)
    content: $content
    font-family: '{{fontName}}'
    font-style: normal
    font-variant: normal
    font-weight: normal
    font-size: inherit
    speak: none
    text-transform: none
    @content

{% for icon in icons -%}
=ja-icon--{{icon.name}}
  +ja-icon("\{{icon.code}}")
    @content

.ja-icon
  &--{{icon.name}}
    +ja-icon--{{icon.name}}

{% endfor %}
