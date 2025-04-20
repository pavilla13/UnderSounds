from .dao.mongo.mongoDAOFactory import MongoDAOFactory
from .dto.cancionDTO import SongsDTO, SongDTO
from .dto.generoDTO import GenerosDTO, GeneroDTO

class Model ():

     def __init__(self):
         #pass
         self.factory = MongoDAOFactory()
         self.daoSong = self.factory.get_canciones()
         self.daoGenero = self.factory.get_generos()


     def get_canciones(self):
        mySongsDTO = SongsDTO()
        songs = self.daoSong.get_canciones()
        for s in songs:
            song_dto = SongDTO()
            song_dto.id = s.get_id()  
            song_dto.title = s.get_title()  
            song_dto.artist = s.get_artist()  
            song_dto.album = s.get_album() 
            song_dto.genre = s.get_genre() 
            song_dto.duration = s.get_duration()  
            song_dto.cover = s.get_cover()  
            song_dto.lyrics = s.get_lyrics() 
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
            genero_dto = genero_dto.generodto_to_dict()
            myGenerosDTO.insertGenero(genero_dto)
        return myGenerosDTO.genrelist_to_json()