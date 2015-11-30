# jquery-onvisible
jQuery onVisible plugin : add on visible event
 

## How to Use?

onVisible depends on jQuery. Include them both in end of your HTML code:

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.onvisible.js" type="text/javascript"></script>
```
 

then in your code do:

```js
$(".foo").listenPosition().on('visible',function(){
    $(this).html("Hello");
});
```

This causes all elements of class foo to be initialized.



## Install

You can install with [bower](http://bower.io/).


```sh
$ bower install jquery-onvisible

```


# License

All code licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php). In other words you are basically free to do whatever you want. Just don't remove my name from the source.

