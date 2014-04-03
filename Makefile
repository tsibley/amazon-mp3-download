README.md: bookmarklet.js
	jsmin < $< \
		| perl -MURI::Escape -ne '$$|++; print uri_escape($$_) unless /^$$/;' \
		> bookmarklet-uri.js
	perl -pi -e 's/(?<="javascript:).*?(?=")/`cat bookmarklet-uri.js`/e' $@
	rm bookmarklet-uri.js
