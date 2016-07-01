# PencariLoker
[![Dependency Status](https://david-dm.org/PencariLoker/pencariLoker.svg)](https://david-dm.org/PencariLoker/pencariLoker)
[![Dev Dependencies](https://david-dm.org/PencariLoker/dev/pencariLoker.svg?style=flat-square)](https://david-dm.org/PencariLoker/pencariLoker#info=devDependencies)

PencariLoker adalah sebuah website direktori lowongan kerja
IP : 128.199.133.46
admin panel = 128.199.133.46/admin/login
admin username = admin@example.com
admin password = admin

Tugas Pemrograman Web Lanjutan
# Menggunakan: 
- NodeJS ( RunTime )
- AdonisJS 3 ( BackEnd Framework )
- VueJS ( Views framework )
- LinkedIn ( API to get user profile )
- Google MAPS ( API to get MAP )

# Contributor:
- Javentira Lienata ( Setup dan Penyedia Droplet Digital Ocean, git problem resolver ) 
- Michael ( API and FrontEnd )
- Nipe Setiawan Harefa ( BackEnd )
- Dennis Daslim ( BackEnd + FrontEnd )
- Adeline Rosabella ( BackEnd + FrontEnd )


# Tutorial Instalasi.
Penuhi requirement untuk AdonisJS
- Node.js version 4.0 or greater.
- npm version 3.0 or greater.

Lakukan "npm install", "bower install", dan "gulp"

Setting .env untuk menggunakan database Mysql
Lakukan migration dengan "node ace migration:run"

insert akun admin ke mysql dengan command berikut
```SQL
INSERT INTO `admin` (`id`, `username`, `email`, `password`, `created_at`, `updated_at`, `deleted_at`) VALUES (NULL, 'admin', 'admin@example.com', '$2a$10$O90nQICfQn8.r5FT/Ko.fuouh0bwZ6JhLbFqH2QUMidwWx3GmfOE6', NULL, NULL, CURRENT_TIMESTAMP);
```
jalankan server dengan "npm run dev"
