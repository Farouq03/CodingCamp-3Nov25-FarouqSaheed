# Menggunakan base image nginx versi terbaru yang ringan
FROM nginx:alpine

# Menghapus file default nginx (opsional tapi disarankan)
RUN rm -rf /usr/share/nginx/html/*

# Menyalin seluruh isi folder project (html, css, js) ke folder nginx di dalam container
COPY . /usr/share/nginx/html

# Memberitahu bahwa container berjalan di port 80
EXPOSE 80

# Menjalankan nginx
CMD ["nginx", "-g", "daemon off;"]
