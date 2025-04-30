from .dao.mongo.mongoDAOFactory import MongoDAOFactory
from .dto.cancionDTO import SongsDTO, SongDTO
from .dto.generoDTO import GenerosDTO, GeneroDTO
from .dto.productoDTO import ProductosDTO, ProductoDTO
from .dto.albumDTO import AlbumDTO, AlbumesDTO
from .dto.artistaDTO import ArtistaDTO, ArtistasDTO
from .dto.amigoDTO import AmigosDTO, AmigoDTO
from .dto.selloDTO import SelloDTO, SellosDTO
from .dto.usuarioDTO import UsuarioDTO, UsuariosDTO

class Model ():

     def __init__(self):
         #pass
         self.factory = MongoDAOFactory()
         self.daoSong = self.factory.get_canciones()
         self.daoGenero = self.factory.get_generos()
         self.daoProducto = self.factory.get_productos()
         self.daoAlbum = self.factory.get_albumes()
         self.daoArtista = self.factory.get_artistas()
         self.daoAmigo = self.factory.get_amigos()
         self.daoSello = self.factory.get_sellos()
         self.daoUsuario = self.factory.get_usuarios()


     def get_canciones(self):
        mySongsDTO = SongsDTO()
        songs = self.daoSong.get_canciones()
        for s in songs:
            song_dto = SongDTO(s.get_id(),
                                 s.get_title(), 
                                 s.get_artist(), 
                                 s.get_album(), 
                                 s.get_genre(), 
                                 s.get_duration(), 
                                 s.get_url(), 
                                 s.get_lyrics(), 
                                 s.get_cover(),
                                 s.get_valoracion())
            song_dto = song_dto.songdto_to_dict()
            mySongsDTO.insertSong(song_dto)  # Agregar la canción a la lista
        return mySongsDTO.songlist_to_json()
    
     def get_generos(self):
        myGenerosDTO = GenerosDTO()
        generos = self.daoGenero.get_generos()
        for s in generos:
            genero_dto = GeneroDTO()
            genero_dto.id = s.get_id()
            genero_dto.name = s.get_name()
            genero_dto.description = s.get_description()
            genero_dto.image = s.get_image()
            genero_dto.url = s.get_url()
            genero_dto.valoracion = s.get_valoracion()
            genero_dto = genero_dto.generodto_to_dict()
            myGenerosDTO.insertGenero(genero_dto)
        return myGenerosDTO.genrelist_to_json()
    
     def get_productos(self):
        myProductosDTO = ProductosDTO()
        productos = self.daoProducto.get_productos()
        for s in productos:
            producto_dto = ProductoDTO()
            producto_dto.id = s.get_id()
            producto_dto.title = s.get_title()
            producto_dto.price = s.get_price()
            producto_dto.image = s.get_image()
            producto_dto.category = s.get_category()
            producto_dto.description = s.get_description()
            producto_dto = producto_dto.productdto_to_dict()
            myProductosDTO.insertProducto(producto_dto)
        return myProductosDTO.productlist_to_json()
    
     def get_albumes(self):
        myAlbumsDTO = AlbumesDTO()
        albums = self.daoAlbum.get_albumes()
        for a in albums:
            album_dto = AlbumDTO(a.get_id(), 
                                 a.get_name(), 
                                 a.get_artist(), 
                                 a.get_genre(), 
                                 a.get_description(), 
                                 a.get_image(), 
                                 a.get_url(),
                                 a.get_valoracion())
            
            album_dto = album_dto.albumdto_to_dict()
            myAlbumsDTO.insertAlbum(album_dto)
        return myAlbumsDTO.albumlist_to_json()

     def get_artistas(self):
        myArtistasDTO = ArtistasDTO()
        artistas = self.daoArtista.get_artistas()
        for a in artistas:
            artista_dto = ArtistaDTO()
            artista_dto.id = a.get_id()
            artista_dto.name = a.get_name()
            artista_dto.genre = a.get_genre()
            artista_dto.description = a.get_description()
            artista_dto.image = a.get_image()
            artista_dto.url = a.get_url()
            artista_dto.selloId = a.get_selloId()
            artista_dto = artista_dto.artistdto_to_dict()
            myArtistasDTO.insertArtist(artista_dto)
        return myArtistasDTO.artistlist_to_json()

     def get_amigos(self):
        myAmigosDTO = AmigosDTO()
        amigos = self.daoAmigo.get_amigos()
        for a in amigos:
            amigo_dto = AmigoDTO()
            amigo_dto.id = a.get_id()
            amigo_dto.name = a.get_name()
            amigo_dto.description = a.get_description()
            amigo_dto.url = a.get_url()
            amigo_dto = amigo_dto.amigodto_to_dict()
            myAmigosDTO.insertAmigo(amigo_dto)
        return myAmigosDTO.amigolist_to_json()

     def get_sellos(self):
        mySellosDTO = SellosDTO()
        sellos = self.daoSello.get_sellos()
        for s in sellos:
            sello_dto = SelloDTO()
            sello_dto.id = s.get_id()
            sello_dto.name = s.get_name()
            sello_dto.description = s.get_description()
            sello_dto.image = s.get_image()
            sello_dto.url = s.get_url()
            sello_dto = sello_dto.sellodto_to_dict()
            mySellosDTO.insertSello(sello_dto)
        return mySellosDTO.selloslist_to_json()
     





     def get_usuarios(self):
        myUsuariosDTO = UsuariosDTO()
        usuarios = self.daoUsuario.get_usuarios()
        for u in usuarios:
            usuario_dto = UsuarioDTO()
            usuario_dto.name = u.get_name()
            usuario_dto.username = u.get_username
            usuario_dto.email = u.get_email()
            usuario_dto.password = u.get_password()
            usuario_dto.tipo_usuario = u.get_tipo_usuario()
            usuario_dto.birthdate = u.get_birthdate()
            usuario_dto.country = u.get_country()
            usuario_dto.profilePic = u.get_profilePic()
            usuario_dto = usuario_dto.userdto_to_dict()
            myUsuariosDTO.insertUser(usuario_dto)
        return myUsuariosDTO.userlist_to_json()
     
     def registrar_usuario(self, usuario_dto):
        return self.daoUsuario.add_usuario(usuario_dto)

     def buscar_usuario_login(self, username):
        return self.daoUsuario.get_usuario_by_username(username)
     
     def buscar_usuario_register(self, username, email):
         return self.daoUsuario.get_usuario_by_username_email(username, email)
     
     def actualizar_usuario(self, user_id, nuevos_datos):
         return self.daoUsuario.actualizar_usuario(user_id, nuevos_datos)
     
     def create_album(self, album_dto):
         return self.daoAlbum.add_album(album_dto)
     
     def update_album(self, nuevos_datos):
         return self.daoAlbum.update_album(nuevos_datos)
     
     def delete_album(self, album_id):
         return self.daoAlbum.delete_album(album_id)
     
     def create_cancion(self, cancion_dto):
         return self.daoSong.add_cancion(cancion_dto)
     
     def update_cancion(self, nuevos_datos):
         return self.daoSong.update_cancion(nuevos_datos)
     
     def delete_cancion(self, cancion_id):
         return self.daoSong.delete_cancion(cancion_id)

     