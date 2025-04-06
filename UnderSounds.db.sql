BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "ALBUM" (
	"idAlbum"	INTEGER,
	"nameAlbum"	TEXT,
	"imageAlbum"	BLOB,
	"idArtista"	INTEGER,
	"idGenero"	INTEGER,
	"urlAlbum"	TEXT,
	"descriptionAlbum"	TEXT,
	PRIMARY KEY("idAlbum" AUTOINCREMENT),
	FOREIGN KEY("idArtista") REFERENCES "ARTISTA"("idArtista"),
	FOREIGN KEY("idGenero") REFERENCES "GENERO"("idGenero")
);
CREATE TABLE IF NOT EXISTS "AMIGO" (
	"idSolicitud"	INTEGER,
	"idAmigo"	INTEGER,
	"estadoSolicitud"	TEXT,
	PRIMARY KEY("idSolicitud" AUTOINCREMENT),
	FOREIGN KEY("idAmigo") REFERENCES "USUARIO"("idUsuario")
);
CREATE TABLE IF NOT EXISTS "ARTISTA" (
	"idArtista"	INTEGER,
	"nameArtista"	TEXT,
	"idGenero"	INTEGER,
	"idSello"	INTEGER,
	"imageArtista"	BLOB,
	PRIMARY KEY("idArtista" AUTOINCREMENT),
	FOREIGN KEY("idArtista") REFERENCES "USUARIO"("idUsuario"),
	FOREIGN KEY("idGenero") REFERENCES "GENERO"("idGenero"),
	FOREIGN KEY("idSello") REFERENCES "SELLO"("idSello")
);
CREATE TABLE IF NOT EXISTS "CANCION" (
	"idCancion"	INTEGER,
	"nameCancion"	TEXT,
	"idAlbum"	INTEGER,
	"idArtista"	INTEGER,
	"idGenero"	INTEGER,
	PRIMARY KEY("idCancion" AUTOINCREMENT),
	FOREIGN KEY("idAlbum") REFERENCES "ALBUM"("idAlbum"),
	FOREIGN KEY("idArtista") REFERENCES "ARTISTA"("idArtista"),
	FOREIGN KEY("idGenero") REFERENCES "GENERO"("idGenero")
);
CREATE TABLE IF NOT EXISTS "COMPRA" (
	"idCompra"	INTEGER,
	"idProducto"	INTEGER,
	"fechaEmision"	TEXT,
	"estadoCompra"	TEXT,
	"idUsuario"	INTEGER,
	"idVendedor"	INTEGER,
	PRIMARY KEY("idCompra" AUTOINCREMENT),
	FOREIGN KEY("idProducto") REFERENCES "PRODUCTO"("idProducto"),
	FOREIGN KEY("idUsuario") REFERENCES "USUARIO"("idUsuario"),
	FOREIGN KEY("idVendedor") REFERENCES "ARTISTA"("idArtista")
);
CREATE TABLE IF NOT EXISTS "GENERO" (
	"idGenero"	INTEGER,
	"nameGenero"	TEXT,
	"imageGenero"	BLOB,
	"descriptionGenero"	TEXT,
	"urlGenero"	TEXT,
	PRIMARY KEY("idGenero" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "PRODUCTO" (
	"idProducto"	INTEGER,
	"idArtista"	INTEGER NOT NULL,
	"typeProducto"	INTEGER NOT NULL,
	"nameProducto"	TEXT,
	"descriptionProducto"	TEXT,
	"precioProducto"	NUMERIC,
	"imageProducto"	BLOB,
	"stockProducto"	INTEGER,
	PRIMARY KEY("idProducto" AUTOINCREMENT),
	FOREIGN KEY("idArtista") REFERENCES "ARTISTA"("idArtista"),
	FOREIGN KEY("typeProducto") REFERENCES "TIPO_PRODUCTO"("idTipo")
);
CREATE TABLE IF NOT EXISTS "SELLO" (
	"idSello"	INTEGER,
	"nameSello"	TEXT UNIQUE,
	"descriptionSello"	TEXT,
	"url"	TEXT UNIQUE,
	PRIMARY KEY("idSello" AUTOINCREMENT),
	FOREIGN KEY("idSello") REFERENCES "SELLO"("idSello")
);
CREATE TABLE IF NOT EXISTS "TIPO_PRODUCTO" (
	"idTipo"	INTEGER,
	"nameTipo"	TEXT,
	PRIMARY KEY("idTipo" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "USUARIO" (
	"idUsuario"	INTEGER,
	"nameUsuario"	TEXT,
	"correoUsuario"	TEXT,
	"passUsuario"	TEXT,
	"avatarUsuario"	BLOB,
	"descriptionUsuario"	TEXT,
	"tokenRecuperacion"	TEXT DEFAULT NULL,
	PRIMARY KEY("idUsuario" AUTOINCREMENT)
);
COMMIT;
