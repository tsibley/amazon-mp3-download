bookmarklet.js: amazon-mp3-download.js
	jsmin < $< \
		| perl -MURI::Escape -ne 'BEGIN { $$|++; print "javascript:" } print uri_escape($$_) unless /^$$/; END { print "\n" }' \
		> $@
