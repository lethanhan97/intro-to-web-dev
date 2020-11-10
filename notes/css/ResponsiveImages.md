# Responsive Images

2 kinds: 1 with `<image>` tag, another with `background-image` on CSS
Solutions for responsive images:

1. Load 1 picture, resize (bad)
   - Pixelation
   - Small devices still need to download large photos => slower load time
2. Server-side (good)
   - Server, depending on client's screen dimensions, serve the necessary image asset
3. Client-side: Load images of different dimensions and use `display: none` to decide which gets shown (bad)
   - Downloading way more than needed
4. Client-side: Let Javascript decide which img asset to download (better):
   - Not dependent on server side
5. New Picture tag (best):
   - Declarative HTML that's easier to write than JS. Can make use of media query

Example

```
<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
```
