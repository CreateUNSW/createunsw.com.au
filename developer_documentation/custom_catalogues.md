2020.6.8 - Jack Robbers

I've added support for custom catalogues in order to support the BIOM1010 catalogue.

They should be somewhat configurable, but I haven't tested them very throughly.

An important caveat is that products that you want to only appear in custom catalogues CANNOT have a category or categories attribute. This is due to the way the catalogue page uses liquid's map to get the categories. A possible work around might be to add a new attribute to every existing product, but I was reticent to do this unless we actually use this feature a lot.


2020.6.11 - William Liu

I am going to have a look regarding it.
