# Make a pdf of an invoice, use date-name format of invoice
wkhtmltopdf http://127.0.0.1:4000/invoices/$1/ __invoices/$1.pdf
