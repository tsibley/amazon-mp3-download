README.md: bookmarklet.js
	jsmin < $< \
		| perl -MURI::Escape -ne '$$|++; print uri_escape($$_) unless /^$$/;' \
		> bookmarklet-uri.js
	perl -pi -e 's/(?<=^    javascript:).*$$/`cat bookmarklet-uri.js`/e' $@
	rm bookmarklet-uri.js

publish: amazon-mp3-download.js
	scp $< tsibley.net:www/pub/
	ssh tsibley.net chmod a+r www/pub/$<
