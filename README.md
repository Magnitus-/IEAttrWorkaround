IEAttrWorkaround
================

Workaround for the IE bug found here: 
http://stackoverflow.com/questions/26268129/css-rules-involving-the-value-of-data-in-ancestors-not-working-well-with-ie-wh

The bug has been reported to the Internet Explorer team and hopefully, they will patch it in the not so distand future, but in the meantime...

How To Use
==========

Do the following call:

```javascript
jQuery.SetupIEAttrWorkAround(CustomIEDetector)
```

Here, CustomIEDetector is a passed function that returns true when the browser is Internet Explorer which causes the workaround to be applied only to that browser (for slight performance improvement in other browsers).

Alternatively, you can not pass any function and that workaround will be applied to all browsers (no ill effect, just a negligible performance hit).

After the above is called, you can set the attributes of elements with the following call:

```javascript
jQuery(<Some Selector>).SetAttr(<Attribute Key>, <Attribute Value>)
```

The above is just a wrapper for:

```javascript
jQuery(<Some Selector>).attr(<Attribute Key>, <Attribute Value>)
```

In addition to calling the above, it adds and removes the 'IEAttrWorkAround' class to force a re-draw on the element(s) who attributes are modified.
